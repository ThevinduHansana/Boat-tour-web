"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { images } from "@/lib/content";
const links = [
  ["Boat Tours", "/boat-tours"],
  ["Fishing Tours", "/fishing-tours"],
  ["Gallery", "/gallery"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <header className="absolute inset-x-0 top-0 z-40 text-white">
      <div className="container-wide flex h-24 items-center justify-between border-b border-white/20">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative h-11 w-11 shrink-0">
            <Image
              src={images.logo}
              alt="Sunshine Boat Tours logo"
              fill
              className="object-contain"
              sizes="44px"
            />
          </span>
          <span className="hidden text-[.68rem] leading-tight font-bold tracking-[.2em] sm:block">
            SUNSHINE
            <br />
            BOAT TOURS
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          <Link
            href="/"
            className={`hover:text-gold transition ${isActive("/") ? "text-gold" : "text-white/75"}`}
          >
            Home
          </Link>
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-gold transition ${isActive(href) ? "text-gold" : "text-white/75"}`}
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
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={isActive(href) ? "text-gold" : undefined}
              >
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
