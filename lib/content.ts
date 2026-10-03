export const images = {
  logo: "/Logo.png",
  hero: "/images/home.jpg",
  contact: "/images/contact.jpg",
  about: "/images/about.jpg",
  lagoon: "/images/negamboo lagoon.jpg",
  boat: "/images/boat.jpg",
  fishing: "/images/fishing.jpg",
  aboutSmall: "/images/about-small.jpg",
};

const galleryFiles = [
  "V1.mp4",
  "1.jpeg",
  "44.mp4",
  "10.jpeg",
  "2.jpeg",
  "45.mp4",
  "11.jpeg",
  "20.jpeg",
  "3.jpeg",
  "46.mp4",
  "12.jpeg",
  "21.jpeg",
  "4.jpeg",
  "13.jpeg",
  "22.jpeg",
  "47.mp4",
  "5.jpeg",
  "14.jpeg",
  "23.jpeg",
  "6.jpeg",
  "15.jpeg",
  "24.jpeg",
  "7.jpeg",
  "16.jpeg",
  "25.jpeg",
  "8.jpeg",
  "17.jpeg",
  "26.jpeg",
  "9.jpeg",
  "18.jpeg",
  "27.jpeg",
  "19.jpeg",
  "28.jpeg",
  "29.jpeg",
  "30.jpeg",
  "31.jpeg",
  "32.jpeg",
  "33.jpeg",
  "34.jpeg",
  "35.jpeg",
  "36.jpeg",
  "37.jpeg",
  "38.jpeg",
  "39.jpeg",
  "40.jpeg",
  "41.jpeg",
  "42.jpeg",
  "43.jpeg",
] as const;

export type GalleryItem = { src: string; alt: string; type: "image" | "video" };

export const galleryItems: GalleryItem[] = galleryFiles.map(
  (filename, index) => {
    const type = filename.endsWith(".mp4") ? "video" : "image";
    return {
      src: `/images/gallery/${filename}`,
      alt:
        type === "video"
          ? `Negombo Lagoon adventure video ${index + 1}`
          : `Negombo Lagoon adventure photograph ${index + 1}`,
      type,
    };
  },
);
