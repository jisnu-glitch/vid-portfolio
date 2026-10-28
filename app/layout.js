import "./globals.css";
import { site } from "../data/content";

export const metadata = { title: site.title, description: site.description };
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

const restoreTheme = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload hero before/after posters for instant 0ms visual render */}
        <link rel="preload" as="image" href="/after_poster.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/before_poster.jpg" fetchPriority="high" />
        {/* Preconnect to font origins for faster DNS + TLS negotiation */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Non-blocking font load: display=swap prevents FOIT */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=Comforter&family=Poppins:wght@800&family=Inter+Tight:wght@400;500&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: restoreTheme }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
