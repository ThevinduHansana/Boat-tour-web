"use client";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
const links = [
  ["Boat Tours", "/boat-tours"],
  ["Fishing Tours", "/fishing-tours"],
  ["Gallery", "/gallery"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-40 text-white">
      <div className="container-wide flex h-24 items-center justify-between border-b border-white/20">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="border-gold text-gold grid h-10 w-10 place-items-center rounded-full border text-sm font-bold">
            NL
          </span>
          <span className="hidden text-[.68rem] leading-tight font-bold tracking-[.2em] sm:block">
            NEGOMBO LAGOON
            <br />
            ADVENTURES
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          <Link href="/" className="hover:text-gold text-white/75 transition">
            Home
          </Link>
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="hover:text-gold text-white/75 transition"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="bg-gold text-ink hidden items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:bg-white lg:flex"
        >
          Book Your Tour <ArrowUpRight size={16} />
        </Link>
        <button
          className="rounded-full border border-white/30 p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="bg-ink/95 absolute inset-x-0 top-24 border-b border-white/10 px-6 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-5 text-lg">
            {[["Home", "/"], ...links].map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-gold text-ink mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold"
          >
            Book Your Tour <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
