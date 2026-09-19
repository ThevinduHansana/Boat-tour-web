import Image from "next/image";
import Navbar from "@/components/Navbar";
export default function PageHero({
  title,
  copy,
  image,
}: {
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <section className="bg-ink relative flex min-h-[58vh] items-end overflow-hidden pt-36 pb-16 text-white">
      <Navbar />
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,29,41,.85),rgba(4,29,41,.25)),linear-gradient(0deg,rgba(4,29,41,.85),transparent)]" />
      <div className="container-wide relative">
        <p className="eyebrow text-gold mb-5">Negombo Lagoon Adventures</p>
        <h1 className="display-title max-w-3xl text-6xl sm:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">{copy}</p>
      </div>
    </section>
  );
}
