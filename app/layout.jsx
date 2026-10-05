import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/600.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/bricolage-grotesque/800.css";
import "@fontsource/instrument-serif/400-italic.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import "./creative.css";
import "./navigation.css";

export const metadata = {
  title: "David Agbor | Frontend Developer",
  description:
    "David Agbor | frontend developer and Computer Science student in Port Harcourt. Explore my web development projects and the tools I work with.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eceef4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
