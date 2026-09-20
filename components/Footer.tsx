import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/contact";
export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-gold mb-5 text-[.7rem] font-bold tracking-[.2em]">
            SUNSHINE BOAT TOURS
          </p>
          <h2 className="display-title max-w-sm text-4xl">
            Meet the lagoon at its own pace.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
            Boat Tours • Fishing Tours • Sunset Cruises
          </p>
        </div>
        <div>
          <p className="eyebrow mb-5">Explore</p>
          <div className="grid gap-3 text-sm text-white/65">
            {[
              ["Home", "/"],
              ["Boat Tours", "/boat-tours"],
              ["Fishing Tours", "/fishing-tours"],
              ["Gallery", "/gallery"],
              ["About Us", "/about"],
              ["Contact Us", "/contact"],
            ].map(([label, href]) => (
              <Link
                className="hover:text-gold transition"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-5">Contact</p>
          <div className="space-y-3 text-sm leading-6 text-white/65">
            <p className="flex items-start gap-3">
              <MapPin className="text-gold mt-0.5 shrink-0" size={16} />
              {contact.address}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-gold shrink-0" size={16} />
              {contact.phone}
            </p>
            <p className="flex items-center gap-3">
              <MessageCircle className="text-gold shrink-0" size={16} />
              {contact.whatsapp}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-gold shrink-0" size={16} />
              {contact.email}
            </p>
          </div>
          <div className="mt-6 flex gap-3">
            <span className="rounded-full border border-white/20 px-3 py-2 text-xs">
              Instagram
            </span>
            <span className="rounded-full border border-white/20 px-3 py-2 text-xs">
              Facebook
            </span>
            <span className="rounded-full border border-white/20 px-3 py-2 text-xs">
              Tripadvisor
            </span>
          </div>
        </div>
      </div>
      <div className="container-wide flex flex-col justify-between gap-3 border-t border-white/10 py-5 text-xs text-white/40 sm:flex-row">
        <span>© {new Date().getFullYear()} Sunshine Boat Tours</span>
        <span>Authentic experiences on the water.</span>
      </div>
    </footer>
  );
}
