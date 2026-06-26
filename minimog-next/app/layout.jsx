import "./globals.css";

export const metadata = {
  title: "ThemeForge Marketplace",
  description: "A Next.js marketplace for selling uploaded theme files.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
