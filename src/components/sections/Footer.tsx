import { company, links } from "@/lib/site";
import { CurrentYear } from "@/components/ui/CurrentYear";

const columns = [
  {
    title: "Product",
    items: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "For agencies", href: "#agencies" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Create account", href: links.signUp },
      { label: "Sign in", href: links.signIn },
      { label: "Contact us", href: `mailto:${links.email}` },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: links.privacy },
      { label: "Terms of Service", href: links.terms },
      { label: "Data deletion", href: links.dataDeletion },
      { label: "Source code (AGPL-3.0)", href: links.source },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/postigent-lockup-dark.png" alt="Postigent" className="h-8 w-auto" />
          <p className="mt-4 max-w-[300px] text-[15px] leading-relaxed text-muted">
            Social media scheduling for small businesses, creators and agencies.
          </p>
          <a href={`mailto:${links.email}`} className="mt-4 inline-block text-[15px] text-ink hover:text-highlight">
            {links.email}
          </a>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.items.map((it) => (
                <li key={it.label}>
                  <a href={it.href} className="text-[15px] text-muted transition-colors hover:text-ink">
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-4 py-6 text-[13px] leading-relaxed text-muted sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; <CurrentYear /> {company.name} ({company.rc}). Postigent is a product of {company.name}, a
            company registered in {company.country}.
          </p>
          <p>
            Built on{" "}
            <a href={links.postiz} className="underline underline-offset-4 hover:text-ink">
              Postiz
            </a>{" "}
            (AGPL-3.0)
          </p>
        </div>
      </div>
    </footer>
  );
}
