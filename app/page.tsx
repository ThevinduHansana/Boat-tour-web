import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Fish,
  Leaf,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTopButton from "@/components/BackToTopButton";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { galleryItems, images } from "@/lib/content";

const reasons = [
  [
    Compass,
    "Local experience",
    "A thoughtful way to see Negombo through local eyes.",
  ],
  [
    Leaf,
    "Beautiful lagoon",
    "Quiet waterways, mangroves and the changing light of the coast.",
  ],
  [
    Sparkles,
    "Private adventures",
    "A relaxed experience shaped around your group and your pace.",
  ],
  [
    Fish,
    "Authentic moments",
    "Connect with the people, boats and traditions that make the lagoon special.",
  ],
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-ink relative flex min-h-[92vh] items-end overflow-hidden pt-40 pb-20 text-white sm:min-h-screen">
          <Image
            src={images.hero}
            alt="Boat on Negombo Lagoon at golden hour"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,29,41,.85),rgba(4,29,41,.25)),linear-gradient(0deg,rgba(4,29,41,.85),transparent_65%)]" />
          <div className="container-wide relative">
            <div className="max-w-3xl">
              <p className="text-gold mb-6 text-xs font-bold tracking-[.24em]">
                SUNSHINE BOAT TOURS
              </p>
              <h1 className="display-title text-6xl sm:text-8xl">
                Discover Negombo
                <br />
                <span className="text-gold">from the water.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
                Explore the beauty of Negombo Lagoon, discover local fishing
                life, experience peaceful waterways and enjoy unforgettable
                sunsets on the water.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-gold text-ink inline-flex items-center gap-2 rounded-full px-6 py-4 font-bold transition hover:bg-white"
                >
                  Book Your Tour <ArrowUpRight size={18} />
                </Link>
                <Link
                  href="/boat-tours"
                  className="hover:border-gold hover:text-gold inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-4 font-bold transition"
                >
                  Explore Our Tours <ArrowDown size={18} />
                </Link>
              </div>
            </div>
            <div className="mt-16 flex items-center gap-3 text-xs tracking-[.16em] text-white/50">
              <span className="h-px w-12 bg-white/40" /> BOAT TOURS • FISHING •
              SUNSETS
            </div>
          </div>
        </section>
        <section className="section-pad bg-foam">
          <div className="container-wide">
            <SectionHeading
              eyebrow="Why choose us"
              title="A slower, more meaningful way to meet Negombo."
              copy="This is more than a boat ride. It is an invitation to notice the details: the colour of the water, the call of a bird, the warmth of a local welcome."
            />
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map(([Icon, title, copy]) => (
                <div
                  key={title as string}
                  className="hover:bg-sand bg-white p-7 transition"
                >
                  <Icon
                    className="text-lagoon mb-12"
                    size={26}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg font-bold capitalize">
                    {title as string}
                  </h3>
                  <p className="text-ink/60 mt-3 text-sm leading-6">
                    {copy as string}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-pad bg-foam">
          <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative aspect-[.9] overflow-hidden rounded-4xl">
              <Image
                src={images.lagoon}
                alt="Peaceful tropical lagoon landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-6 left-6 rounded-xl bg-white/85 px-5 py-4 backdrop-blur">
                <p className="text-lagoon text-xs font-bold tracking-[.15em] uppercase">
                  Negombo, Sri Lanka
                </p>
                <p className="mt-1 text-sm">Where the lagoon meets the sea</p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="The place"
                title="Discover Negombo Lagoon"
                copy="A living landscape shaped by water, wind and community. The lagoon’s calm channels open into mangroves, fishing grounds and wide skies where every hour feels different."
              />
              <p className="text-ink/60 mt-6 text-sm leading-7">
                We believe the best way to explore is with curiosity and
                respect. Our trips create space for the natural world and the
                people who call this coastline home.
              </p>
              <Link
                href="/about"
                className="text-lagoon mt-8 inline-flex items-center gap-2 font-bold"
              >
                Our story <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-ocean py-24 text-white">
          <div className="container-wide relative z-10 grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <SectionHeading
              eyebrow="Find your feeling"
              title="Choose your experience."
              light
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Lagoon Adventure",
                "Fishing Experience",
                "Sunset Cruise",
                "Nature & Wildlife",
                "Family Adventure",
                "Photography Experience",
              ].map((item, i) => (
                <Link
                  href="/contact"
                  key={item}
                  className="group hover:border-gold hover:text-gold flex items-center justify-between border-b border-white/20 py-5 text-lg transition"
                >
                  <span>
                    <span className="text-gold mr-4 text-xs">0{i + 1}</span>
                    {item}
                  </span>
                  <ArrowUpRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="section-pad bg-foam">
          <div className="container-wide">
            <div className="flex items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Field notes"
                title="A glimpse of the lagoon."
              />
              <Link
                href="/gallery"
                className="text-lagoon hidden items-center gap-2 font-bold sm:flex"
              >
                View full gallery <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {galleryItems
                .filter((item) => item.type === "image")
                .slice(0, 5)
                .map((item, i) => (
                  <Link
                    href="/gallery"
                    key={item.src}
                    className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2" : "aspect-square"}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </Link>
                ))}
            </div>
            <Link
              href="/gallery"
              className="text-lagoon mt-6 inline-flex items-center gap-2 font-bold sm:hidden"
            >
              View full gallery <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </>
  );
}
