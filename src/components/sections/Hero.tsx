"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { links } from "@/lib/site";

// The fanned panels: slanted post cards that echo the two offset panels of the Postigent mark.
const panels = [
  {
    channel: "instagram",
    name: "Instagram",
    time: "Mon · 09:00",
    text: "New arrivals are in! Swipe through this week's picks",
    rotate: -6,
    x: -96,
    y: 92,
  },
  {
    channel: "linkedin",
    name: "LinkedIn",
    time: "Tue · 12:30",
    text: "We're hiring a customer success lead in Lagos. Know someone great?",
    rotate: -1.5,
    x: 0,
    y: 0,
  },
  {
    channel: "tiktok",
    name: "TikTok",
    time: "Wed · 18:00",
    text: "60 seconds behind the scenes of our Saturday market stall.",
    rotate: 4,
    x: 96,
    y: -92,
  },
];

function PostCard({ p, i }: { p: (typeof panels)[number]; i: number }) {
  return (
    <div className="w-[min(72vw,290px)] rounded-[var(--radius-card)] border border-white/10 bg-surface/95 p-4 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.8)] backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/channels/${p.channel}.png`} alt="" className="h-7 w-7 rounded-full" />
          <span className="text-sm font-semibold">{p.name}</span>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-xs text-muted">
          <Clock size={12} aria-hidden />
          {p.time}
        </span>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-ink/90">{p.text}</p>
      <div className="mt-4 h-20 rounded-[10px] bg-gradient-to-br from-accent/40 via-raised to-raised" />
      <div className="mt-3 flex items-center gap-2 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
        Scheduled · post {i + 1} of 3
      </div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-hidden pt-[140px] pb-24 md:pt-[170px] md:pb-32">
      <div className="grid-lines absolute inset-0 -z-10" aria-hidden />
      <div className="glow absolute -top-40 left-1/2 -z-10 h-[640px] w-[1100px] -translate-x-1/2" aria-hidden />

      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <motion.div
          variants={staggerContainer}
          initial={reduce ? false : "hidden"}
          animate="visible"
          className="max-w-[620px]"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-[13px] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            Social media scheduling for small businesses, creators &amp; agencies
          </motion.p>

          <motion.h1 variants={fadeUp} className="font-display text-[length:var(--text-display)] font-bold">
            Plan once.
            <br />
            <span className="text-highlight">Post everywhere.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-[540px] text-[length:var(--text-lead)] leading-relaxed text-muted">
            Write a post, choose your channels and pick a time. Postigent publishes it for you on
            Facebook, Instagram, LinkedIn, X, TikTok, YouTube, Telegram, Discord and more, all from
            one calendar.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href={links.signUp}>
              Create your free account <ArrowRight size={18} aria-hidden />
            </Button>
            <Button href={links.signIn} variant="ghost">
              Sign in
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 text-sm text-muted">
            No card required. Connect your first channel in minutes.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto flex h-[400px] w-full max-w-[540px] items-center justify-center max-sm:scale-[0.72] sm:h-[560px]" aria-hidden>
          {panels.map((p, i) => (
            <motion.div
              key={p.channel}
              className="absolute"
              style={{ zIndex: i + 1 }}
              initial={reduce ? false : { opacity: 0, y: 80, rotate: 0, x: 0 }}
              animate={{ opacity: 1, y: p.y, rotate: p.rotate, x: p.x }}
              whileHover={reduce ? undefined : { y: p.y - 10, transition: { duration: 0.25 } }}
              transition={{ duration: 0.9, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <PostCard p={p} i={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
