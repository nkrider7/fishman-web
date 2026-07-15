export function Pill({ children, muted = false }) {
  return (
    <span
      role="listitem"
      className={[
        "inline-flex items-center rounded-full px-2.5 py-1.5 text-[12.5px] font-medium leading-none transition duration-200",
        muted
          ? "border border-fish-primary/15 bg-fish-primary/[0.03] text-fish-primary/70 hover:border-fish-primary/30 hover:bg-fish-primary/[0.08]"
          : "border border-fish-primary/30 bg-fish-primary/[0.07] text-fish-primary hover:-translate-y-px hover:border-fish-primary/50 hover:bg-fish-primary/15",
      ].join(" ")}
    >
      {children}
    </span>
  );
}
