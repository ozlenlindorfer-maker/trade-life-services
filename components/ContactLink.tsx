"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

/**
 * CTA link that always lands on the hero contact form.
 *
 * Plain hash links (`/#contact`) silently fail to scroll when the URL already
 * contains `#contact` — the router treats the click as a no-op. On the home
 * page we intercept the click and smooth-scroll to the form ourselves so it
 * works every time. From other pages we let the normal navigation happen
 * (which scrolls to the anchor on load).
 */
export default function ContactLink({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/") return;
    const el = document.getElementById("contact");
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", "/#contact");
  }

  return (
    <Link href="/#contact" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
