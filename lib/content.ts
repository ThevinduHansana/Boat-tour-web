export const images = {
  hero: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2200&q=85",
  lagoon: "/images/negamboo lagoon.jpg",
  boat: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=85",
  fishing: "/images/fishing.jpg",
  mangrove: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
  sunset: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
  nature: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",
  canoe: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=85",
};
export const tours = [
  { title: "Lagoon Explorer", type: "Boat tour", image: images.boat, description: "Glide through quiet waterways and discover the everyday rhythm of life on the lagoon.", duration: "Duration to be confirmed", bestFor: "Curious travellers and first-time visitors", highlights: ["Scenic lagoon routes", "Local stories", "Small-group comfort"] },
  { title: "Mangrove & Wildlife", type: "Boat tour", image: images.mangrove, description: "Follow green channels into the lagoon’s wilder corners, with time to notice birdlife and mangrove ecosystems.", duration: "Duration to be confirmed", bestFor: "Nature lovers and photographers", highlights: ["Mangrove waterways", "Birdwatching", "Peaceful pace"] },
  { title: "Sunset Lagoon Cruise", type: "Sunset cruise", image: images.sunset, description: "Let the day soften around you as warm light settles over the water and fishing boats return home.", duration: "Duration to be confirmed", bestFor: "Couples, families and sunset seekers", highlights: ["Golden-hour views", "Relaxed cruise", "Photography moments"] },
  { title: "Private Lagoon Adventure", type: "Private experience", image: images.canoe, description: "Shape a slower, more personal day on the water around the interests and pace of your group.", duration: "Duration to be confirmed", bestFor: "Private groups and families", highlights: ["Flexible itinerary", "Private boat", "Personalised experience"] },
];
const galleryFiles = [
  "1.jpeg", "44.mp4", "10.jpeg", "2.jpeg", "45.mp4", "11.jpeg", "20.jpeg", "3.jpeg", "46.mp4", "12.jpeg", "21.jpeg", "4.jpeg", "13.jpeg", "22.jpeg", "47.mp4", "5.jpeg", "14.jpeg", "23.jpeg", "6.jpeg", "15.jpeg", "24.jpeg", "7.jpeg", "16.jpeg", "25.jpeg", "8.jpeg", "17.jpeg", "26.jpeg", "9.jpeg", "18.jpeg", "27.jpeg", "19.jpeg", "28.jpeg", "29.jpeg", "30.jpeg", "31.jpeg", "32.jpeg", "33.jpeg", "34.jpeg", "35.jpeg", "36.jpeg", "37.jpeg", "38.jpeg", "39.jpeg", "40.jpeg", "41.jpeg", "42.jpeg", "43.jpeg",
] as const;

export type GalleryItem = { src: string; alt: string; type: "image" | "video" };

export const galleryItems: GalleryItem[] = galleryFiles.map((filename, index) => {
  const type = filename.endsWith(".mp4") ? "video" : "image";
  return {
    src: `/images/gallery/${filename}`,
    alt: type === "video" ? `Negombo Lagoon adventure video ${index + 1}` : `Negombo Lagoon adventure photograph ${index + 1}`,
    type,
  };
});
