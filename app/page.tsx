import Image from "next/image";

type HavenDetail = {
  number: string;
  title: string;
  description: string;
};

type RustProject = {
  label: string;
  format: string;
  title: string;
  headline: string;
  description: string;
  visual: "director" | "repair";
};

const havenDetails: HavenDetail[] = [
  {
    number: "01",
    title: "The marketing site",
    description:
      "I built the responsive product pages, pricing, calls to action, trust content, structured metadata, social previews, and mobile layouts.",
  },
  {
    number: "02",
    title: "The signup flow",
    description:
      "I handled registration, verification and resend states, breeder-site address selection, Stripe Checkout, the 60-day trial, post-checkout status handling, and recovery states.",
  },
  {
    number: "03",
    title: "Plans that stay in sync",
    description:
      "I used a shared catalog so the selected plan stays consistent across pricing, signup, billing rules, backend entitlements, subscription creation, and account provisioning.",
  },
];

const havenStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Fastify",
  "Stripe subscriptions + webhooks",
  "PostgreSQL",
  "Prisma",
  "Background jobs",
  "Automated validation + tests",
] as const;

const rustProjects: RustProject[] = [
  {
    label: "Rust server management",
    format: "Desktop app",
    title: "Rust Director",
    headline: "RCON commands, players, plugins, files, backups, and logs in one place.",
    description:
      "This is where coding and gaming overlap for me. I built Rust Director so server admins can run commands, manage players and moderation, handle events, and take care of routine server work from one desktop app.",
    visual: "director",
  },
  {
    label: "Rust server plugin",
    format: "In-game plugin",
    title: "TC Base Repair",
    headline: "Repair a whole base from the Tool Cupboard.",
    description:
      "I built TC Base Repair so authorized players can repair an entire base in one action. The plugin calculates the materials needed and consumes them automatically.",
    visual: "repair",
  },
];

const workPractices = [
  ["01", "Map the whole flow", "I think through every step, state, and handoff before I start building."],
  ["02", "Keep the pieces in sync", "Pricing, signup, billing, and account access should always agree."],
  ["03", "Don’t stop at the happy path", "Verification emails fail and checkouts get interrupted. I make sure there’s a clear next step."],
  ["04", "Test the real experience", "I check layouts, metadata, signup behavior, and backend rules before I call it done."],
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function DirectorVisual() {
  return (
    <figure className="project-screenshot director-screenshot">
      <Image
        src="/rust-director-console.png"
        alt="Rust Director desktop server manager showing the RCON Console, command controls, player panel, and command history."
        width={1167}
        height={746}
        loading="lazy"
        sizes="(max-width: 760px) calc(100vw - 56px), 540px"
        unoptimized
      />
    </figure>
  );
}

function RepairVisual() {
  return (
    <figure className="project-screenshot repair-screenshot">
      <Image
        src="/tc-base-repair.png"
        alt="TC Base Repair panel in Rust showing five damaged building blocks, the required wood, stone, metal, and high-quality metal, and the Repair button."
        width={789}
        height={188}
        loading="lazy"
        sizes="(max-width: 760px) calc(100vw - 56px), 540px"
        unoptimized
      />
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <nav className="nav-shell shell" aria-label="Primary">
          <a className="brand" href="#top" aria-label="Ariele Radford, back to top">
            <span className="brand-mark" aria-hidden="true">AR</span>
            <span>Ariele Radford</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#approach">About</a>
            <a href="#availability">Availability</a>
          </div>
          <span className="nav-role">Full-stack developer <i /> Nurse</span>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero shell" id="top" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Ariele Radford · Portfolio</p>
            <h1 id="hero-title">
              I&apos;m Ariele—
              <em>a full-stack developer,</em>
              Nurse, and video game fan.
            </h1>
            <div className="hero-actions">
              <a className="primary-link" href="#work">
                See what I&apos;ve built <span aria-hidden="true">↓</span>
              </a>
              <p>I build websites, subscription systems, and tools for Rust servers.</p>
            </div>
          </div>

          <aside className="hero-aside" aria-label="Professional focus">
            <div className="hero-orbit" aria-hidden="true">
              <span className="orbit-ring ring-one" />
              <span className="orbit-ring ring-two" />
              <span className="orbit-node node-one" />
              <span className="orbit-node node-two" />
              <span className="orbit-node node-three" />
            </div>
            <div className="hero-system-card">
              <div className="system-card-top">
                <span>What I build</span>
                <span>01</span>
              </div>
              <p>Web platforms</p>
              <p>Rust server tools</p>
              <div className="system-card-line" />
              <small>Interfaces, backend services, billing, and account workflows.</small>
            </div>
          </aside>

          <div className="hero-services" aria-label="Areas of expertise">
            <span>Responsive websites</span>
            <span>Subscription flows</span>
            <span>Stripe billing</span>
            <span>Rust server tools</span>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading reveal">
              <p className="eyebrow">A few things I&apos;ve built</p>
              <h2 id="work-title">From breeder software to Rust server tools.</h2>
              <p>Haven, Rust Director, and TC Base Repair.</p>
            </div>

            <article className="haven-case reveal" aria-labelledby="haven-title">
              <div className="case-copy">
                <div className="case-kicker">
                  <span>Breeder website + operations</span>
                  <span>Marketing + subscriptions</span>
                </div>
                <h3 id="haven-title">Haven</h3>
                <p className="case-lede">
                  Haven is a website and operations platform for breeders. I designed and
                  built its complete marketing site and self-service subscription signup flow.
                </p>
                <p>
                  The challenge was keeping the selected plan consistent through verification,
                  checkout, subscription creation, and account setup. I tied the flow to a
                  shared tier catalog instead of duplicating those rules at every step.
                </p>
                <a className="text-link" href="https://myhaven.pet">
                  Visit myhaven.pet <Arrow />
                </a>
              </div>

              <div className="haven-visual" aria-hidden="true">
                <div className="browser-bar">
                  <span /><span /><span />
                  <i>myhaven.pet</i>
                </div>
                <div className="haven-screen">
                  <div className="haven-nav"><b>haven</b><span>Breeder website + operations</span></div>
                  <div className="haven-message">
                    <small>Marketing website</small>
                    <strong>Marketing site.<br />Subscription signup.</strong>
                    <span className="mock-cta">60-day trial</span>
                  </div>
                  <div className="signup-card">
                    <div className="signup-head"><span>Choose your plan</span><b>02 / 04</b></div>
                    <div className="plan-option"><i /><span><b>Tier catalog</b><small>Pricing and entitlements</small></span></div>
                    <div className="plan-option selected"><i /><span><b>Selected tier</b><small>Continue to checkout</small></span></div>
                    <div className="signup-progress"><i /><i /><i /><i /></div>
                  </div>
                </div>
              </div>

              <div className="haven-details">
                {havenDetails.map((detail) => (
                  <div className="detail-card" key={detail.number}>
                    <span>{detail.number}</span>
                    <h4>{detail.title}</h4>
                    <p>{detail.description}</p>
                  </div>
                ))}
              </div>

              <div className="stack-row" aria-label="Haven technology stack">
                <span className="stack-label">Built with</span>
                <ul>
                  {havenStack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </article>

            <div className="rust-grid">
              {rustProjects.map((project, index) => (
                <article
                  className={`rust-card rust-card--${project.visual} reveal`}
                  key={project.title}
                  aria-labelledby={`rust-project-${index}`}
                >
                  <div className="rust-visual">
                    {project.visual === "director" ? <DirectorVisual /> : <RepairVisual />}
                  </div>
                  <div className="rust-copy">
                    <div className="case-kicker">
                      <span>{project.label}</span>
                      <span>{project.format}</span>
                    </div>
                    <h3 id={`rust-project-${index}`}>{project.title}</h3>
                    <p className="rust-headline">{project.headline}</p>
                    <p>{project.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="approach-grid shell">
            <div className="approach-intro reveal">
              <p className="eyebrow eyebrow-light">Developer + Nurse</p>
              <h2 id="approach-title">Being a Nurse shapes how I build software.</h2>
              <p>
                Nursing has taught me to notice the details, explain things plainly, and stay
                calm when something unexpected happens.
              </p>
              <p>Those habits come with me when I sit down to write software.</p>
            </div>

            <ol className="principles reveal">
              {workPractices.map(([number, title, description]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="availability-section" id="availability" aria-labelledby="availability-title">
          <div className="availability-inner shell reveal">
            <div>
              <p className="eyebrow">Project work</p>
              <h2 id="availability-title">I&apos;m open to new projects.</h2>
            </div>
            <div className="availability-copy">
              <p>
                I work on responsive websites, subscription and billing flows, and practical
                tools that make complicated work easier to manage.
              </p>
              <span className="availability-status"><i /> Currently available</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <span>Ariele Radford</span>
          <span>Full-stack developer + Nurse</span>
        </div>
      </footer>
    </>
  );
}
