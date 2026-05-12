"use client";

import { useEffect, useMemo, useState } from "react";
import DisponiblesLink from "../components/DisponiblesLink";

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

function fromISODate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function addDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
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

  for (let i = 0; i < firstOffset; i += 1) days.push(null);
  for (let day = 1; day <= lastDay; day += 1) days.push(new Date(year, monthIndex, day));

  return days;
}

function rangeDates(start, end) {
  if (!start || !end) return [];
  const first = fromISODate(start);
  const last = fromISODate(end);
  if (first > last) return [];

  const dates = [];
  for (let date = first; date <= last; date = addDays(date, 1)) {
    dates.push(toISODate(date));
  }
  return dates;
}

export default function AdminPage() {
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [notes, setNotes] = useState({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [months, setMonths] = useState([]);
  const [reason, setReason] = useState("Uso personal");
  const [status, setStatus] = useState("Cargando disponibilidad...");
  const unavailable = useMemo(() => new Set(unavailableDates), [unavailableDates]);

  useEffect(() => {
    const today = toISODate(new Date());
    setStartDate(today);
    setEndDate(today);
    setMonths([monthStart(0), monthStart(1), monthStart(2)]);

    fetch("/api/availability", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        const listing = data.listings?.[LISTING_ID] || {};
        setUnavailableDates(listing.unavailableDates || []);
        setNotes(listing.notes || {});
        setStatus("");
      })
      .catch(() => setStatus("No se pudo cargar la disponibilidad."));
  }, []);

  const save = async (nextDates, nextNotes) => {
    setStatus("Guardando...");
    const response = await fetch("/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        listingId: LISTING_ID,
        name: "San Luis 1473",
        unavailableDates: nextDates,
        notes: nextNotes,
      }),
    });

    if (!response.ok) {
      setStatus("No se pudo guardar.");
      return;
    }

    setUnavailableDates(nextDates);
    setNotes(nextNotes);
    setStatus("Cambios guardados.");
  };

  const blockDates = (dates) => {
    if (!dates.length) {
      setStatus("Elegí un rango válido.");
      return;
    }

    const nextDates = [...new Set([...unavailableDates, ...dates])].sort();
    const nextNotes = { ...notes };
    dates.forEach((date) => {
      nextNotes[date] = reason || "No disponible";
    });
    save(nextDates, nextNotes);
  };

  const unblockDates = (dates) => {
    if (!dates.length) {
      setStatus("Elegí un rango válido.");
      return;
    }

    const remove = new Set(dates);
    const nextDates = unavailableDates.filter((date) => !remove.has(date));
    const nextNotes = { ...notes };
    dates.forEach((date) => delete nextNotes[date]);
    save(nextDates, nextNotes);
  };

  const toggleDate = (date) => {
    if (unavailable.has(date)) {
      unblockDates([date]);
      return;
    }
    blockDates([date]);
  };

  const blockNextThreeDays = () => {
    const base = new Date();
    blockDates([0, 1, 2].map((offset) => toISODate(addDays(base, offset))));
  };

  return (
    <main className="page">
      <section className="shell admin-shell" aria-label="Panel administrador">
        <header className="topbar">
          <a className="logo-link" href="/" aria-label="Ir al inicio">
            <img src="/assets/logo.png" alt="Refugio Camba" />
          </a>
          <nav className="home-nav" aria-label="Principal">
            <a href="/">Inicio</a>
            <a href="/#resenas">Reseñas</a>
            <DisponiblesLink />
          </nav>
        </header>

        <section className="admin-hero">
          <div>
            <p className="eyebrow">Administrador</p>
            <h1>Fechas de San Luis 1473</h1>
            <p>Bloqueá o liberá días. Los cambios se muestran en el calendario público del alquiler.</p>
          </div>
          <strong>{unavailableDates.length} fechas bloqueadas</strong>
        </section>

        <section className="admin-panel" aria-label="Gestionar fechas">
          <div className="admin-controls">
            <label>
              Desde
              <input type="date" value={startDate} onChange={(event) => setStartDate(event.target.value)} />
            </label>
            <label>
              Hasta
              <input type="date" value={endDate} onChange={(event) => setEndDate(event.target.value)} />
            </label>
            <label>
              Motivo
              <input value={reason} onChange={(event) => setReason(event.target.value)} placeholder="Uso personal" />
            </label>
          </div>
          <div className="admin-actions">
            <button type="button" onClick={() => blockDates(rangeDates(startDate, endDate))}>
              Bloquear rango
            </button>
            <button type="button" className="secondary" onClick={() => unblockDates(rangeDates(startDate, endDate))}>
              Liberar rango
            </button>
            <button type="button" className="secondary" onClick={blockNextThreeDays}>
              Bloquear próximos 3 días
            </button>
          </div>
          <p className="admin-status" aria-live="polite">{status}</p>
        </section>

        <section className="admin-calendar" aria-label="Calendario editable">
          {months.map((month) => (
            <article className="month-card editable" key={toISODate(month)}>
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

                  return (
                    <button
                      className={blocked ? "day blocked" : "day"}
                      title={blocked ? notes[iso] || "No disponible" : "Disponible"}
                      type="button"
                      onClick={() => toggleDate(iso)}
                      key={iso}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
