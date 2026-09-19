"use client";

import { motion } from "framer-motion";
import { Binoculars, Headphones, Sun, Waves } from "lucide-react";

const experiences = [
  [
    Waves,
    "Explore Nature",
    "Explore the peaceful beauty of Negombo Lagoon, surrounded by waterways and natural scenery.",
  ],
  [
    Binoculars,
    "Wildlife Watching",
    "Enjoy opportunities to observe birds and other aquatic wildlife around the lagoon.",
  ],
  [
    Headphones,
    "JBL Music On Board",
    "Relax, chill, and enjoy your favourite music with JBL music available on board while cruising through the peaceful waters of Negombo Lagoon.",
  ],
  [
    Sun,
    "Sunset Experience",
    "During the evening tour, enjoy the beautiful sunset while relaxing on the lagoon.",
  ],
];

export default function ExperienceCards() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {experiences.map(([Icon, title, copy], index) => (
        <motion.article
          key={title as string}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          whileHover={{ y: -6 }}
          className="group border-ink/10 bg-foam rounded-3xl border p-7 shadow-[0_15px_45px_rgba(9,44,59,.06)]"
        >
          <Icon
            className="text-lagoon group-hover:text-gold transition"
            size={28}
            strokeWidth={1.5}
          />
          <h3 className="mt-10 text-xl font-bold">{title as string}</h3>
          <p className="text-ink/60 mt-3 text-sm leading-7">{copy as string}</p>
        </motion.article>
      ))}
    </div>
  );
}
