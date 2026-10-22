import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { company, links } from "@/lib/site";

export const faqs = [
  {
    q: "Which social networks can I post to?",
    a: "Facebook Pages, Instagram, LinkedIn, X, TikTok, YouTube, Threads, Pinterest, Telegram, Discord, Bluesky, Mastodon, Reddit, Google Business Profile, WordPress, Slack and more. Some networks are being enabled as their platform reviews complete.",
  },
  {
    q: "Do I have to give Postigent my social media passwords?",
    a: "No. You connect each account through the platform's official sign-in screen and approve exactly what Postigent can do. You can remove that access at any time, from Postigent or from the platform's own settings.",
  },
  {
    q: "Can I manage several brands or clients from one account?",
    a: "Yes. Connect as many channels as you need, group them by client, invite teammates and share post previews with clients before anything goes live.",
  },
  {
    q: "Where is my data stored, and can I delete it?",
    a: "Postigent is hosted on servers in the European Union. You can delete a channel or your whole account from Settings, or email info@postigent.com and we'll delete it for you within 30 days.",
  },
  {
    q: "Who is behind Postigent?",
    a: `Postigent is a product of ${company.name} (${company.rc}), a company registered in ${company.country}. You can reach the team at ${links.email}.`,
  },
  {
    q: "Is Postigent open source?",
    a: "Postigent is built on Postiz, an open-source scheduler licensed under AGPL-3.0, and the source code of the version we run is public on GitHub.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-line py-[72px] md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-highlight uppercase">FAQ</p>
          <h2 className="font-display mt-3 text-[length:var(--text-h2)] font-bold">Questions, answered.</h2>
          <p className="mt-5 leading-relaxed text-muted">
            Something else on your mind? Email{" "}
            <a className="text-ink underline decoration-highlight underline-offset-4" href={`mailto:${links.email}`}>
              {links.email}
            </a>
            .
          </p>
        </Reveal>

        <Reveal index={1}>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={20}
                    className="shrink-0 text-highlight transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="pb-6 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
