import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/contact";
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink() ?? "https://wa.me/"}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed right-5 bottom-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition hover:scale-105"
    >
      <MessageCircle fill="currentColor" />
    </a>
  );
}
