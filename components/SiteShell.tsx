import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
