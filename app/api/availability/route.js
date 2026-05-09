import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const DATA_PATH = path.join(process.cwd(), "data", "availability.json");
const REDIS_KEY = "refugio-camba:availability";
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const hasRedis = Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
const redis = hasRedis
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;
const DEFAULT_DATA = {
  listings: {
    "san-luis-1473": {
      name: "San Luis 1473",
      unavailableDates: [],
      notes: {},
    },
  },
};

async function readAvailability() {
  if (redis) {
    const value = await redis.get(REDIS_KEY);
    if (!value) return DEFAULT_DATA;
    return typeof value === "string" ? JSON.parse(value) : value;
  }

  try {
    return JSON.parse(await readFile(DATA_PATH, "utf8"));
  } catch {
    if (process.env.VERCEL) return DEFAULT_DATA;
    await mkdir(path.dirname(DATA_PATH), { recursive: true });
    await writeFile(DATA_PATH, JSON.stringify(DEFAULT_DATA, null, 2));
    return DEFAULT_DATA;
  }
}

async function writeAvailability(data) {
  if (redis) {
    await redis.set(REDIS_KEY, JSON.stringify(data));
    return;
  }

  if (process.env.VERCEL) {
    throw new Error("Missing Upstash Redis env vars for persistent storage.");
  }

  await mkdir(path.dirname(DATA_PATH), { recursive: true });
  await writeFile(DATA_PATH, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = await readAvailability();
  return NextResponse.json(data);
}

export async function POST(request) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (adminPassword && request.headers.get("x-admin-password") !== adminPassword) {
    return NextResponse.json({ error: "Clave de administrador incorrecta." }, { status: 401 });
  }

  if (!redis && process.env.VERCEL) {
    return NextResponse.json(
      { error: "Configurá UPSTASH_REDIS_REST_URL y UPSTASH_REDIS_REST_TOKEN en Vercel." },
      { status: 503 },
    );
  }

  const payload = await request.json();
  const listingId = payload.listingId || "san-luis-1473";
  const dates = Array.isArray(payload.unavailableDates) ? payload.unavailableDates : [];
  const notes = payload.notes && typeof payload.notes === "object" ? payload.notes : {};
  const unavailableDates = [...new Set(dates.filter((date) => DATE_RE.test(date)))].sort();
  const cleanNotes = Object.fromEntries(
    Object.entries(notes).filter(([date, note]) => DATE_RE.test(date) && typeof note === "string"),
  );
  const data = await readAvailability();

  data.listings = data.listings || {};
  data.listings[listingId] = {
    name: payload.name || data.listings[listingId]?.name || "San Luis 1473",
    unavailableDates,
    notes: cleanNotes,
  };

  await writeAvailability(data);
  return NextResponse.json(data);
}
