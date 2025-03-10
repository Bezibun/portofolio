import "./globals.css";

export const metadata = {
  title: "Project 1",
  description: "Project pertama menggunakan ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
