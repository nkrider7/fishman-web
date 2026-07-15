import { Pill } from "../ui/Pill";

const SUPPORTED = ["Express", "Fastify", "Koa", "Hono", "Elysia", "NestJS", "Next.js", "Bun / Nitro"];

const COMING_SOON = [
  "Python",
  "Django",
  "Flask",
  "Go",
  "Rust",
  "Java Spring Boot",
  "Laravel",
  "ASP.NET",
];

function SupportCard({ title, items, muted = false, className = "" }) {
  return (
    <div
      className={[
        "rounded-[18px] border bg-fish-card p-4",
        muted
          ? "border-fish-primary/15 [background-image:linear-gradient(160deg,rgba(254,159,2,0.03),transparent_55%)]"
          : "border-fish-primary/25 [background-image:linear-gradient(160deg,rgba(254,159,2,0.06),transparent_55%)]",
        className,
      ].join(" ")}
    >
      <h3 className="mb-3 font-display text-sm font-semibold text-fish-ink">{title}</h3>
      <div className="flex flex-wrap gap-2" role="list" aria-label={title}>
        {items.map((item) => (
          <Pill key={item} muted={muted}>
            {item}
          </Pill>
        ))}
      </div>
    </div>
  );
}

export function SupportPanels() {
  return (
    <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
      <SupportCard title="Supported today" items={SUPPORTED} />
      <SupportCard title="Coming soon" items={COMING_SOON} muted />
    </div>
  );
}
