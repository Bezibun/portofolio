import "./globals.css";

export const metadata = {
  title: "Portofolio",
  description: "Portofolio Fauzan ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
