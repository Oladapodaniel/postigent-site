import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { links } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="pb-[72px] md:pb-32">
      <Reveal className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-[var(--radius-card)] border border-accent/40 bg-accent px-6 py-16 text-center md:px-12 md:py-24">
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgb(255_255_255/0.22),transparent_55%)]"
            aria-hidden
          />
          {/* echo of the mark: two slanted panels */}
          <div className="absolute -bottom-16 -left-10 -z-10 h-56 w-40 -skew-y-12 rounded-[18px] bg-black/15" aria-hidden />
          <div className="absolute -right-8 -top-14 -z-10 h-56 w-40 -skew-y-12 rounded-[18px] bg-white/10" aria-hidden />

          <h2 className="font-display mx-auto max-w-[760px] text-[length:var(--text-h2)] font-bold text-white">
            Next week&apos;s posts, done by Monday morning.
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-lg text-white/85">
            Batch your content in one sitting and let Postigent post it on time, every time.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href={links.signUp} variant="light">
              Create your free account <ArrowRight size={18} aria-hidden />
            </Button>
            <Button href={links.signIn} variant="outline-light">
              Sign in
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
