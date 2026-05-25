"use client";

import { usePathname } from "next/navigation";

const links = [
  { label: "Work",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Contact", href: "mailto:kenfojas@gmail.com" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 right-0 z-50 p-6 flex items-center gap-8">
      {links.map(({ label, href }) => {
        const isActive =
          href.startsWith("mailto") ? false : pathname === href;

        return (
          <a
            key={label}
            href={href}
            className="relative text-[11px] tracking-wide transition-colors"
          >
            {label}
            {isActive && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center"
                style={{ left: "-15%", right: "-15%" }}
              >
                <span
                  style={{
                    display: "block",
                    width: "130%",
                    height: "1px",
                    backgroundColor: "currentColor",
                    transform: "rotate(-12deg)",
                    opacity: 0.6,
                  }}
                />
              </span>
            )}
          </a>
        );
      })}
    </nav>
  );
}
