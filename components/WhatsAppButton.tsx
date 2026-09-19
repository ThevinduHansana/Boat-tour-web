import { MessageCircle } from "lucide-react";
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed right-5 bottom-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 transition hover:scale-105"
    >
      <MessageCircle fill="currentColor" />
    </a>
  );
}
