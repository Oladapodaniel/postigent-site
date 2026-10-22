import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Connect your channels",
    body: "Sign in to each network through its official login. Postigent never asks for, or stores, your social media passwords.",
  },
  {
    title: "Create and schedule",
    body: "Write your post, add images or video, tailor it per channel and drop it on the calendar at the time your audience is online.",
  },
  {
    title: "Postigent publishes it",
    body: "Your post goes live on time, on every channel you picked. Check results later and plan the next week from what worked.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 border-t border-line py-[72px] md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal className="max-w-[640px]">
          <p className="text-sm font-semibold tracking-wide text-highlight uppercase">How it works</p>
          <h2 className="font-display mt-3 text-[length:var(--text-h2)] font-bold">
            From idea to published in three steps.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} index={i} className="relative">
              <li className="list-none">
                {/* Slanted panel numeral: the same tilt as the Postigent mark */}
                <div
                  className="font-display flex h-16 w-14 -skew-y-6 items-center justify-center rounded-[10px] bg-accent text-3xl font-bold text-white"
                  aria-hidden
                >
                  <span className="skew-y-6">{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
