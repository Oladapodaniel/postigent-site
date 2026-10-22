import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { links } from "@/lib/site";

const points = [
  "Group each client's channels together so nothing gets posted to the wrong brand",
  "Invite teammates with roles that match what they should be able to do",
  "Share a preview link so clients can see posts before they go live",
  "One calendar for every client, filterable when you need focus",
];

const clients = [
  { name: "Mama Put Kitchen", channels: ["instagram", "facebook", "tiktok"], posts: 12 },
  { name: "Lekki Dental Studio", channels: ["facebook", "instagram", "gmb"], posts: 8 },
  { name: "Ade & Co. Fashion", channels: ["instagram", "tiktok", "pinterest", "x"], posts: 15 },
];

export function Agencies() {
  return (
    <section id="agencies" className="scroll-mt-24 py-[72px] md:py-32">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-highlight uppercase">For agencies &amp; social managers</p>
          <h2 className="font-display mt-3 text-[length:var(--text-h2)] font-bold">
            Running socials for clients? Keep every brand in its lane.
          </h2>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-highlight">
                  <Check size={14} aria-hidden />
                </span>
                <span className="leading-relaxed text-ink/90">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button href={links.signUp}>Set up your agency workspace</Button>
          </div>
        </Reveal>

        <Reveal index={1}>
          <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5 md:p-6" aria-hidden>
            <div className="mb-4 flex items-center justify-between text-sm text-muted">
              <span>Clients</span>
              <span>Scheduled this week</span>
            </div>
            <ul className="space-y-3">
              {clients.map((c, i) => (
                <li
                  key={c.name}
                  className={`flex items-center justify-between gap-4 rounded-[12px] border p-4 ${
                    i === 0 ? "border-accent/50 bg-accent/[0.07]" : "border-line bg-raised"
                  }`}
                >
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{c.name}</p>
                    <div className="mt-2 flex -space-x-1.5">
                      {c.channels.map((ch) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={ch} src={`/channels/${ch}.png`} alt="" className="h-6 w-6 rounded-full ring-2 ring-surface" />
                      ))}
                    </div>
                  </div>
                  <span className="font-display text-3xl font-bold">{c.posts}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">Illustration. Client names are examples.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
