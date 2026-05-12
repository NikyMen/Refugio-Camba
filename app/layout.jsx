import "./globals.css";

export const metadata = {
  title: "Refugio Camba · Alquileres temporarios en Corrientes",
  description:
    "Estadías cuidadas para llegar y disfrutar Corrientes. Refugio Camba ofrece alquileres temporarios cálidos, ordenados y bien ubicados.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
