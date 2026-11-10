import "./globals.css";

export const metadata = {
  title: "Sherralene Edusma — Creative Portfolio",
  description: "The portfolio of Sherralene Edusma: UI/UX design, digital art, and selected technology projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
