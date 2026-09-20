import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import { images } from "@/lib/content";
import { contact, whatsappLink } from "@/lib/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sunshine Boat Tours",
  description: "Send a booking request for your Negombo Lagoon adventure.",
};

export default function Contact() {
  return (
    <SiteShell>
      <PageHero
        title="Let’s plan your time on the lagoon"
        copy="Tell us what you have in mind and we will help you shape a relaxed, memorable experience in Negombo."
        image={images.contact}
      />
      <section className="section-pad bg-foam">
        <div className="container-wide grid gap-14 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionHeading
              eyebrow="Booking request"
              title="Start with a conversation."
              copy="No payment is required here. Send your preferences and we will reply with the details needed to plan your trip."
            />
            <BookingForm />
          </div>
          <aside className="bg-ocean rounded-3xl p-8 text-white sm:p-10">
            <p className="eyebrow text-gold">Contact details</p>
            <h2 className="display-title mt-4 text-4xl">
              We are here to help.
            </h2>
            <div className="mt-10 grid gap-6 text-sm text-white/75">
              <p className="flex gap-4">
                <MapPin className="text-gold shrink-0" />
                {contact.address}
              </p>
              <p className="flex gap-4">
                <Phone className="text-gold shrink-0" />
                {contact.phone}
              </p>
              <p className="flex gap-4">
                <MessageCircle className="text-gold shrink-0" />
                {contact.whatsapp}
              </p>
              <p className="flex gap-4">
                <Mail className="text-gold shrink-0" />
                {contact.email}
              </p>
            </div>
            <a
              href={whatsappLink() ?? "https://wa.me/"}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-bold text-white"
            >
              Book via WhatsApp <ArrowUpRight size={17} />
            </a>
          </aside>
        </div>
      </section>
      <section className="section-pad bg-sand/50">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Find us"
            title="Negombo, Sri Lanka"
            copy="Placeholder pin below — swap the map query for your exact meeting point once it's confirmed."
          />
          <div className="mt-10 min-h-72 overflow-hidden rounded-3xl">
            <iframe
              src="https://www.google.com/maps?q=Negombo+Lagoon,+Sri+Lanka&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Negombo Lagoon location"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
