import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Anchor,
  Binoculars,
  Droplets,
  GlassWater,
  Headphones,
  MapPin,
  ShieldCheck,
  Ship,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCards from "@/app/boat-tours/ExperienceCards";
import { images } from "@/lib/content";
import { Metadata } from "next";

const places = [
  [MapPin, "Dutch Canal", "A historic waterway on the journey."],
  [Anchor, "Dutch Point", "A distinct point of interest along the route."],
  [Ship, "Negombo Lagoon", "The setting for your boat tour."],
  [
    Binoculars,
    "Bird & other aquatic animal watching",
    "Time to observe the lagoonâ€™s wildlife.",
  ],
  [Sparkles, "Monkey Island", "One of the provided places visited."],
  [Sun, "Sunset viewing", "Available during the evening tour."],
];
const inclusions = [
  [Ship, "Boat & Fuel"],
  [ShieldCheck, "Life Jackets"],
  [GlassWater, "Drinking Water"],
  [Droplets, "King Coconut"],
  [Sparkles, "Fresh Fruit Basket"],
  [Headphones, "JBL Music On Board"],
];
const journey = [
  "Hotel Pickup",
  "Dutch Canal",
  "Dutch Point",
  "Negombo Lagoon",
  "Wildlife Watching",
  "Monkey Island",
  "Return to Hotel",
];

export const metadata: Metadata = {
  title: "Negombo Lagoon Boat Tour | Negombo Lagoon Adventures",
  description:
    "Discover Dutch Canal, Dutch Point, Negombo Lagoon and local wildlife on a private boat tour for up to 6 guests.",
};

export default function BoatTours() {
  return (
    <SiteShell>
      <PageHero
        title="Negombo Lagoon Boat Tour"
        copy="A relaxing and memorable way to discover Negombo Lagoon, local waterways, wildlife and beautiful sunset scenery."
        image={images.boat}
      />
      <section className="section-pad bg-foam">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="eyebrow">The experience</p>
              <h2 className="display-title mt-4 text-5xl sm:text-6xl">
                See Negombo from a different angle.
              </h2>
              <p className="text-ink/65 mt-6 max-w-xl text-lg leading-8">
                Enjoy a private boat tour through the places and experiences
                that make the lagoon special. Choose a morning departure or an
                evening journey with the opportunity to enjoy the sunset.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-sand inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold">
                  <Anchor size={16} className="text-lagoon" /> Maximum 6 Guests
                </span>
                <span className="bg-sand inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold">
                  <MapPin size={16} className="text-lagoon" /> Negombo Lagoon
                </span>
              </div>
            </div>
            <div className="bg-ink rounded-3xl p-7 text-white sm:p-9">
              <p className="eyebrow text-gold">Boat tour details</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div className="border-b border-white/15 pb-5">
                  <p className="text-xs tracking-[.15em] text-white/50 uppercase">
                    Tour name
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    Negombo Lagoon Boat Tour
                  </p>
                </div>
                <div className="border-b border-white/15 pb-5">
                  <p className="text-xs tracking-[.15em] text-white/50 uppercase">
                    Maximum guests
                  </p>
                  <p className="text-gold mt-2 text-xl font-bold">6 Guests</p>
                </div>
                <div>
                  <p className="text-xs tracking-[.15em] text-white/50 uppercase">
                    Price
                  </p>
                  <p className="mt-2 text-xl font-bold">Contact Us</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-gold text-ink mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold transition hover:bg-white"
              >
                Book Your Boat Tour <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-sand/50">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Your lagoon experience"
            title="Make the journey your own."
            copy="Settle into the calm of the lagoon with a thoughtful mix of nature, wildlife, music and evening light."
          />
          <ExperienceCards />
        </div>
      </section>
      <section className="section-pad bg-foam">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Choose your departure"
            title="A time that fits your day."
            copy="Both options depart from and return to your hotel. The evening tour may offer the opportunity to enjoy sunset viewing."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-[0_15px_50px_rgba(9,44,59,.07)] sm:p-9">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Morning Tour</h3>
                <Sun className="text-gold" />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-foam rounded-2xl p-5">
                  <p className="text-ink/50 text-xs tracking-[.12em] uppercase">
                    Departure from hotel
                  </p>
                  <p className="text-ocean mt-2 text-2xl font-bold">9:00 AM</p>
                </div>
                <div className="bg-foam rounded-2xl p-5">
                  <p className="text-ink/50 text-xs tracking-[.12em] uppercase">
                    Return to hotel
                  </p>
                  <p className="text-ocean mt-2 text-2xl font-bold">11:00 AM</p>
                </div>
              </div>
            </div>
            <div className="bg-ocean rounded-3xl p-7 text-white shadow-[0_15px_50px_rgba(9,44,59,.14)] sm:p-9">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Evening Tour</h3>
                <Sun className="text-gold" />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xs tracking-[.12em] text-white/55 uppercase">
                    Departure from hotel
                  </p>
                  <p className="text-gold mt-2 text-2xl font-bold">4:00 PM</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-xs tracking-[.12em] text-white/55 uppercase">
                    Return to hotel
                  </p>
                  <p className="text-gold mt-2 text-2xl font-bold">6:30 PM</p>
                </div>
              </div>
              <p className="mt-7 flex items-center gap-2 text-sm text-white/75">
                <Sparkles size={16} className="text-gold" /> Opportunity to
                enjoy the sunset.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad bg-sand/50">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The route"
            title="Places visited & experiences"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {places.map(([Icon, title, copy]) => (
              <div
                key={title as string}
                className="group border-ink/10 hover:border-lagoon/40 rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon
                  className="text-lagoon group-hover:text-gold transition"
                  size={25}
                />
                <h3 className="mt-7 font-bold">{title as string}</h3>
                <p className="text-ink/60 mt-2 text-sm leading-6">
                  {copy as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-ocean text-white">
        <div className="container-wide grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Your journey"
              title="A simple route, beautifully experienced."
              copy="Follow the journey from hotel pickup through the lagoon and back to your hotel."
              light
            />
            <Link
              href="/contact"
              className="bg-gold text-ink mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold"
            >
              Contact Us <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="relative border-l border-white/20 pl-8">
            {journey.map((stop, index) => (
              <div key={stop} className="relative pb-8 last:pb-0">
                <span className="border-gold bg-ocean text-gold absolute top-0 -left-[2.05rem] grid h-7 w-7 place-items-center rounded-full border text-xs font-bold">
                  {index + 1}
                </span>
                <p className="font-bold">{stop}</p>
                {stop === "Wildlife Watching" && (
                  <p className="mt-1 text-sm text-white/60">
                    Bird & other aquatic animal watching
                  </p>
                )}
              </div>
            ))}
            <p className="text-gold mt-2 flex items-center gap-2 text-sm font-bold">
              <ArrowDown size={15} /> Evening tour: sunset viewing
            </p>
          </div>
        </div>
      </section>
      <section className="section-pad bg-foam">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Whatâ€™s included"
                title="Thoughtful essentials for the journey."
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {inclusions.map(([Icon, item]) => (
                <div
                  key={item as string}
                  className="flex items-center gap-4 rounded-2xl bg-white p-5"
                >
                  <Icon className="text-lagoon" size={23} />
                  <span className="font-bold">{item as string}</span>
                </div>
              ))}
              <div className="bg-gold flex items-center gap-4 rounded-2xl p-5 sm:col-span-2">
                <Users className="text-ink" size={23} />
                <span>
                  <strong className="block">Maximum Number of Guests</strong>
                  <span>6 Guests</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-ink py-20 text-white">
        <div className="container-wide flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-gold">Ready for the lagoon?</p>
            <h2 className="display-title mt-3 text-4xl sm:text-5xl">
              Plan your boat tour.
            </h2>
            <p className="mt-4 text-white/65">Price: Contact Us</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-gold text-ink inline-flex items-center gap-2 rounded-full px-5 py-3 font-bold"
            >
              Book Your Boat Tour <ArrowUpRight size={17} />
            </Link>
            <Link
              href="/contact"
              className="hover:border-gold hover:text-gold inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 font-bold text-white transition"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-bold text-white"
            >
              Book via WhatsApp <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
