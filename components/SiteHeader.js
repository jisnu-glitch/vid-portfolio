"use client";
import { useState, useEffect } from "react";
import JVLogo from "./JVLogo";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Work",     href: "#work"     },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about"    },
  { label: "Contact",  href: "#contact"  },
];

export default function SiteHeader() {
  const [mounted,  setMounted]  = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // small delay so the slide-down animation is visible on load
    const t = setTimeout(() => setMounted(true), 60);
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const cls = [
    "site-header",
    mounted  ? "site-header--in"    : "",
    scrolled ? "site-header--glass" : "",
  ].filter(Boolean).join(" ");

  return (
    <header className={cls}>
      <div className="header-inner">
        {/* Logo — slides in from left */}
        <a className="logo" href="#top" aria-label="Jishnu Vijayan — home">
          <JVLogo />
        </a>

        {/* Nav — links cascade down from above */}
        <nav className="snav" aria-label="Main navigation">
          {LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              className="snav-link"
              style={{ "--ni": i }}
            >
              <span className="snav-label">{label}</span>
            </a>
          ))}

          <span className="snav-sep" aria-hidden="true" />

          <div style={{ animation: `nav-drop-in .55s cubic-bezier(.22,1,.36,1) calc(.52s + 4 * .07s) both` }}>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
