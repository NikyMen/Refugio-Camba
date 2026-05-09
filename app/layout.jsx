import "./globals.css";

export const metadata = {
  title: "San Luis 1473 | Refugio Camba",
  description: "Departamento temporal para 2 huéspedes en San Luis 1473, Corrientes.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
