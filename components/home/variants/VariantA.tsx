"use client";

import { VARIANT_CONTENT as t } from "./content";

// VARIANT A — Editorial Warmth.
// Editorial / craft-publication aesthetic: Newsreader serif + Geist + cream paper.

const A = {
  paper: "#F4ECDC",
  paperDeep: "#EADFC8",
  ink: "#231A12",
  inkSoft: "#5B4A38",
  rule: "#C7B594",
  terracotta: "#B5562C",
  sage: "#5C7A5C",
  bone: "#FBF6EC",
};

const aFonts = `
  @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;1,6..72,300;1,6..72,400;1,6..72,500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap');
`;

function Glyph({ d, size = 24, stroke = 1.25 }: { d: string; size?: number; stroke?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

function ChapterMark({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: A.inkSoft }}>
      <span style={{ display: "inline-block", width: 28, borderTop: `1px solid ${A.ink}`, transform: "translateY(-4px)" }} />
      <span style={{ color: A.ink }}>Cap. {num}</span>
      <span>{label}</span>
    </div>
  );
}

function NavA() {
  return (
    <header style={{ background: A.paper, borderBottom: `1px solid ${A.rule}`, padding: "20px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <img src={t.brand.logoIcon} alt="" style={{ height: 44, width: 44, objectFit: "contain", mixBlendMode: "multiply" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontFamily: "'Newsreader', serif", fontSize: 22, fontWeight: 500, letterSpacing: "0.04em", color: A.ink, lineHeight: 1 }}>
            PRIMARISTICA<sup style={{ fontSize: 10, marginLeft: 1 }}>®</sup>
          </span>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 9.5, letterSpacing: "0.22em", color: A.inkSoft, textTransform: "uppercase", marginTop: 3 }}>
            Institutul de Primaristică · România · est. 2018
          </span>
        </div>
      </div>
      <nav style={{ display: "flex", gap: 28, fontFamily: "'Geist', sans-serif", fontSize: 13.5, fontWeight: 500, color: A.ink, letterSpacing: "0.01em" }}>
        {t.nav.map((n) => (
          <a key={n} href="#" style={{ color: A.ink, textDecoration: "none" }}>
            {n}
          </a>
        ))}
      </nav>
      <a href="#contact" style={{ fontFamily: "'Geist', sans-serif", fontSize: 12.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: A.paper, background: A.ink, padding: "11px 20px", borderRadius: 999, textDecoration: "none" }}>
        Contactează-ne →
      </a>
    </header>
  );
}

function HeroA() {
  return (
    <section style={{ position: "relative", background: A.paper, padding: "0 0 96px" }}>
      <div style={{ borderBottom: `1px solid ${A.rule}`, padding: "12px 64px", display: "flex", justifyContent: "space-between", fontFamily: "'Geist Mono', monospace", fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: A.inkSoft }}>
        <span>Nr. 01 · Ediția întâi · Toamnă 2026</span>
        <span>Cunoaștere · Mișcare · Echilibru</span>
        <span>București — Viena — Barcelona</span>
      </div>

      <div style={{ padding: "64px 64px 0", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "end" }}>
        <div>
          <ChapterMark num="00" label="Hero · Introducere" />
          <h1 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 96, lineHeight: 0.94, color: A.ink, margin: "28px 0 0", letterSpacing: "-0.02em" }}>
            Cunoașterea<br />
            și educarea<br />
            <em style={{ fontWeight: 400, color: A.terracotta, fontStyle: "italic" }}>dezvoltării</em><br />
            senzo-motorii.
          </h1>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 22, lineHeight: 1.45, color: A.inkSoft, marginTop: 36, maxWidth: 540, fontWeight: 300, fontStyle: "italic" }}>
            {t.hero.subtitle}
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 44, alignItems: "center" }}>
            <a href="#metoda" style={{ fontFamily: "'Geist', sans-serif", fontSize: 14, fontWeight: 500, color: A.paper, background: A.ink, padding: "16px 28px", borderRadius: 999, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
              {t.hero.ctaPrimary}
              <Glyph d="M5 12h14M13 5l7 7-7 7" size={16} stroke={1.5} />
            </a>
            <a href="#profesori" style={{ fontFamily: "'Geist', sans-serif", fontSize: 14, fontWeight: 500, color: A.ink, padding: "16px 24px", textDecoration: "underline", textUnderlineOffset: 4 }}>
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ aspectRatio: "4/5", overflow: "hidden", position: "relative", borderRadius: 2 }}>
            <img src="/images/hero.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(0.5) saturate(0.85) contrast(1.05)" }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent 60%, ${A.ink}40)` }} />
          </div>
          <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, fontFamily: "'Geist Mono', monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: A.bone, display: "flex", justifyContent: "space-between" }}>
            <span>Fig. I — Copii / mișcare liberă</span>
            <span>↗ Galerie</span>
          </div>
        </div>
      </div>

      <div style={{ padding: "64px 64px 0", borderTop: `1px solid ${A.rule}`, marginTop: 64, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: A.inkSoft }}>
        <span>↓ Cap. 01 · Ce este Primaristica</span>
        <span style={{ fontFamily: "'Newsreader', serif", fontSize: 18, fontStyle: "italic", letterSpacing: "0", textTransform: "none", color: A.ink }}>„O viață eliberată de reflexele primare."</span>
        <span>Cinci decenii · 1974 — 2026</span>
      </div>
    </section>
  );
}

function WhatIsA() {
  const d = t.whatIs;
  return (
    <section style={{ background: A.paper, padding: "120px 64px" }}>
      <ChapterMark num="01" label={d.label} />
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 40 }}>
          <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 64, lineHeight: 1.02, color: A.ink, margin: 0, letterSpacing: "-0.015em" }}>
            Ce este<br />
            <em style={{ fontStyle: "italic", color: A.terracotta }}>Primaristica</em>?
          </h2>
          <div style={{ marginTop: 32, padding: "20px 0", borderTop: `1px solid ${A.rule}`, borderBottom: `1px solid ${A.rule}`, fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: A.inkSoft, display: "flex", flexDirection: "column", gap: 8 }}>
            <span>— Disciplină teoretică & practică</span>
            <span>— De interes general</span>
            <span>— La orice vârstă · sănătoși sau nu</span>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 24, lineHeight: 1.45, color: A.ink, fontWeight: 400, margin: 0 }}>
            <span style={{ fontFamily: "'Newsreader', serif", fontSize: 96, lineHeight: 0.85, float: "left", paddingRight: 14, paddingTop: 8, color: A.terracotta, fontWeight: 500, fontStyle: "italic" }}>
              C
            </span>
            unoașterea și educarea dezvoltării senzo-motorii a omului. Primaristica este o disciplină teoretică și practică, de interes general, inerentă și benefică tuturor, la orice vârstă, fie că suntem sănătoși sau nu.
          </p>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 19, lineHeight: 1.55, color: A.inkSoft, marginTop: 28, fontWeight: 300 }}>
            {d.paragraphs[1]}
          </p>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 19, lineHeight: 1.55, color: A.inkSoft, marginTop: 20, fontWeight: 300 }}>
            {d.paragraphs[2]}
          </p>
        </div>
      </div>
    </section>
  );
}

function ConceptsA() {
  const d = t.concepts;
  return (
    <section style={{ background: A.paperDeep, padding: "120px 64px", borderTop: `1px solid ${A.rule}`, borderBottom: `1px solid ${A.rule}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        <div style={{ paddingRight: 40, borderRight: `1px solid ${A.rule}` }}>
          <ChapterMark num="01a" label="Concepte cheie" />
          <blockquote style={{ fontFamily: "'Newsreader', serif", fontSize: 44, lineHeight: 1.15, color: A.ink, fontStyle: "italic", fontWeight: 400, margin: "40px 0 0" }}>
            „{d.quote.text}"
          </blockquote>
          <div style={{ marginTop: 32, display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 48, height: 1, background: A.terracotta }} />
            <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: A.inkSoft }}>{d.quote.attribution}</span>
          </div>

          <div style={{ marginTop: 80, paddingTop: 32, borderTop: `1px solid ${A.rule}` }}>
            <div style={{ fontFamily: "'Newsreader', serif", fontSize: 180, lineHeight: 1, fontWeight: 500, color: A.terracotta, letterSpacing: "-0.04em" }}>
              98<span style={{ fontSize: 80, verticalAlign: "super", lineHeight: 1 }}>%</span>
            </div>
            <p style={{ fontFamily: "'Newsreader', serif", fontSize: 17, lineHeight: 1.4, color: A.ink, fontStyle: "italic", marginTop: 8, maxWidth: 380 }}>
              dintre oameni poartă reflexe primare persistente — pattern-uri care erodează bucla senzo-motorie zilnică.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          <article>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 18 }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: A.terracotta, letterSpacing: "0.18em" }}>§ I</span>
              <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 32, fontWeight: 500, color: A.ink, margin: 0, letterSpacing: "-0.01em" }}>
                {d.primaryReflexes.title}
              </h3>
            </div>
            {d.primaryReflexes.paragraphs.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Newsreader', serif", fontSize: 17, lineHeight: 1.6, color: A.inkSoft, margin: "0 0 12px" }}>
                {p}
              </p>
            ))}
          </article>
          <article>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 18 }}>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: A.terracotta, letterSpacing: "0.18em" }}>§ II</span>
              <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 32, fontWeight: 500, color: A.ink, margin: 0, letterSpacing: "-0.01em" }}>
                {d.muscleTone.title}
              </h3>
            </div>
            {d.muscleTone.paragraphs.map((p, i) => (
              <p key={i} style={{ fontFamily: "'Newsreader', serif", fontSize: 17, lineHeight: 1.6, color: A.inkSoft, margin: "0 0 12px" }}>
                {p}
              </p>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}

function AudienceA() {
  const d = t.audience;
  return (
    <section style={{ background: A.paper, padding: "120px 64px" }}>
      <ChapterMark num="02" label={d.label} />
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "start" }}>
        <div>
          <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 64, lineHeight: 1.02, color: A.ink, margin: 0, letterSpacing: "-0.015em" }}>
            <em style={{ fontStyle: "italic", color: A.terracotta }}>Cui</em> se<br />adresează?
          </h2>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 20, lineHeight: 1.5, color: A.inkSoft, marginTop: 24, fontWeight: 300, fontStyle: "italic" }}>
            {d.subtitle}
          </p>
        </div>
        <div>
          {d.groups.map((g, i) => (
            <div
              key={g.title}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 200px 1fr 90px",
                gap: 24,
                padding: "28px 0",
                borderTop: `1px solid ${A.rule}`,
                alignItems: "baseline",
                ...(i === d.groups.length - 1 ? { borderBottom: `1px solid ${A.rule}` } : {}),
              }}
            >
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, color: A.terracotta, letterSpacing: "0.1em" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 24, fontWeight: 500, color: A.ink, margin: 0 }}>{g.title}</h3>
              <p style={{ fontFamily: "'Newsreader', serif", fontSize: 16, lineHeight: 1.55, color: A.inkSoft, margin: 0, fontWeight: 300 }}>
                {g.text}
              </p>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: A.inkSoft, letterSpacing: "0.1em", textAlign: "right" }}>
                {g.age}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodA() {
  const d = t.method;
  return (
    <section id="metoda" style={{ background: A.ink, color: A.paper, padding: "120px 64px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 16, fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: A.paperDeep }}>
        <span style={{ display: "inline-block", width: 28, borderTop: `1px solid ${A.paperDeep}`, transform: "translateY(-4px)" }} />
        <span style={{ color: A.paper }}>Cap. 03</span>
        <span>{d.label}</span>
      </div>

      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
        <div>
          <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 72, lineHeight: 0.98, color: A.paper, margin: 0, letterSpacing: "-0.02em" }}>
            Program<br />
            de <em style={{ fontStyle: "italic", color: A.terracotta }}>viață</em>,<br />
            nu de cură.
          </h2>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 18, lineHeight: 1.55, color: "rgba(244,236,220,0.7)", marginTop: 28, fontWeight: 300 }}>
            Trei trepte simple, repetate zilnic. Lecția se învață o singură dată — practica continuă întreaga viață.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {d.steps.map((s, i) => (
            <div key={s.title} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 32, padding: "36px 0", borderTop: `1px solid rgba(244,236,220,0.18)` }}>
              <div style={{ fontFamily: "'Newsreader', serif", fontSize: 56, lineHeight: 1, color: A.terracotta, fontWeight: 400, fontStyle: "italic" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 30, fontWeight: 500, color: A.paper, margin: 0, letterSpacing: "-0.01em" }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: "'Newsreader', serif", fontSize: 17, lineHeight: 1.55, color: "rgba(244,236,220,0.75)", margin: "12px 0 0", fontWeight: 300, maxWidth: 540 }}>
                  {s.text}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: `1px solid rgba(244,236,220,0.18)`, borderBottom: `1px solid rgba(244,236,220,0.18)`, padding: "36px 0", display: "grid", gridTemplateColumns: "120px 1fr", gap: 32, background: "rgba(181,86,44,0.08)", margin: "0 -16px", paddingLeft: 16, paddingRight: 16 }}>
            <div style={{ fontFamily: "'Newsreader', serif", fontSize: 56, lineHeight: 1, color: A.terracotta, fontWeight: 400 }}>✻</div>
            <div>
              <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 30, fontWeight: 500, color: A.paper, margin: 0, fontStyle: "italic" }}>
                {d.result.title}
              </h3>
              <p style={{ fontFamily: "'Newsreader', serif", fontSize: 17, lineHeight: 1.55, color: "rgba(244,236,220,0.85)", margin: "12px 0 0", fontWeight: 300, maxWidth: 540 }}>
                {d.result.text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 64, paddingTop: 32, borderTop: `1px solid rgba(244,236,220,0.18)`, display: "grid", gridTemplateColumns: "200px 1fr", gap: 32 }}>
        <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: A.paperDeep }}>
          Notă · În cazul copiilor
        </span>
        <p style={{ fontFamily: "'Newsreader', serif", fontSize: 17, lineHeight: 1.6, color: "rgba(244,236,220,0.8)", margin: 0, fontWeight: 300, maxWidth: 720, fontStyle: "italic" }}>
          {d.children.text}
        </p>
      </div>
    </section>
  );
}

function TestimonialsA() {
  const d = t.testimonials;
  return (
    <section style={{ background: A.bone, padding: "120px 64px" }}>
      <ChapterMark num="04" label={d.label} />
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 40 }}>
          <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 64, lineHeight: 1, color: A.ink, margin: 0, letterSpacing: "-0.015em" }}>
            Voci ale<br />
            <em style={{ fontStyle: "italic", color: A.terracotta }}>practicii.</em>
          </h2>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 18, lineHeight: 1.55, color: A.inkSoft, marginTop: 24, fontWeight: 300, fontStyle: "italic" }}>
            Optsprezece mărturii de la practicanți de Primaristică, culese în România între 2018 și 2026.
          </p>
          <div style={{ marginTop: 32, fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: A.inkSoft }}>
            <div style={{ borderTop: `1px solid ${A.rule}`, padding: "12px 0" }}>{d.intro}</div>
            <div style={{ borderTop: `1px solid ${A.rule}`, borderBottom: `1px solid ${A.rule}`, padding: "12px 0" }}>{d.outro}</div>
          </div>
        </div>
        <div style={{ columnCount: 2, columnGap: 32 }}>
          {d.items.map((q, i) => (
            <div key={i} style={{ breakInside: "avoid", padding: "20px 0", borderBottom: `1px solid ${A.rule}` }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10, color: A.terracotta, letterSpacing: "0.1em", flexShrink: 0 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontFamily: "'Newsreader', serif", fontSize: 18, lineHeight: 1.45, color: A.ink, margin: 0, fontStyle: "italic", fontWeight: 400 }}>
                  „…{q}."
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistoryA() {
  const d = t.history;
  return (
    <section style={{ background: A.paper, padding: "120px 64px" }}>
      <ChapterMark num="05" label={d.label} />
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 40 }}>
          <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 64, lineHeight: 1, color: A.ink, margin: 0, letterSpacing: "-0.015em" }}>
            Cinci<br />decenii.
          </h2>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 20, lineHeight: 1.5, color: A.inkSoft, marginTop: 24, fontWeight: 300, fontStyle: "italic", maxWidth: 380 }}>
            De la cabinetul lui Helga Pfeiffer-Meisel din Germania anilor '70, până la Institutul de la București.
          </p>
          <div style={{ marginTop: 40, aspectRatio: "4/5", overflow: "hidden" }}>
            <img src="/images/home-istoric.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(0.45) saturate(0.8) contrast(1.05)" }} />
          </div>
          <div style={{ marginTop: 12, fontFamily: "'Geist Mono', monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: A.inkSoft }}>
            Fig. II — Helga Pfeiffer-Meisel
          </div>
        </div>
        <div>
          {d.items.map((item, i) => (
            <div
              key={item.year}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: 32,
                padding: "32px 0",
                borderTop: `1px solid ${A.rule}`,
                alignItems: "baseline",
                ...(i === d.items.length - 1 ? { borderBottom: `1px solid ${A.rule}` } : {}),
              }}
            >
              <div style={{ fontFamily: "'Newsreader', serif", fontSize: 36, fontWeight: 500, color: A.terracotta, lineHeight: 1, fontStyle: "italic" }}>
                {item.year}
              </div>
              <p style={{ fontFamily: "'Newsreader', serif", fontSize: 19, lineHeight: 1.5, color: A.ink, margin: 0, fontWeight: 400 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityA() {
  const d = t.community;
  return (
    <section style={{ background: A.paperDeep, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 540 }}>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src="/images/home-comunitate.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(0.4) saturate(0.85)" }} />
        <div style={{ position: "absolute", bottom: 24, left: 24, fontFamily: "'Geist Mono', monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: A.bone }}>
          Fig. III — Comunitate · București 2024
        </div>
      </div>
      <div style={{ padding: "96px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <ChapterMark num="06" label={d.label} />
        <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 64, lineHeight: 1, color: A.ink, margin: "32px 0 0", letterSpacing: "-0.015em" }}>
          O <em style={{ fontStyle: "italic", color: A.terracotta }}>familie</em><br />în continuă creștere.
        </h2>
        <p style={{ fontFamily: "'Newsreader', serif", fontSize: 19, lineHeight: 1.55, color: A.inkSoft, marginTop: 28, fontWeight: 300, maxWidth: 500 }}>
          {d.paragraphs[0]}
        </p>
        <p style={{ fontFamily: "'Newsreader', serif", fontSize: 19, lineHeight: 1.55, color: A.inkSoft, marginTop: 16, fontWeight: 300, maxWidth: 500 }}>
          {d.paragraphs[1]}
        </p>
      </div>
    </section>
  );
}

function TeachersA() {
  const d = t.teachers;
  return (
    <section id="profesori" style={{ background: A.paper, padding: "120px 64px" }}>
      <ChapterMark num="07" label={d.label} />
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <div>
          <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 64, lineHeight: 1, color: A.ink, margin: 0, letterSpacing: "-0.015em" }}>
            Cine ne<br /><em style={{ fontStyle: "italic", color: A.terracotta }}>învață</em>?
          </h2>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 19, lineHeight: 1.55, color: A.inkSoft, marginTop: 28, fontWeight: 300, maxWidth: 500 }}>
            {d.text}
          </p>
          <a href="#" style={{ marginTop: 32, display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "'Geist', sans-serif", fontSize: 14, fontWeight: 500, color: A.ink, textDecoration: "none", padding: "14px 24px", border: `1px solid ${A.ink}`, borderRadius: 999 }}>
            {d.cta} <Glyph d="M5 12h14M13 5l7 7-7 7" size={16} stroke={1.5} />
          </a>
        </div>
        <div>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: A.inkSoft, padding: "0 0 12px", borderBottom: `1px solid ${A.rule}` }}>
            Profesori în activitate · 2026
          </div>
          {d.list.map((p, i) => (
            <div
              key={p.name}
              style={{ display: "grid", gridTemplateColumns: "32px 1fr 120px", gap: 16, padding: "18px 0", borderBottom: `1px solid ${A.rule}`, alignItems: "baseline" }}
            >
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: A.inkSoft, letterSpacing: "0.1em" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontFamily: "'Newsreader', serif", fontSize: 19, color: A.ink, fontWeight: 400 }}>{p.name}</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: A.inkSoft, letterSpacing: "0.1em", textAlign: "right", textTransform: "uppercase" }}>
                {p.city}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactA() {
  const d = t.contact;
  return (
    <section id="contact" style={{ background: A.terracotta, color: A.paper, padding: "120px 64px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,236,220,0.7)" }}>
            <span style={{ display: "inline-block", width: 28, borderTop: `1px solid rgba(244,236,220,0.7)`, transform: "translateY(-4px)" }} />
            <span style={{ color: A.paper }}>Cap. 08</span>
            <span>{d.label}</span>
          </div>
          <h2 style={{ fontFamily: "'Newsreader', serif", fontWeight: 400, fontSize: 96, lineHeight: 0.95, color: A.paper, margin: "32px 0 0", letterSpacing: "-0.02em" }}>
            Scrie-ne.<br />
            <em style={{ fontStyle: "italic" }}>Te ascultăm.</em>
          </h2>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 20, lineHeight: 1.5, color: "rgba(244,236,220,0.9)", marginTop: 28, fontWeight: 300, maxWidth: 540 }}>
            {d.description}
          </p>
        </div>
        <div style={{ borderTop: `1px solid rgba(244,236,220,0.4)`, paddingTop: 24 }}>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,236,220,0.7)" }}>Program</div>
          <div style={{ fontFamily: "'Newsreader', serif", fontSize: 22, color: A.paper, marginTop: 6 }}>{d.schedule}</div>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,236,220,0.7)", marginTop: 28 }}>Telefon</div>
          <div style={{ fontFamily: "'Newsreader', serif", fontSize: 22, color: A.paper, marginTop: 6 }}>+40 21 000 0000</div>
          <a href="#" style={{ marginTop: 32, display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "'Geist', sans-serif", fontSize: 14, fontWeight: 600, color: A.terracotta, background: A.paper, padding: "16px 28px", borderRadius: 999, textDecoration: "none" }}>
            {d.cta} <Glyph d="M5 12h14M13 5l7 7-7 7" size={16} stroke={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

function FooterA() {
  return (
    <footer style={{ background: A.ink, color: A.paperDeep, padding: "64px 64px 32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, alignItems: "start" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src={t.brand.logoIcon} alt="" style={{ height: 44, width: 44, objectFit: "contain", filter: "invert(1)", mixBlendMode: "screen" }} />
            <span style={{ fontFamily: "'Newsreader', serif", fontSize: 22, color: A.paper, letterSpacing: "0.04em" }}>
              PRIMARISTICA<sup style={{ fontSize: 10 }}>®</sup>
            </span>
          </div>
          <p style={{ fontFamily: "'Newsreader', serif", fontSize: 16, lineHeight: 1.55, color: "rgba(244,236,220,0.7)", marginTop: 20, fontWeight: 300, fontStyle: "italic", maxWidth: 380 }}>
            Institutul de Primaristică România. Cunoaștere și educație a dezvoltării senzo-motorii.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,236,220,0.5)" }}>Navigare</div>
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            {t.nav.map((n) => (
              <a key={n} href="#" style={{ fontFamily: "'Newsreader', serif", fontSize: 16, color: A.paper, textDecoration: "none" }}>
                {n}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,236,220,0.5)" }}>Contact</div>
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8, fontFamily: "'Newsreader', serif", fontSize: 16, color: A.paper }}>
            <span>contact@primaristica.ro</span>
            <span>+40 21 000 0000</span>
            <span style={{ color: "rgba(244,236,220,0.7)" }}>Luni–Vineri, 09:00–12:00</span>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,236,220,0.5)" }}>Limbi</div>
          <div style={{ marginTop: 12, display: "flex", gap: 12, fontFamily: "'Geist Mono', monospace", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: A.paper }}>
            <span style={{ borderBottom: `1px solid ${A.terracotta}`, paddingBottom: 2 }}>RO</span>
            <span style={{ color: "rgba(244,236,220,0.5)" }}>EN</span>
            <span style={{ color: "rgba(244,236,220,0.5)" }}>DE</span>
            <span style={{ color: "rgba(244,236,220,0.5)" }}>FR</span>
            <span style={{ color: "rgba(244,236,220,0.5)" }}>ES</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 56, paddingTop: 24, borderTop: `1px solid rgba(244,236,220,0.18)`, display: "flex", justifyContent: "space-between", fontFamily: "'Geist Mono', monospace", fontSize: 10.5, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(244,236,220,0.5)" }}>
        <span>© 2026 Institutul de Primaristică România</span>
        <span>Site oficial · Toate drepturile rezervate</span>
        <span>Variant A — Editorial Warmth</span>
      </div>
    </footer>
  );
}

export function VariantA() {
  return (
    <div style={{ fontFamily: "'Geist', sans-serif", color: A.ink, background: A.paper, overflow: "hidden" }}>
      <style>{aFonts}</style>
      <HeroA />
      <WhatIsA />
      <ConceptsA />
      <AudienceA />
      <MethodA />
      <TestimonialsA />
      <HistoryA />
      <CommunityA />
      <TeachersA />
      <ContactA />
    </div>
  );
}
