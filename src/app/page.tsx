import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Channels } from "@/components/sections/Channels";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Agencies } from "@/components/sections/Agencies";
import { YourData } from "@/components/sections/YourData";
import { Faq, faqs } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { company, links } from "@/lib/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Postigent",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://postigent.com",
    publisher: {
      "@type": "Organization",
      name: company.name,
      email: links.email,
      address: { "@type": "PostalAddress", addressCountry: "NG" },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Channels />
        <Features />
        <HowItWorks />
        <Agencies />
        <YourData />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
