"use client";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
type GalleryItem = { src: string; alt: string; type: "image" | "video" };
export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
	const [active, setActive] = useState<number | null>(null);
	const imageItems = items.filter(item => item.type === "image");
	const move = (step: number) => setActive(current => current === null ? null : (current + step + imageItems.length) % imageItems.length);
	const activeItem = active === null ? null : imageItems[active];

	return <>
		<div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
			{items.map(item => item.type === "video" ? <div key={item.src} className="mb-5 overflow-hidden rounded-2xl bg-ink">
				<video src={item.src} controls muted playsInline preload="metadata" className="block h-auto w-full" aria-label={item.alt} />
			</div> : <button key={item.src} type="button" onClick={() => setActive(imageItems.indexOf(item))} className="group relative mb-5 block w-full overflow-hidden rounded-2xl text-left">
				<Image src={item.src} alt={item.alt} width={1200} height={900} className="h-auto w-full object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
				<span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 pt-12 text-sm text-white opacity-0 transition group-hover:opacity-100">View photo</span>
			</button>)}
		</div>
		{activeItem && <div className="fixed inset-0 z-50 grid place-items-center bg-ink/90 p-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Gallery preview">
			<button type="button" onClick={() => setActive(null)} aria-label="Close gallery" className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white"><X /></button>
			<button type="button" onClick={() => move(-1)} aria-label="Previous image" className="absolute left-3 rounded-full bg-white/10 p-3 text-white sm:left-8"><ChevronLeft /></button>
			<div className="relative h-[75vh] w-full max-w-5xl"><Image src={activeItem.src} alt={activeItem.alt} fill className="object-contain" sizes="90vw" /></div>
			<button type="button" onClick={() => move(1)} aria-label="Next image" className="absolute right-3 rounded-full bg-white/10 p-3 text-white sm:right-8"><ChevronRight /></button>
		</div>}
	</>;
}