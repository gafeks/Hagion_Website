import { RequestHero, RequestForm, AfterSubmit } from "@/components/sections/request-quote";
import { CTA } from "@/components/sections";

export default function RequestQuotePage() {
  return (
    <>
      <RequestHero />
      <RequestForm />
      <AfterSubmit />
      <CTA />
    </>
  );
}
