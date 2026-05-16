"use client";

import type { CSSProperties, ReactNode } from "react";
import { VARIANT_CONTENT as t } from "./content";

// VARIANT B — Clinical Index / Swiss.
// Encyclopedia / clinical-journal aesthetic: Funnel Display + off-white + single red accent.

const B = {
  paper: "#EFEDE6",
  paperAlt: "#E5E2D8",
  ink: "#0E0E0C",
  inkSoft: "#5A574E",
  rule: "#0E0E0C",
  ruleLight: "#C9C5B7",
  accent: "#D94B2A",
};

const bFonts = `
  @import url('https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300;400;500;600;700;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Funnel+Sans:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&display=swap');
`;

function Mono({ children, size = 11, color = B.inkSoft, style = {} }: { children: ReactNode; size?: number; color?: string; style?: CSSProperties }) {
  return (
    <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: size, letterSpacing: "0.12em", textTransform: "uppercase", color, ...style }}>
      {children}
    </span>
  );
}

function SectionHeader({ num, label, title, subtitle, dark = false }: { num: string; label: string; title: string; subtitle?: string; dark?: boolean }) {
  return (
    <div style={{ borderTop: `1px solid ${dark ? "rgba(239,237,230,0.4)" : B.rule}`, paddingTop: 24, marginBottom: 64, display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: 32, alignItems: "start" }}>
      <Mono color={dark ? "rgba(239,237,230,0.7)" : B.inkSoft}>§ {num}</Mono>
      <div>
        <Mono color={dark ? "rgba(239,237,230,0.7)" : B.inkSoft}>{label}</Mono>
        <h2 style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 500, fontSize: 56, lineHeight: 0.98, color: dark ? B.paper : B.ink, margin: "12px 0 0", letterSpacing: "-0.025em" }}>
          {title}
        </h2>
      </div>
      {subtitle && (
        <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 16, lineHeight: 1.5, color: dark ? "rgba(239,237,230,0.7)" : B.inkSoft, margin: 0, fontWeight: 400, maxWidth: 380, alignSelf: "end" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function NavB() {
  return (
    <header style={{ background: B.paper, borderBottom: `1px solid ${B.rule}`, padding: "16px 56px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img src={t.brand.logoIcon} alt="" style={{ height: 36, width: 36, objectFit: "contain", mixBlendMode: "multiply" }} />
        <span style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 600, fontSize: 18, letterSpacing: "-0.01em", color: B.ink }}>
          Primaristica<sup style={{ fontSize: 9, marginLeft: 1 }}>®</sup>
        </span>
      </div>
      <nav style={{ display: "flex", gap: 28, fontFamily: "'Funnel Sans', sans-serif", fontSize: 13, fontWeight: 500, color: B.ink }}>
        {t.nav.map((n, i) => (
          <a key={n} href="#" style={{ color: B.ink, textDecoration: "none", display: "inline-flex", alignItems: "baseline", gap: 6 }}>
            <Mono size={9.5} color={B.inkSoft}>{String(i + 1).padStart(2, "0")}</Mono>
            {n}
          </a>
        ))}
      </nav>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 16 }}>
        <Mono size={10.5}>RO · EN · DE · FR · ES</Mono>
        <a href="#contact" style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 13, fontWeight: 500, color: B.paper, background: B.ink, padding: "10px 18px", textDecoration: "none" }}>
          Contact →
        </a>
      </div>
    </header>
  );
}

function HeroB() {
  return (
    <section style={{ background: B.paper, padding: "32px 56px 80px", position: "relative" }}>
      <div style={{ borderTop: `1px solid ${B.rule}`, borderBottom: `1px solid ${B.rule}`, padding: "10px 0", display: "grid", gridTemplateColumns: "auto 1fr auto auto auto", gap: 24, alignItems: "center" }}>
        <Mono>Index Nr. 01</Mono>
        <Mono color={B.inkSoft}>Disciplină senzo-motorie · România · 2026</Mono>
        <Mono color={B.inkSoft}>1974 →</Mono>
        <Mono color={B.inkSoft}>50 ani de practică</Mono>
        <Mono color={B.accent}>● Live</Mono>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 56, marginTop: 64 }}>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, marginBottom: 32 }}>
            <Mono>00.0</Mono>
            <Mono>{t.hero.tagline.split(",")[0]}</Mono>
          </div>

          <h1 style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 600, fontSize: 152, lineHeight: 0.88, color: B.ink, margin: 0, letterSpacing: "-0.045em" }}>
            Senzație,<br />
            mișcare,<br />
            <span style={{ color: B.accent, fontStyle: "italic", fontWeight: 400 }}>echilibru</span>
          </h1>

          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "80px 1fr", gap: 24 }}>
            <Mono>00.1</Mono>
            <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 20, lineHeight: 1.45, color: B.ink, margin: 0, fontWeight: 400, maxWidth: 620 }}>
              {t.hero.subtitle}
            </p>
          </div>

          <div style={{ marginTop: 48, display: "flex", gap: 12 }}>
            <a href="#metoda" style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 14, fontWeight: 500, color: B.paper, background: B.ink, padding: "16px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12 }}>
              {t.hero.ctaPrimary}
              <span style={{ fontFamily: "'Geist Mono', monospace", letterSpacing: 0 }}>→</span>
            </a>
            <a href="#profesori" style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 14, fontWeight: 500, color: B.ink, padding: "16px 24px", textDecoration: "none", border: `1px solid ${B.ink}` }}>
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div>
          <div style={{ border: `1px solid ${B.rule}`, padding: 24, background: B.paperAlt }}>
            <Mono size={10}>Specimen · Fig. 01</Mono>
            <div style={{ aspectRatio: "1/1", marginTop: 16, position: "relative", overflow: "hidden", background: B.paper, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={t.brand.logoIcon} alt="" style={{ width: "82%", height: "82%", objectFit: "contain", mixBlendMode: "multiply" }} />
              <div style={{ position: "absolute", top: 8, left: 8, width: 16, height: 16, borderTop: `1px solid ${B.ink}`, borderLeft: `1px solid ${B.ink}` }} />
              <div style={{ position: "absolute", top: 8, right: 8, width: 16, height: 16, borderTop: `1px solid ${B.ink}`, borderRight: `1px solid ${B.ink}` }} />
              <div style={{ position: "absolute", bottom: 8, left: 8, width: 16, height: 16, borderBottom: `1px solid ${B.ink}`, borderLeft: `1px solid ${B.ink}` }} />
              <div style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderBottom: `1px solid ${B.ink}`, borderRight: `1px solid ${B.ink}` }} />
            </div>
            <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <Mono size={9.5} color={B.inkSoft}>Subiect</Mono>
                <div style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 13, color: B.ink, fontWeight: 500, marginTop: 2 }}>
                  Buclă senzo-motorie
                </div>
              </div>
              <div>
                <Mono size={9.5} color={B.inkSoft}>Domeniu</Mono>
                <div style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 13, color: B.ink, fontWeight: 500, marginTop: 2 }}>
                  Neuro-fizio-psihic
                </div>
              </div>
              <div>
                <Mono size={9.5} color={B.inkSoft}>Prevalență</Mono>
                <div style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 18, color: B.accent, fontWeight: 600, marginTop: 2, letterSpacing: "-0.02em" }}>
                  98%
                </div>
              </div>
              <div>
                <Mono size={9.5} color={B.inkSoft}>Origine</Mono>
                <div style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 13, color: B.ink, fontWeight: 500, marginTop: 2 }}>
                  Germania, 1974
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16, border: `1px solid ${B.rule}`, padding: 20 }}>
            <Mono size={10}>Cuprins</Mono>
            <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 7, fontFamily: "'Funnel Sans', sans-serif", fontSize: 13, color: B.ink }}>
              {[
                ["01", "Definiție"],
                ["02", "Adresabilitate"],
                ["03", "Metoda"],
                ["04", "Beneficii"],
                ["05", "Istoric"],
                ["06", "Comunitate"],
                ["07", "Profesori"],
                ["08", "Contact"],
              ].map(([n, l]) => (
                <div key={n} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 10, alignItems: "baseline" }}>
                  <Mono size={10} color={B.inkSoft}>§ {n}</Mono>
                  <span style={{ borderBottom: `1px dotted ${B.ruleLight}`, height: 12 }} />
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsB() {
  const d = t.whatIs;
  return (
    <section style={{ background: B.paper, padding: "0 56px 96px" }}>
      <SectionHeader
        num="01"
        label={d.label}
        title="O disciplină teoretică și practică, de interes general."
        subtitle="Cunoașterea și educarea dezvoltării senzo-motorii a omului — la orice vârstă, fie că suntem sănătoși sau nu."
      />

      <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr 1fr", gap: 32 }}>
        <Mono>01.1</Mono>
        {d.paragraphs.map((p, i) => (
          <p key={i} style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 16, lineHeight: 1.55, color: B.ink, margin: 0, fontWeight: 400 }}>
            {p}
          </p>
        ))}
      </div>

      <div style={{ marginTop: 80, borderTop: `1px solid ${B.rule}`, paddingTop: 24, display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: 32 }}>
        <Mono>01.2</Mono>
        <div>
          <Mono color={B.accent}>Conceptul I</Mono>
          <h3 style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 36, fontWeight: 500, color: B.ink, margin: "8px 0 16px", letterSpacing: "-0.02em" }}>
            Reflexele Primare
          </h3>
          {t.concepts.primaryReflexes.paragraphs.map((p, i) => (
            <p key={i} style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 14, lineHeight: 1.55, color: B.inkSoft, margin: "0 0 10px" }}>
              {i === 2 ? (
                <>
                  {p.split("98%")[0]}
                  <strong style={{ color: B.accent, fontWeight: 600 }}>98%</strong>
                  {p.split("98%")[1]}
                </>
              ) : (
                p
              )}
            </p>
          ))}
        </div>
        <div>
          <Mono color={B.accent}>Conceptul II</Mono>
          <h3 style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 36, fontWeight: 500, color: B.ink, margin: "8px 0 16px", letterSpacing: "-0.02em" }}>
            Tonusul Muscular
          </h3>
          {t.concepts.muscleTone.paragraphs.map((p, i) => (
            <p key={i} style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 14, lineHeight: 1.55, color: B.inkSoft, margin: "0 0 10px" }}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatB() {
  return (
    <section style={{ background: B.ink, color: B.paper, padding: "120px 56px", overflow: "hidden", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <Mono color="rgba(239,237,230,0.6)">Cercetare · Prevalență</Mono>
          <div style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 380, lineHeight: 0.85, fontWeight: 500, color: B.paper, letterSpacing: "-0.06em", marginTop: 24 }}>
            98<span style={{ color: B.accent }}>%</span>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 32, lineHeight: 1.2, color: B.paper, margin: 0, fontWeight: 400, letterSpacing: "-0.02em" }}>
            dintre oameni poartă <span style={{ color: B.accent, fontStyle: "italic" }}>reflexe primare persistente</span> după naștere — pattern-uri neurologice care erodează zilnic funcționarea buclei senzo-motorii.
          </p>
          <div style={{ marginTop: 40, borderTop: `1px solid rgba(239,237,230,0.3)`, paddingTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <Mono color="rgba(239,237,230,0.6)">Sursă</Mono>
              <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 14, color: B.paper, marginTop: 6, fontWeight: 400 }}>
                Cercetare clinică Helga Pfeiffer-Meisel et al., 1974–2024.
              </p>
            </div>
            <div>
              <Mono color="rgba(239,237,230,0.6)">Domeniu</Mono>
              <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 14, color: B.paper, marginTop: 6, fontWeight: 400 }}>
                Toate vârstele, ambele sexe, indiferent de starea de sănătate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceB() {
  const d = t.audience;
  return (
    <section style={{ background: B.paper, padding: "120px 56px 96px" }}>
      <SectionHeader num="02" label={d.label} title={d.title} subtitle={d.subtitle} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: `1px solid ${B.rule}`, borderLeft: `1px solid ${B.rule}` }}>
        {d.groups.map((g, i) => (
          <div
            key={g.title}
            style={{ borderRight: `1px solid ${B.rule}`, borderBottom: `1px solid ${B.rule}`, padding: 24, display: "flex", flexDirection: "column", gap: 12, minHeight: 240, position: "relative", background: B.paper }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <Mono color={B.accent}>{String(i + 1).padStart(2, "0")} / 08</Mono>
              <Mono size={10} color={B.inkSoft}>{g.age}</Mono>
            </div>
            <div style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 48, fontWeight: 500, color: B.ink, lineHeight: 0.95, letterSpacing: "-0.025em", marginTop: 6 }}>
              {g.title}
            </div>
            <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 13.5, lineHeight: 1.5, color: B.inkSoft, margin: "auto 0 0", fontWeight: 400 }}>
              {g.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MethodB() {
  const d = t.method;
  return (
    <section id="metoda" style={{ background: B.paperAlt, padding: "120px 56px 96px" }}>
      <SectionHeader num="03" label={d.label} title="Trei trepte. Practicate zilnic, o viață întreagă." subtitle="Lecția se învață o singură dată. Practica continuă acasă, individual." />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, alignItems: "stretch", borderTop: `1px solid ${B.rule}`, borderBottom: `1px solid ${B.rule}` }}>
        {d.steps.map((s, i) => (
          <div
            key={s.title}
            style={{ borderRight: `1px solid ${B.rule}`, padding: "32px 24px", display: "flex", flexDirection: "column", gap: 16, position: "relative" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Mono color={B.accent}>Pas {String(i + 1).padStart(2, "0")}</Mono>
              <span style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 64, fontWeight: 600, color: B.ink, lineHeight: 1, letterSpacing: "-0.04em" }}>0{i + 1}</span>
            </div>
            <h3 style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 24, fontWeight: 500, color: B.ink, margin: 0, letterSpacing: "-0.015em" }}>
              {s.title}
            </h3>
            <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 13.5, lineHeight: 1.55, color: B.inkSoft, margin: 0, fontWeight: 400 }}>
              {s.text}
            </p>
            <div style={{ position: "absolute", right: -10, top: "50%", transform: "translateY(-50%)", background: B.paperAlt, padding: "0 4px", fontFamily: "'Geist Mono', monospace", fontSize: 16, color: B.accent, zIndex: 2 }}>
              →
            </div>
          </div>
        ))}
        <div style={{ padding: "32px 24px", background: B.accent, color: B.paper, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Mono color={B.paper}>Rezultat</Mono>
            <span style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 64, fontWeight: 600, color: B.paper, lineHeight: 1, letterSpacing: "-0.04em" }}>✦</span>
          </div>
          <h3 style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 24, fontWeight: 500, color: B.paper, margin: 0, letterSpacing: "-0.015em" }}>
            {d.result.title}
          </h3>
          <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 13.5, lineHeight: 1.55, color: "rgba(239,237,230,0.9)", margin: 0, fontWeight: 400 }}>
            {d.result.text}
          </p>
        </div>
      </div>

      <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "120px 240px 1fr", gap: 32, alignItems: "start" }}>
        <Mono>03.1</Mono>
        <h4 style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 20, fontWeight: 600, color: B.ink, margin: 0, letterSpacing: "-0.01em" }}>
          {d.children.title}
        </h4>
        <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 15, lineHeight: 1.55, color: B.inkSoft, margin: 0, fontWeight: 400, maxWidth: 720 }}>
          {d.children.text}
        </p>
      </div>
    </section>
  );
}

function TestimonialsB() {
  const d = t.testimonials;
  return (
    <section style={{ background: B.paper, padding: "120px 56px 96px" }}>
      <SectionHeader num="04" label={d.label} title={d.title} subtitle="Mărturii ale practicanților de Primaristică®, culese în România între 2018 și 2026." />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: `1px solid ${B.rule}`, borderLeft: `1px solid ${B.rule}` }}>
        {d.items.map((q, i) => (
          <div
            key={i}
            style={{ borderRight: `1px solid ${B.rule}`, borderBottom: `1px solid ${B.rule}`, padding: 24, display: "flex", flexDirection: "column", gap: 16, minHeight: 200, background: i % 2 === 0 ? B.paper : "transparent" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <Mono color={B.accent}>{String(i + 1).padStart(2, "0")}</Mono>
              <Mono size={9.5} color={B.inkSoft}>Mărturie</Mono>
            </div>
            <p style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 19, lineHeight: 1.25, color: B.ink, margin: "auto 0", fontWeight: 500, letterSpacing: "-0.015em" }}>
              „…{q}."
            </p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Mono color={B.inkSoft}>{d.intro}</Mono>
        <Mono color={B.inkSoft}>{d.outro}</Mono>
      </div>
    </section>
  );
}

function HistoryB() {
  const d = t.history;
  return (
    <section style={{ background: B.paperAlt, padding: "120px 56px 96px" }}>
      <SectionHeader num="05" label={d.label} title="Cinci decenii de Primaristică." subtitle="De la cabinetul Helgăi Pfeiffer-Meisel din Germania anilor '70, la Institutul de la București." />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <div>
          {d.items.map((item, i) => (
            <div
              key={item.year}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 24,
                padding: "20px 0",
                borderTop: `1px solid ${B.rule}`,
                alignItems: "baseline",
                ...(i === d.items.length - 1 ? { borderBottom: `1px solid ${B.rule}` } : {}),
              }}
            >
              <div style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 24, fontWeight: 600, color: B.accent, lineHeight: 1, letterSpacing: "-0.01em" }}>
                {item.year}
              </div>
              <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 15, lineHeight: 1.5, color: B.ink, margin: 0, fontWeight: 400 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div style={{ position: "sticky", top: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: `1px solid ${B.rule}` }}>
          {(
            [
              ["1974", "Anul fondării"],
              ["70+", "Profesori formați în Germania"],
              ["2003", "Introdusă în România"],
              ["2018", "Institutul fondat"],
              ["2", "Cursuri majore de formare"],
              ["8", "Profesori activi azi"],
            ] as const
          ).map(([v, l], i) => (
            <div
              key={i}
              style={{ padding: 24, borderRight: i % 2 === 0 ? `1px solid ${B.rule}` : "none", borderBottom: i < 4 ? `1px solid ${B.rule}` : "none" }}
            >
              <div style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 56, fontWeight: 600, color: B.ink, lineHeight: 0.95, letterSpacing: "-0.035em" }}>
                {v}
              </div>
              <Mono size={10} color={B.inkSoft} style={{ marginTop: 8, display: "block" }}>
                {l}
              </Mono>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityB() {
  const d = t.community;
  return (
    <section style={{ background: B.paper, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 520, borderTop: `1px solid ${B.rule}`, borderBottom: `1px solid ${B.rule}` }}>
      <div style={{ padding: "80px 56px", borderRight: `1px solid ${B.rule}`, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
            <Mono>§ 06</Mono>
            <Mono color={B.inkSoft}>{d.label}</Mono>
          </div>
          <h2 style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 500, fontSize: 72, lineHeight: 0.95, color: B.ink, margin: "24px 0 0", letterSpacing: "-0.03em" }}>
            O rețea<br />
            <span style={{ color: B.accent, fontStyle: "italic", fontWeight: 400 }}>de suport.</span>
          </h2>
          <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 17, lineHeight: 1.55, color: B.inkSoft, margin: "28px 0 0", fontWeight: 400, maxWidth: 480 }}>
            {d.paragraphs[0]}
          </p>
          <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 17, lineHeight: 1.55, color: B.inkSoft, margin: "16px 0 0", fontWeight: 400, maxWidth: 480 }}>
            {d.paragraphs[1]}
          </p>
        </div>
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, paddingTop: 24, borderTop: `1px solid ${B.rule}` }}>
          {(
            [
              ["19", "Profesori formați"],
              ["5", "Orașe acoperite"],
              ["2k+", "Practicanți activi"],
            ] as const
          ).map(([v, l]) => (
            <div key={l}>
              <div style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 36, fontWeight: 600, color: B.ink, letterSpacing: "-0.025em" }}>{v}</div>
              <Mono size={10} color={B.inkSoft}>{l}</Mono>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: "relative", overflow: "hidden", background: B.ink }}>
        <img src="/images/home-comunitate.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.05)" }} />
        <div style={{ position: "absolute", top: 24, left: 24, right: 24, display: "flex", justifyContent: "space-between" }}>
          <Mono size={10} color="rgba(239,237,230,0.9)">Fig. 02 — Întâlnire lunară</Mono>
          <Mono size={10} color="rgba(239,237,230,0.9)">București · 2024</Mono>
        </div>
      </div>
    </section>
  );
}

function TeachersB() {
  const d = t.teachers;
  return (
    <section id="profesori" style={{ background: B.paper, padding: "120px 56px 96px" }}>
      <SectionHeader num="07" label={d.label} title="Profesoarele de Primaristică®." subtitle={d.text} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, borderTop: `1px solid ${B.rule}`, borderLeft: `1px solid ${B.rule}` }}>
        {d.list.map((p, i) => (
          <div
            key={p.name}
            style={{ borderRight: `1px solid ${B.rule}`, borderBottom: `1px solid ${B.rule}`, padding: 20, display: "flex", flexDirection: "column", gap: 8, minHeight: 220 }}
          >
            <Mono size={10} color={B.inkSoft}>{String(i + 1).padStart(2, "0")} · Activ</Mono>
            <div style={{ aspectRatio: "1/1", background: B.paperAlt, marginTop: 4, display: "flex", alignItems: "center", justifyContent: "center", color: B.inkSoft, fontFamily: "'Funnel Display', sans-serif", fontSize: 36, fontWeight: 600 }}>
              {p.name.split(" ").filter((s) => /^[A-ZȘȚĂÎÂ]/.test(s)).slice(0, 2).map((s) => s[0]).join("")}
            </div>
            <div style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 16, fontWeight: 500, color: B.ink, lineHeight: 1.1, letterSpacing: "-0.005em", marginTop: 8 }}>
              {p.name}
            </div>
            <Mono size={10} color={B.inkSoft}>{p.city}</Mono>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, display: "flex", justifyContent: "flex-end" }}>
        <a href="#" style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 14, fontWeight: 500, color: B.paper, background: B.ink, padding: "14px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 12 }}>
          {d.cta} <span>→</span>
        </a>
      </div>
    </section>
  );
}

function ContactB() {
  const d = t.contact;
  return (
    <section id="contact" style={{ background: B.ink, color: B.paper, padding: "120px 56px 96px" }}>
      <div style={{ borderTop: `1px solid rgba(239,237,230,0.4)`, paddingTop: 24, display: "grid", gridTemplateColumns: "120px 1fr 1fr", gap: 32, alignItems: "start" }}>
        <Mono color="rgba(239,237,230,0.7)">§ 08</Mono>
        <div>
          <Mono color="rgba(239,237,230,0.7)">{d.label}</Mono>
          <h2 style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 500, fontSize: 120, lineHeight: 0.9, color: B.paper, margin: "12px 0 0", letterSpacing: "-0.04em" }}>
            Scrie-ne.
          </h2>
          <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 17, lineHeight: 1.55, color: "rgba(239,237,230,0.75)", margin: "28px 0 0", fontWeight: 400, maxWidth: 480 }}>
            {d.description}
          </p>

          <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, paddingTop: 24, borderTop: `1px solid rgba(239,237,230,0.3)` }}>
            <div>
              <Mono color="rgba(239,237,230,0.6)">Program</Mono>
              <div style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 20, color: B.paper, marginTop: 6, fontWeight: 500 }}>
                {d.schedule}
              </div>
            </div>
            <div>
              <Mono color="rgba(239,237,230,0.6)">Telefon</Mono>
              <div style={{ fontFamily: "'Funnel Display', sans-serif", fontSize: 20, color: B.paper, marginTop: 6, fontWeight: 500 }}>
                +40 21 000 0000
              </div>
            </div>
          </div>
        </div>

        <div style={{ border: `1px solid rgba(239,237,230,0.3)`, padding: 28 }}>
          <Mono color="rgba(239,237,230,0.7)">Formular · Trimite un mesaj</Mono>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16 }}>
            {(
              [
                ["Nume", "Numele tău"],
                ["Email", "adresa@email.com"],
                ["Telefon (opțional)", "07xx xxx xxx"],
              ] as const
            ).map(([l, p]) => (
              <div key={l}>
                <Mono size={10} color="rgba(239,237,230,0.6)">{l}</Mono>
                <div style={{ marginTop: 6, borderBottom: `1px solid rgba(239,237,230,0.4)`, paddingBottom: 6, fontFamily: "'Funnel Sans', sans-serif", fontSize: 14, color: "rgba(239,237,230,0.5)" }}>
                  {p}
                </div>
              </div>
            ))}
            <div>
              <Mono size={10} color="rgba(239,237,230,0.6)">Mesaj</Mono>
              <div style={{ marginTop: 6, border: `1px solid rgba(239,237,230,0.3)`, padding: 12, minHeight: 80, fontFamily: "'Funnel Sans', sans-serif", fontSize: 14, color: "rgba(239,237,230,0.5)" }}>
                Scrie mesajul tău aici…
              </div>
            </div>
            <button
              type="button"
              style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 14, fontWeight: 500, color: B.ink, background: B.accent, padding: "14px 24px", border: "none", marginTop: 8, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 12, justifyContent: "center" }}
            >
              {d.cta} →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterB() {
  return (
    <footer style={{ background: B.paper, color: B.ink, padding: "48px 56px 24px", borderTop: `1px solid ${B.rule}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 32, alignItems: "start" }}>
        <div>
          <div style={{ fontFamily: "'Funnel Display', sans-serif", fontWeight: 600, fontSize: 20, color: B.ink, letterSpacing: "-0.01em" }}>
            Primaristica<sup style={{ fontSize: 10 }}>®</sup>
          </div>
          <p style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 13, lineHeight: 1.55, color: B.inkSoft, margin: "12px 0 0", fontWeight: 400, maxWidth: 320 }}>
            Institutul de Primaristică România. Cunoaștere și educație a dezvoltării senzo-motorii.
          </p>
        </div>
        <div>
          <Mono size={10}>Navigare</Mono>
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
            {t.nav.map((n) => (
              <a key={n} href="#" style={{ fontFamily: "'Funnel Sans', sans-serif", fontSize: 13, color: B.ink, textDecoration: "none" }}>
                {n}
              </a>
            ))}
          </div>
        </div>
        <div>
          <Mono size={10}>Contact</Mono>
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6, fontFamily: "'Funnel Sans', sans-serif", fontSize: 13, color: B.ink }}>
            <span>contact@primaristica.ro</span>
            <span>+40 21 000 0000</span>
            <span style={{ color: B.inkSoft }}>Luni–Vineri, 09:00–12:00</span>
          </div>
        </div>
        <div>
          <Mono size={10}>Sediu</Mono>
          <div style={{ marginTop: 10, fontFamily: "'Funnel Sans', sans-serif", fontSize: 13, color: B.ink }}>
            București
            <br />
            România
          </div>
        </div>
        <div>
          <Mono size={10}>Limbi</Mono>
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6, fontFamily: "'Geist Mono', monospace", fontSize: 12, color: B.ink }}>
            <span>
              <strong style={{ color: B.accent }}>RO</strong> · Română
            </span>
            <span>EN · English</span>
            <span>DE · Deutsch</span>
            <span>FR · Français</span>
            <span>ES · Español</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 40, paddingTop: 16, borderTop: `1px solid ${B.rule}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Mono size={10} color={B.inkSoft}>© 2026 Institutul de Primaristică România · Toate drepturile rezervate</Mono>
        <Mono size={10} color={B.inkSoft}>Variant B — Clinical Index</Mono>
      </div>
    </footer>
  );
}

export function VariantB() {
  return (
    <div style={{ fontFamily: "'Funnel Sans', sans-serif", color: B.ink, background: B.paper, overflow: "hidden" }}>
      <style>{bFonts}</style>
      <NavB />
      <HeroB />
      <WhatIsB />
      <StatB />
      <AudienceB />
      <MethodB />
      <TestimonialsB />
      <HistoryB />
      <CommunityB />
      <TeachersB />
      <ContactB />
      <FooterB />
    </div>
  );
}
