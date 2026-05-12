const icons = {
  living: (
    <>
      <path d="M5 12h14a2 2 0 0 1 2 2v4H3v-4a2 2 0 0 1 2-2Z" />
      <path d="M6 12V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
      <path d="M6 18v2M18 18v2" />
    </>
  ),
  dining: (
    <>
      <path d="M7 3v8M4 3v8M10 3v8M4 7h6" />
      <path d="M7 11v10" />
      <path d="M16 3v18" />
      <path d="M16 3c3 2 4 5 4 8h-4" />
    </>
  ),
  kitchen: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8 8h8M8 13h8M9 17h.01M15 17h.01" />
    </>
  ),
  bed: (
    <>
      <path d="M4 11V6h6a3 3 0 0 1 3 3v2" />
      <path d="M4 11h16a2 2 0 0 1 2 2v5H2v-5a2 2 0 0 1 2-2Z" />
      <path d="M2 18v2M22 18v2" />
    </>
  ),
  bath: (
    <>
      <path d="M5 11h15v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2a1 1 0 0 1 1-1Z" />
      <path d="M7 11V6a3 3 0 0 1 6 0" />
      <path d="M12 6h3M8 19l-1 2M17 19l1 2" />
    </>
  ),
  balcony: (
    <>
      <path d="M5 5h14v16H5z" />
      <path d="M5 13h14M9 13v8M15 13v8" />
    </>
  ),
  laundry: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M9 7h.01M13 7h2" />
      <circle cx="12" cy="14" r="4" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
      <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
      <path d="M3 21h18" />
    </>
  ),
  left: <path d="M15 18 9 12l6-6" />,
  right: <path d="m9 18 6-6-6-6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  zoom: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
    </>
  ),
  phone: (
    <path d="M7 4h4l2 5-3 2a13 13 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2A17 17 0 0 1 5 6c0-1 1-2 2-2Z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5 7-11a7 7 0 0 0-14 0c0 6 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 12a12 12 0 0 1 14 0" />
      <path d="M8.5 15.5a7 7 0 0 1 7 0" />
      <circle cx="12" cy="19" r="1" />
    </>
  ),
  ac: (
    <>
      <path d="M12 3v18M3 12h18" />
      <path d="m5 5 14 14M19 5 5 19" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="5" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M10 17V8h3.5a2.5 2.5 0 0 1 0 5H10" />
    </>
  ),
  security: (
    <>
      <path d="M12 3 5 6v6c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  wa: (
    <path
      d="M20.5 11.5c0 4.7-3.8 8.5-8.5 8.5a8.5 8.5 0 0 1-4.3-1.2L3 20l1.2-4.5A8.5 8.5 0 0 1 20.5 11.5Zm-12 .5c.5 1.6 1.7 2.8 3.2 3.4.4.2.9.1 1.2-.2l.6-.6c.3-.3.7-.4 1-.2l1.7.7c.3.2.5.5.5.9-.1 1.2-1 2-2 2-3.5 0-6.5-3-6.5-6.5 0-1 .8-1.9 2-2 .4 0 .7.2.9.5l.7 1.7c.2.3.1.7-.2 1l-.6.6c-.3.3-.4.8-.2 1.2"
      fill="currentColor"
    />
  ),
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
};

export default function Icon({ type, ...props }) {
  const node = icons[type];
  if (!node) return null;
  const isFilled = type === "wa";
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...(isFilled ? { fill: "currentColor" } : {})}
      {...props}
    >
      {node}
    </svg>
  );
}
