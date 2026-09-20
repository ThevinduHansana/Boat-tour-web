import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Fish, MapPin, Timer } from "lucide-react";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { images } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fishing Tour | Sunshine Boat Tours",
  description:
    "Experience a 3-hour fishing tour on Negombo Lagoon in Sri Lanka.",
};

export default function FishingTours() {
  return (
    <SiteShell>
      <PageHero
        title="Experience fishing in Negombo"
        copy="Spend three hours experiencing fishing on Negombo Lagoon, with time to connect with the water and the local fishing environment."
        image={images.fishing}
      />
      <section className="section-pad bg-foam">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative aspect-[.9] overflow-hidden rounded-3xl">
            <Image
              src={images.fishing}
              alt="Fishing boat on Negombo Lagoon"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div>
            <p className="eyebrow">Fishing Tour</p>
            <h2 className="display-title mt-4 text-5xl sm:text-6xl">
              A closer look at lagoon fishing.
            </h2>
            <p className="text-ink/65 mt-6 text-lg leading-8">
              Experience fishing on Negombo Lagoon in a focused three-hour tour.
              This experience takes place on the lagoon only and does not
              include deep-sea or ocean fishing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-sand inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold">
                <Timer size={16} className="text-lagoon" /> 3 Hours
              </span>
              <span className="bg-sand inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold">
                <MapPin size={16} className="text-lagoon" /> Negombo Lagoon
              </span>
            </div>
            <div className="bg-ink mt-8 rounded-2xl p-6 text-white">
              <p className="text-xs tracking-[.15em] text-white/50 uppercase">
                Price
              </p>
              <p className="text-gold mt-2 text-2xl font-bold">Contact Us</p>
            </div>
            <Link
              href="/contact"
              className="bg-gold text-ink hover:bg-lagoon mt-7 inline-flex items-center gap-2 rounded-full px-6 py-4 font-bold transition hover:text-white"
            >
              Book Your Fishing Tour <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-pad bg-sand/50">
        <div className="container-wide">
          <SectionHeading
            eyebrow="The experience"
            title="Fishing on Negombo Lagoon only."
            copy="This is a lagoon fishing experience for travellers who want to spend meaningful time on the water and understand the setting around them."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                Fish,
                "A lagoon setting",
                "Your fishing tour takes place on Negombo Lagoon, surrounded by its waterways and coastal landscape.",
              ],
              [
                Timer,
                "Three focused hours",
                "The tour duration is 3 Hours, giving you time to settle into the pace of the lagoon.",
              ],
              [
                MapPin,
                "A clear location",
                "Location: Negombo Lagoon only. No deep-sea or ocean fishing is included.",
              ],
            ].map(([Icon, title, copy]) => (
              <div key={title as string} className="rounded-2xl bg-white p-7">
                <Icon className="text-lagoon" size={25} />
                <h3 className="mt-8 text-xl font-bold">{title as string}</h3>
                <p className="text-ink/60 mt-3 leading-7">{copy as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Plan your fishing tour."
        copy="Three hours on Negombo Lagoon, at a pace that lets you take it in."
      />
    </SiteShell>
  );
}
