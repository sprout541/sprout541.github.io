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
    title: "Marketing website",
    description:
      "Responsive product pages, pricing, calls to action, trust content, structured metadata, social previews, and mobile layouts.",
  },
  {
    number: "02",
    title: "Subscription signup",
    description:
      "Account registration, email verification and resend states, breeder-site slug selection, Stripe Checkout, a 60-day trial, post-checkout status handling, and recovery states.",
  },
  {
    number: "03",
    title: "Shared plan catalog",
    description:
      "The selected tier stays synchronized across public pricing, signup, billing rules, backend entitlements, subscription creation, and account provisioning.",
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
    format: "Desktop application",
    title: "Rust Director",
    headline: "RCON, player controls, plugins, files, backups, and logs.",
    description:
      "Built a Rust server management tool for admins to run server commands and manage players, moderation, events, and server operations.",
    visual: "director",
  },
  {
    label: "Rust server plugin",
    format: "In-game interface",
    title: "TC Base Repair",
    headline: "Repair an entire base from the Tool Cupboard.",
    description:
      "Developed a Rust plugin that lets authorized players instantly repair an entire base from the Tool Cupboard, automatically calculating and consuming the required resources.",
    visual: "repair",
  },
];

const workPractices = [
  ["01", "Map the workflow", "Account for each step, state, and handoff before implementation."],
  ["02", "Keep systems aligned", "Use shared data across pricing, signup, billing, and entitlements."],
  ["03", "Plan recovery paths", "Cover verification resends, checkout outcomes, and provisioning errors."],
  ["04", "Verify the result", "Test responsive layouts, metadata, signup behavior, and backend rules."],
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
            <a href="#approach">Approach</a>
            <a href="#availability">Availability</a>
          </div>
          <span className="nav-role">Full-stack developer <i /> Nurse</span>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero shell" id="top" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">Full-stack developer + Nurse</p>
            <h1 id="hero-title">
              I build marketing websites,
              <em>subscription systems,</em>
              and Rust server tools.
            </h1>
            <div className="hero-actions">
              <a className="primary-link" href="#work">
                View projects <span aria-hidden="true">↓</span>
              </a>
              <p>Selected work includes Haven, Rust Director, and TC Base Repair.</p>
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
                <span>Ariele Radford</span>
                <span>Portfolio</span>
              </div>
              <p>Full-stack developer</p>
              <p>Nurse</p>
              <div className="system-card-line" />
              <small>Web platforms · subscriptions · Rust server tools</small>
            </div>
          </aside>

          <div className="hero-services" aria-label="Areas of expertise">
            <span>Marketing websites</span>
            <span>Subscription signup</span>
            <span>Stripe billing</span>
            <span>Rust server tools</span>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading reveal">
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Haven and Rust server tools.</h2>
              <p>Marketing, subscriptions, and tools for Rust server administration.</p>
            </div>

            <article className="haven-case reveal" aria-labelledby="haven-title">
              <div className="case-copy">
                <div className="case-kicker">
                  <span>Breeder platform</span>
                  <span>Marketing + signup</span>
                </div>
                <h3 id="haven-title">Haven</h3>
                <p className="case-lede">
                  A complete marketing website and self-service subscription signup flow
                  for a breeder website and operations platform.
                </p>
                <p>
                  I designed and built the responsive marketing site and its signup flow,
                  including pricing, account registration, verification, Stripe billing,
                  and account provisioning.
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
              <h2 id="approach-title">What nursing brings to my development work.</h2>
              <p>
                Nursing and software development both require attention to detail, clear
                communication, calm decision-making, and dependable follow-through.
              </p>
              <p>
                I apply that methodical approach to interface states, billing, account
                provisioning, validation, and error recovery.
              </p>
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
              <p className="eyebrow">Availability</p>
              <h2 id="availability-title">Available for full-stack project work.</h2>
            </div>
            <div className="availability-copy">
              <p>
                I&apos;m available for responsive websites, subscription signup and billing,
                and operational tools.
              </p>
              <span className="availability-status"><i /> Available for project work</span>
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
