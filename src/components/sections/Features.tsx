import { BarChart3, CalendarDays, Images, Layers, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const week = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const slots: Record<string, { c: string; t: string }[]> = {
  Mon: [{ c: "instagram", t: "09:00" }],
  Tue: [{ c: "linkedin", t: "12:30" }, { c: "x", t: "16:00" }],
  Wed: [{ c: "tiktok", t: "18:00" }],
  Thu: [{ c: "facebook", t: "10:00" }],
  Fri: [{ c: "telegram", t: "08:00" }, { c: "youtube", t: "17:00" }],
  Sat: [{ c: "instagram", t: "11:00" }],
  Sun: [],
};

function CalendarPreview() {
  return (
    <div className="mt-8 grid grid-cols-7 gap-1.5 text-[11px]" aria-hidden>
      {week.map((d) => (
        <div key={d} className="min-w-0">
          <div className="mb-1.5 text-center text-muted">{d}</div>
          <div className="flex h-[132px] flex-col gap-1.5 rounded-[8px] border border-line bg-bg/60 p-1.5">
            {slots[d].map((s) => (
              <div key={s.c + s.t} className="flex items-center gap-1 rounded-[6px] bg-raised px-1 py-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/channels/${s.c}.png`} alt="" className="h-3.5 w-3.5 shrink-0 rounded-full" />
                <span className="truncate text-ink/80">{s.t}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const small = [
  {
    icon: Layers,
    title: "One post, tailored to every network",
    body: "Write once, then adjust the caption, images or video for each channel. Previews show how it will look before it goes live.",
  },
  {
    icon: Users,
    title: "Work together without the back-and-forth",
    body: "Invite teammates, give them the right access and keep feedback on the post itself, not in a dozen chats.",
  },
  {
    icon: BarChart3,
    title: "Know what's working",
    body: "See reach, engagement and follower growth for supported channels in one place, so you post more of what lands.",
  },
  {
    icon: Images,
    title: "Your media, ready when you need it",
    body: "Upload photos and videos once and reuse them across posts from your media library.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-[72px] md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal className="max-w-[720px]">
          <p className="text-sm font-semibold tracking-wide text-highlight uppercase">Features</p>
          <h2 className="font-display mt-3 text-[length:var(--text-h2)] font-bold">
            Everything you need to stay consistent on social, nothing you don&apos;t.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4 md:row-span-2">
            <article className="h-full rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-transform duration-200 hover:-translate-y-1 md:p-8">
              <CalendarDays className="text-highlight" size={26} aria-hidden />
              <h3 className="font-display mt-5 text-[length:var(--text-h3)] font-semibold tracking-tight">
                See your whole week at a glance
              </h3>
              <p className="mt-2 max-w-[520px] leading-relaxed text-muted">
                Plan days, weeks or the whole month on one calendar. Drag a post to a new slot and
                Postigent reschedules it everywhere it&apos;s going.
              </p>
              <CalendarPreview />
            </article>
          </Reveal>

          {small.map((f, i) => (
            <Reveal
              key={f.title}
              index={i + 1}
              className={i < 2 ? "md:col-span-2" : "md:col-span-3"}
            >
              <article className="h-full rounded-[var(--radius-card)] border border-line bg-surface p-6 transition-transform duration-200 hover:-translate-y-1">
                <f.icon className="text-highlight" size={22} aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
