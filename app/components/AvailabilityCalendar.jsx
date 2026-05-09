"use client";

import { useEffect, useMemo, useState } from "react";

const LISTING_ID = "san-luis-1473";
const WEEK_DAYS = ["L", "M", "M", "J", "V", "S", "D"];
const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthStart(offset) {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth() + offset, 1);
}

function buildDays(month) {
  const days = [];
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstOffset = (new Date(year, monthIndex, 1).getDay() + 6) % 7;
  const lastDay = new Date(year, monthIndex + 1, 0).getDate();

  for (let i = 0; i < firstOffset; i += 1) {
    days.push(null);
  }

  for (let day = 1; day <= lastDay; day += 1) {
    days.push(new Date(year, monthIndex, day));
  }

  return days;
}

export default function AvailabilityCalendar({ title = "Disponibilidad", compact = false }) {
  const [availability, setAvailability] = useState({ unavailableDates: [], notes: {} });
  const [status, setStatus] = useState("Cargando disponibilidad...");
  const today = toISODate(new Date());

  useEffect(() => {
    let active = true;

    fetch("/api/availability", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        if (!active) return;
        const listing = data.listings?.[LISTING_ID] || {};
        setAvailability({
          unavailableDates: listing.unavailableDates || [],
          notes: listing.notes || {},
        });
        setStatus("");
      })
      .catch(() => {
        if (active) setStatus("No se pudo cargar la disponibilidad.");
      });

    return () => {
      active = false;
    };
  }, []);

  const unavailable = useMemo(() => new Set(availability.unavailableDates), [availability.unavailableDates]);
  const months = useMemo(() => [monthStart(0), monthStart(1)], []);

  return (
    <section className={compact ? "availability-card compact" : "availability-card"} aria-labelledby="availability-title">
      <div className="availability-head">
        <div>
          <h2 id="availability-title">{title}</h2>
        </div>
        <div className="availability-legend" aria-label="Referencia">
          <span>
            <b className="available-dot" /> Disponible
          </span>
          <span>
            <b className="blocked-dot" /> No disponible
          </span>
        </div>
      </div>

      {status ? <p className="calendar-status">{status}</p> : null}

      <div className="calendar-grid">
        {months.map((month) => (
          <article className="month-card" key={toISODate(month)}>
            <h3>
              {MONTHS[month.getMonth()]} {month.getFullYear()}
            </h3>
            <div className="week-row" aria-hidden="true">
              {WEEK_DAYS.map((day, index) => (
                <span key={`${day}-${index}`}>{day}</span>
              ))}
            </div>
            <div className="day-grid">
              {buildDays(month).map((date, index) => {
                if (!date) return <span className="day empty" key={`empty-${index}`} />;
                const iso = toISODate(date);
                const blocked = unavailable.has(iso);
                const isPast = iso < today;
                const titleText = blocked
                  ? availability.notes[iso] || "No disponible"
                  : isPast
                    ? "Fecha pasada"
                    : "Disponible";

                return (
                  <span
                    className={[
                      "day",
                      blocked ? "blocked" : "",
                      isPast ? "past" : "",
                      iso === today ? "today" : "",
                    ].join(" ")}
                    title={titleText}
                    aria-label={`${iso}: ${titleText}`}
                    key={iso}
                  >
                    {date.getDate()}
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
