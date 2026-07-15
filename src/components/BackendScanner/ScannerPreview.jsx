export function ScannerPreview() {
  return (
    <div className="relative grid min-h-0 items-center gap-5 overflow-hidden rounded-[18px] border border-fish-border bg-fish-card p-4 sm:p-5 lg:grid-cols-[minmax(180px,0.85fr)_minmax(0,1.35fr)] [background-image:radial-gradient(ellipse_70%_80%_at_85%_50%,rgba(254,159,2,0.08),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_40%)]">
      <div className="relative z-10 min-w-0">
        <h3 className="mb-2 font-display text-lg font-semibold tracking-tight text-fish-ink sm:text-[22px]">
          Review and Fine-Tune Your API
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-fish-muted">
          Scan a project, pick the routes you need, and import them into a collection — ready to hit
          send.
        </p>

        <label htmlFor="scanner-repo-demo" className="mb-1.5 block text-xs font-medium text-fish-soft">
          Start repo URL
        </label>
        <div className="flex max-w-xs items-center gap-2 rounded-xl border border-fish-border bg-fish-ink/[0.04] py-1 pr-1 pl-3 sm:max-w-sm">
          <input
            id="scanner-repo-demo"
            type="text"
            readOnly
            defaultValue="https://github.com/user/repo"
            aria-label="Example repository URL"
            className="min-w-0 flex-1 border-0 bg-transparent py-2 font-mono text-xs text-fish-muted outline-none"
          />
          <span
            aria-hidden="true"
            className="shrink-0 rounded-[9px] bg-fish-primary px-3 py-1.5 text-xs font-semibold tracking-tight text-neutral-900"
          >
            Scan
          </span>
        </div>
      </div>

      <figure className="animate-preview-float relative order-first m-0 min-w-0 overflow-hidden rounded-[14px] border border-fish-border shadow-[0_18px_40px_rgba(0,0,0,0.18),0_0_0_1px_rgba(254,159,2,0.06)] transition duration-500 ease-out will-change-transform lg:order-none lg:[transform:perspective(900px)_rotateY(-4deg)_rotateX(2deg)] lg:hover:-translate-y-1 lg:hover:[transform:perspective(900px)_rotateY(-1deg)_rotateX(0deg)]">
        <img
          src="assets/scanbackend.png"
          width={1280}
          height={900}
          alt="Fishman Scan Backend Project dialog showing discovered API routes ready to import"
          loading="lazy"
          className="block h-auto w-full"
        />
      </figure>
    </div>
  );
}
