import Image from "next/image";
import { Heart, ShieldCheck, Compass, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { images } from "@/lib/content";
import { Metadata } from "next";

const certifications = [
  ["Life Saving", "Ocean University of Sri Lanka"],
  [
    "Outboard Engine Repair, Maintenance & Handling",
    "Ocean University of Sri Lanka",
  ],
];

export const metadata: Metadata = {
  title: "About Us | Sunshine Boat Tours",
  description: "Meet the local people and values behind Sunshine Boat Tours.",
};

export default function About() {
  return (
    <SiteShell>
      <PageHero
        title="A local welcome on the water"
        copy="Sunshine Boat Tours is built around a simple idea: the best experiences feel personal, thoughtful and connected to place."
        image={images.about}
        className="object-top"
      />
      <section className="section-pad bg-foam">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="The lagoon is home."
              copy="We want visitors to experience Negombo beyond the postcard. That means sharing the calm, the colour and the living culture of the lagoon with genuine hospitality."
            />
            <p className="text-ink/60 mt-6 leading-8">
              Our approach is grounded in local knowledge, a respect for the
              water and a belief that a good day out should leave you feeling
              closer to the place you visited.
            </p>
          </div>
          <div className="relative aspect-[.85] overflow-hidden rounded-3xl">
            <Image
              src={images.aboutSmall}
              alt="Boat on tropical water"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>
      <section className="section-pad bg-sand/50">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Why travel with us"
            title="Warm, local and considered."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                Compass,
                "Local knowledge",
                "See the lagoon with people who understand its rhythms.",
              ],
              [
                Heart,
                "Hospitality",
                "Feel welcomed, listened to and comfortable from the first hello.",
              ],
              [
                ShieldCheck,
                "Safety & comfort",
                "We take a careful, responsible approach to time on the water.",
              ],
              [
                Users,
                "Community minded",
                "Celebrate the people and fishing culture that give the lagoon its character.",
              ],
            ].map(([Icon, title, copy]) => (
              <div key={title as string} className="rounded-2xl bg-white p-7">
                <Icon className="text-lagoon" size={25} />
                <h3 className="mt-8 text-xl font-bold">{title as string}</h3>
                <p className="text-ink/60 mt-3 text-sm leading-6">
                  {copy as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad bg-foam">
        <div className="container-wide max-w-4xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="eyebrow mb-4">Meet your local guide</p>
              <h2 className="display-title text-5xl">Chanaka Mello</h2>
              <p className="text-ink/70 mt-6 text-xl leading-9">
                Business owner and local host. Chanaka brings a personal
                connection to Negombo Lagoon and a warm, grounded approach to
                showing guests the water.
              </p>
              <p className="text-ink/60 mt-5 leading-7">
                Every trip is an opportunity to share the place responsibly,
                answer questions honestly and create an experience that feels
                like your own.
              </p>
            </div>
            <div className="mx-auto w-full max-w-65 shrink-0 lg:mx-0">
              <Image
                src="/images/local-guide.jpeg"
                alt="Chanaka Mello, your local guide"
                width={224}
                height={280}
                className="aspect-4/5 w-full rounded-3xl object-cover"
              />
            </div>
          </div>
          <div className="max-w-4xl">
            <p className="eyebrow mt-10 mb-4">Certified & trained</p>
            <p className="text-ink/60 mb-6 leading-7">
              With years of hands-on experience navigating the lagoon, Chanaka
              pairs that local know-how with formal training, so you’re in safe,
              capable hands from start to finish.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {certifications.map(([title, issuer]) => (
                <div
                  key={title}
                  className="border-gold/30 flex items-start gap-4 rounded-2xl border bg-white p-5"
                >
                  <Image
                    src="/images/award.png"
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 object-contain"
                  />
                  <div>
                    <p className="font-bold">{title}</p>
                    <p className="text-ink/55 mt-1 text-sm">{issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Come as a visitor. Leave with a memory."
        copy="There is always another corner of the lagoon to discover."
      />
    </SiteShell>
  );
}
