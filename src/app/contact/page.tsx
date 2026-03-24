import { ContactHero, ContactForm, ContactMap } from "@/components/sections/contact";
import { CTA } from "@/components/sections";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <CTA />
    </>
  );
}
