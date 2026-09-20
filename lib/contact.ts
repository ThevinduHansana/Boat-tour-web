const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export const contact = {
  phone: phoneNumber,
  whatsapp: phoneNumber,
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "",
};

export function whatsappLink(message?: string) {
  const digits = contact.whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}
