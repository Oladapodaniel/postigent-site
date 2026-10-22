import { KeyRound, ServerCog, ShieldCheck, Trash2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { links } from "@/lib/site";

const items = [
  {
    icon: KeyRound,
    title: "Official sign-in only",
    body: "Channels connect through each platform's own login (OAuth). You choose what to allow, and Postigent never sees your passwords.",
  },
  {
    icon: ShieldCheck,
    title: "Used only to do what you ask",
    body: "We use connected-account data to publish the posts you schedule and to show your analytics. We don't sell it or use it for ads.",
  },
  {
    icon: ServerCog,
    title: "Hosted in the EU",
    body: "Postigent runs on servers in the European Union, over encrypted connections.",
  },
  {
    icon: Trash2,
    title: "Leave whenever you like",
    body: "Disconnect a channel or delete your account from Settings at any time, or ask us and we'll do it for you.",
  },
];

export function YourData() {
  return (
    <section id="privacy" className="scroll-mt-24 border-t border-line py-[72px] md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-14 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-highlight uppercase">Your accounts, your control</p>
          <h2 className="font-display mt-3 text-[length:var(--text-h2)] font-bold">
            We publish for you. We don&apos;t take over.
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            When you connect Facebook, Instagram, YouTube or any other channel, Postigent only uses
            that access to publish what you schedule and to show how your posts perform. Postigent&apos;s
            use and transfer of information received from Google APIs adheres to the{" "}
            <a
              className="text-ink underline decoration-highlight underline-offset-4"
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Read the details in our{" "}
            <a className="text-ink underline decoration-highlight underline-offset-4" href={links.privacy}>
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="text-ink underline decoration-highlight underline-offset-4" href={links.dataDeletion}>
              data deletion instructions
            </a>
            .
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.title} index={i}>
              <div className="h-full rounded-[var(--radius-card)] border border-line bg-surface p-6">
                <it.icon className="text-highlight" size={22} aria-hidden />
                <h3 className="mt-4 font-semibold">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
