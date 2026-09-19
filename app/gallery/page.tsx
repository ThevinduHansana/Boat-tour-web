import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import GalleryGrid from "@/components/GalleryGrid";
import SectionHeading from "@/components/SectionHeading";
import { galleryItems } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Negombo Lagoon Adventures",
  description:
    "A visual journal of Negombo Lagoon, local boats, fishing and sunset cruises.",
};

export default function Gallery() {
  return (
    <SiteShell>
      <PageHero
        title="Scenes from the lagoon"
        copy="A visual journal of calm waterways, working boats, mangrove edges and the light that changes everything."
        image={galleryItems[0].src}
      />
      <section className="section-pad bg-foam">
        <div className="container-wide">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="The gallery"
              title="Look closer."
              copy="Explore the beauty of Negombo Lagoon through our collection of real moments from the water. Discover peaceful lagoon views, traditional boats, wildlife, fishing experiences, the historic Dutch Canal, and beautiful sunsets. Take a closer look at the places and experiences waiting for you on your next adventure with Negombo Lagoon Adventures."
            />
          </div>
          <div className="mt-12">
            <GalleryGrid items={galleryItems} />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
