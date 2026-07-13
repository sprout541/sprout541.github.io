import Image from "next/image";

type HavenDetail = {
  number: string;
  title: string;
  description: string;
};

type RustProject = {
  label: string;
  title: string;
  headline: string;
  description: string;
  visual: "director" | "repair";
};

const havenDetails: HavenDetail[] = [
  {
    number: "01",
    title: "A clear marketing experience",
    description:
      "Responsive product storytelling, pricing, trust content, calls to action, structured metadata, social previews, and mobile layouts—designed to make a complex platform feel practical.",
  },
  {
    number: "02",
    title: "Signup, end to end",
    description:
      "Account registration, email verification and resend states, breeder-site slug selection, Stripe Checkout, a 60-day trial, post-checkout handling, and clear recovery paths.",
  },
  {
    number: "03",
    title: "One source of truth",
    description:
      "A shared tier catalog keeps public pricing, signup choices, billing rules, backend entitlements, subscription creation, and account provisioning in sync.",
  },
];

const havenStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Fastify",
  "Stripe",
  "PostgreSQL",
  "Prisma",
  "Background jobs",
  "Automated tests",
] as const;

const rustProjects: RustProject[] = [
  {
    label: "Rust server management",
    title: "Rust Director",
    headline: "Modern Rust server operations, all in one place.",
    description:
      "Built a full-featured Rust server management tool that gives admins a modern interface for managing players, moderation, events, and day-to-day server operations more efficiently.",
    visual: "director",
  },
  {
    label: "Rust gameplay utility",
    title: "TC Base Repair",
    headline: "Whole-base repair from the Tool Cupboard.",
    description:
      "Developed a Rust plugin that lets authorized players instantly repair an entire base from the Tool Cupboard, automatically calculating and consuming the required resources.",
    visual: "repair",
  },
];

const principles = [
  ["01", "Empathy", "Understand the person behind the workflow."],
  ["02", "Precision", "Make the complex clear, coherent, and dependable."],
  ["03", "Calm", "Work methodically when systems or stakes get complicated."],
  ["04", "Follow-through", "Carry the details from first interaction to final state."],
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function DirectorVisual() {
  return (
    <figure className="director-screenshot">
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
    <div className="repair-ui" aria-hidden="true">
      <div className="base-plan">
        <span className="base-block block-a" />
        <span className="base-block block-b" />
        <span className="base-block block-c" />
        <span className="base-block block-d" />
        <span className="tc-core">TC</span>
        <span className="repair-pulse pulse-one" />
        <span className="repair-pulse pulse-two" />
      </div>
      <div className="repair-summary">
        <span className="repair-label">Base repair</span>
        <strong>Ready to repair</strong>
        <div className="resource-row"><span>Materials</span><b>Calculated</b></div>
        <div className="resource-row"><span>Authorization</span><b>Confirmed</b></div>
        <div className="repair-button">Repair all</div>
      </div>
    </div>
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
            <p className="eyebrow hero-eyebrow">Ariele Radford · Portfolio</p>
            <h1 id="hero-title">
              I build clear,
              <em>dependable systems</em>
              for people doing real work.
            </h1>
            <div className="hero-actions">
              <a className="primary-link" href="#work">
                Explore selected work <span aria-hidden="true">↓</span>
              </a>
              <p>I pair thoughtful interfaces with dependable full-stack systems.</p>
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
                <span>Practice / 01</span>
                <span className="status-dot">Available</span>
              </div>
              <p>Full-stack developer</p>
              <p>Nurse</p>
              <div className="system-card-line" />
              <small>Human needs, translated into useful software.</small>
            </div>
          </aside>

          <div className="hero-services" aria-label="Areas of expertise">
            <span>Product storytelling</span>
            <span>Responsive interfaces</span>
            <span>Full-stack systems</span>
            <span>Workflow design</span>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading reveal">
              <p className="eyebrow">Selected work</p>
              <h2 id="work-title">Built for the whole journey.</h2>
              <p>From the first line of product copy to the last backend state.</p>
            </div>

            <article className="haven-case reveal" aria-labelledby="haven-title">
              <div className="case-copy">
                <div className="case-kicker">
                  <span>Featured work</span>
                  <span>Web platform</span>
                </div>
                <h3 id="haven-title">Haven</h3>
                <p className="case-lede">
                  Making a complex breeder website and operations platform feel clear,
                  practical, and easy to start.
                </p>
                <p>
                  I designed and built Haven&apos;s complete marketing website and its
                  self-service subscription signup flow—connecting product storytelling,
                  plan selection, billing, and account provisioning into one coherent journey.
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
                  <div className="haven-nav"><b>haven</b><span>For breeders</span></div>
                  <div className="haven-message">
                    <small>The breeder platform</small>
                    <strong>Update once.<br />Publish everywhere.</strong>
                    <span className="mock-cta">Start free trial</span>
                  </div>
                  <div className="signup-card">
                    <div className="signup-head"><span>Choose your plan</span><b>02 / 04</b></div>
                    <div className="plan-option"><i /><span><b>Plan option</b><small>Compare what is included</small></span></div>
                    <div className="plan-option selected"><i /><span><b>Selected plan</b><small>Continue with this tier</small></span></div>
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
                      <span>Selected project</span>
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
              <h2 id="approach-title">Technical depth, grounded in human needs.</h2>
              <p>
                Nursing reinforces the value of empathy, precision, calm decision-making,
                and dependable follow-through—qualities I bring to every product I design
                and build.
              </p>
              <p>
                Whether I&apos;m shaping an interface or tracing a backend workflow, I focus
                on making complex tasks clearer and more reliable for the people using them.
              </p>
            </div>

            <ol className="principles reveal">
              {principles.map(([number, title, description]) => (
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
              <h2 id="availability-title">Let&apos;s build something useful.</h2>
            </div>
            <div className="availability-copy">
              <p>
                I&apos;m available for full-stack projects and thoughtful collaborations
                centered on clear problems, real workflows, and dependable outcomes.
              </p>
              <span className="availability-status"><i /> Open to select collaborations</span>
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
