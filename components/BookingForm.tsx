"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent } from "react";
import { whatsappLink } from "@/lib/contact";

const fields: [string, string, string, string][] = [
  ["Name", "Your name", "text", "name"],
  ["Email", "you@example.com", "email", "email"],
  ["Phone / WhatsApp", "Your number", "tel", "phone"],
  ["Preferred date", "Select a date", "date", "date"],
  ["Number of guests", "How many people?", "number", "guests"],
];

export default function BookingForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const lines = [
      ["Tour", data.get("tour")],
      ["Name", data.get("name")],
      ["Email", data.get("email")],
      ["Phone", data.get("phone")],
      ["Preferred date", data.get("date")],
      ["Guests", data.get("guests")],
      ["Message", data.get("message")],
    ]
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}: ${value}`);

    const message = ["New booking request", ...lines].join("\n");
    const url = whatsappLink(message);
    if (!url) {
      alert(
        "WhatsApp number not configured yet. Add NEXT_PUBLIC_WHATSAPP_NUMBER to your .env file.",
      );
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="mt-10 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
      <div className="sm:col-span-2">
        <label className="mb-2 block text-sm font-bold" htmlFor="tour">
          Preferred tour
        </label>
        <select
          id="tour"
          name="tour"
          className="border-ink/15 focus:border-lagoon w-full rounded-xl border bg-white px-4 py-3 outline-none"
        >
          <option>Boat Tour</option>
          <option>Fishing Tour</option>
          <option>Sunset Cruise</option>
          <option>Private Lagoon Adventure</option>
        </select>
      </div>
      {fields.map(([label, placeholder, type, name]) => (
        <label key={name} className="grid gap-2 text-sm font-bold">
          {label}
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="border-ink/15 placeholder:text-ink/35 focus:border-lagoon rounded-xl border bg-white px-4 py-3 font-normal outline-none"
          />
        </label>
      ))}
      <label className="grid gap-2 text-sm font-bold sm:col-span-2">
        Message
        <textarea
          rows={5}
          name="message"
          placeholder="Tell us a little about your plans..."
          className="border-ink/15 placeholder:text-ink/35 focus:border-lagoon rounded-xl border bg-white px-4 py-3 font-normal outline-none"
        />
      </label>
      <button
        type="submit"
        className="bg-gold text-ink hover:bg-lagoon inline-flex w-fit items-center gap-2 rounded-full px-6 py-4 font-bold transition hover:text-white"
      >
        Send Booking Request <ArrowUpRight size={18} />
      </button>
    </form>
  );
}
