import {
  IconBody,
  IconCheck,
  IconCollection,
  IconGithub,
  IconRoutes,
  IconScan,
} from "./icons";

const STEPS = [
  { id: "source", label: "Backend Source Code", icon: IconGithub },
  { id: "scanner", label: "Fishman Scanner", icon: IconScan, active: true },
  { id: "routes", label: "Routes", icon: IconRoutes },
  { id: "bodies", label: "Request Bodies", icon: IconBody },
  { id: "collections", label: "Collections", icon: IconCollection },
  { id: "ready", label: "Ready to Test", icon: IconCheck, final: true },
];

function FlowStep({ label, icon: Icon, active, final }) {
  return (
    <div
      className={[
        "flex items-center gap-3 rounded-[14px] border px-3 py-2.5 transition duration-200",
        active
          ? "animate-scanner-glow border-fish-primary/55 bg-fish-primary/[0.08]"
          : final
            ? "border-fish-primary/30 bg-fish-primary/[0.06]"
            : "border-fish-border bg-fish-ink/[0.04]",
      ].join(" ")}
    >
      <span
        className={[
          "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px] border",
          active || final
            ? "border-fish-primary/30 bg-fish-primary/10 text-fish-primary"
            : "border-fish-border bg-fish-ink/[0.03] text-fish-soft",
        ].join(" ")}
      >
        <Icon />
      </span>
      <span
        className={[
          "font-mono text-[13px]",
          final ? "font-medium text-fish-primary" : active ? "text-fish-ink" : "text-fish-soft",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}

export function HowItWorks() {
  return (
    <aside
      aria-label="How the scanner works"
      className="h-full overflow-hidden rounded-[18px] border border-fish-border bg-fish-card p-4 sm:p-[18px] [background-image:linear-gradient(180deg,rgba(254,159,2,0.04),transparent_40%)]"
    >
      <h3 className="mb-4 font-display text-[15px] font-semibold tracking-tight text-fish-ink">
        How It Works
      </h3>

      <div className="flex flex-col">
        {STEPS.map((step, index) => (
          <div key={step.id}>
            <FlowStep {...step} />
            {index < STEPS.length - 1 ? (
              <div
                aria-hidden="true"
                className="animate-flow-arrow my-1.5 text-center text-base leading-none text-fish-primary/85"
              >
                ↓
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </aside>
  );
}
