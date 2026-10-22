import { channels } from "@/lib/site";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden}>
      {channels.map((c) => (
        <li
          key={c.id}
          className="flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2.5 whitespace-nowrap"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/channels/${c.id}.png`} alt="" className="h-6 w-6 rounded-full" />
          <span className="text-[15px] text-ink/90">{c.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function Channels() {
  return (
    <section aria-labelledby="channels-heading" className="border-y border-line py-10">
      <h2 id="channels-heading" className="mb-6 px-4 text-center text-sm text-muted">
        Publish to the channels your customers already use
      </h2>
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
