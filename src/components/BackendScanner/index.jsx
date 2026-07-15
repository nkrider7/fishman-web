import { HowItWorks } from "./HowItWorks";
import { ScannerPreview } from "./ScannerPreview";
import { SupportPanels } from "./SupportPanels";

export function BackendScanner() {
  return (
    <section className="section" id="backend-scanner" aria-labelledby="scanner-title">
      <div className="container">
        <header className="section-head">
          <div>
            <h2 className="section-title reveal is-visible" data-reveal id="scanner-title">
              Backend Scanner
            </h2>
            <p className="section-subtitle reveal is-visible" data-reveal>
              Point Fishman at your backend and it generates API collections automatically — routes,
              params, and request bodies included.
            </p>
          </div>
        </header>

        <div className="mt-2.5 grid items-stretch gap-4 lg:grid-cols-[minmax(220px,0.85fr)_minmax(0,1.55fr)]">
          <div className="reveal is-visible" data-reveal>
            <HowItWorks />
          </div>

          <div className="flex min-w-0 flex-col gap-4">
            <div className="reveal is-visible" data-reveal>
              <SupportPanels />
            </div>
            <div className="reveal is-visible" data-reveal>
              <ScannerPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackendScanner;
