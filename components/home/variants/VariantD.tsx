"use client";

import { VARIANT_CONTENT as t } from "./content";

// VARIANT D — Movement & Earth.
// Warm vibrant earth palette: Frank Ruhl Libre + Bricolage Grotesque. Curves, motion as design metaphor.

const D = {
  paper: "#FAF3E7",
  paperAlt: "#F2E8D3",
  paperWarm: "#EFE0C4",
  ink: "#241814",
  inkSoft: "#5C4A40",
  terracotta: "#C8553D",
  mustard: "#D9A441",
  teal: "#1F4040",
  clay: "#E8B4A0",
  rose: "#D69A8C",
  rule: "#D9C9A8",
};

const dFonts = `
  @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700&display=swap');
`;

const dAnims = `
  @keyframes d-rotate-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes d-flow {
    0% { stroke-dashoffset: 600; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes d-drift-y {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }
  @keyframes d-drift-x {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(8px); }
  }
  @keyframes d-pulse-soft {
    0%, 100% { opacity: 0.85; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.03); }
  }
  .d-card-hover { transition: transform .4s cubic-bezier(.2,.7,.3,1), box-shadow .4s; }
  .d-card-hover:hover { transform: translateY(-4px); }
  .d-link:hover { text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 4px; }
`;

function CurveTop({ from, to }: { from: string; to: string }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, display: "block", marginTop: -1 }}>
      <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill={to} />
      <rect x="0" y="0" width="1440" height="2" fill={from} />
    </svg>
  );
}

function NavD() {
  return (
    <header style={{ background: D.paper, padding: "20px 48px" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", background: D.paperAlt, borderRadius: 999, padding: "12px 24px 12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", border: `1px solid ${D.rule}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 999, background: D.terracotta, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <img src={t.brand.logoIcon} alt="" style={{ width: "72%", height: "72%", objectFit: "contain", filter: "invert(1) brightness(2)", mixBlendMode: "screen" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 700, fontSize: 18, color: D.ink, letterSpacing: "-0.005em" }}>
              Primaristica<sup style={{ fontSize: 9, marginLeft: 1 }}>®</sup>
            </span>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, color: D.inkSoft, fontWeight: 400 }}>
              Institutul de Primaristică · România
            </span>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 28, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, fontWeight: 500, color: D.ink }}>
          {t.nav.map((n) => (
            <a key={n} href="#" className="d-link" style={{ color: "inherit", textDecoration: "none" }}>
              {n}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.inkSoft, fontWeight: 500 }}>RO</span>
          <a href="#contact" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, fontWeight: 500, color: D.paper, background: D.teal, padding: "11px 22px", borderRadius: 999, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
            Programează <span style={{ fontSize: 12 }}>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroD() {
  return (
    <section style={{ background: D.paper, padding: "64px 48px 120px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }}>
        <div style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "8px 16px", borderRadius: 999, background: D.paperAlt, border: `1px solid ${D.rule}` }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: D.mustard, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 8, height: 8, borderRadius: 999, background: D.terracotta }} />
            </div>
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: D.ink, fontWeight: 500 }}>
              Cinci decenii de practică · 1974—2026
            </span>
          </div>

          <h1 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500, fontSize: 88, lineHeight: 0.96, color: D.ink, margin: "32px 0 0", letterSpacing: "-0.025em" }}>
            Senzație,<br />
            <span style={{ color: D.terracotta, fontStyle: "italic", fontWeight: 400 }}>mișcare</span>,<br />
            <span style={{ position: "relative" }}>
              echilibru.
              <svg viewBox="0 0 280 14" style={{ position: "absolute", left: -8, bottom: -10, width: 260, height: 14 }}>
                <path d="M4,8 C60,2 140,12 200,5 C230,2 260,7 276,9" stroke={D.mustard} strokeWidth={4} fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 19, lineHeight: 1.5, color: D.inkSoft, marginTop: 36, fontWeight: 400, maxWidth: 540 }}>
            Primaristica® este disciplina cunoașterii și educării dezvoltării senzo-motorii — o practică zilnică ce eliberează corpul, limpezește mintea și deschide sufletul.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 40, alignItems: "center" }}>
            <a href="#metoda" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15, fontWeight: 500, color: D.paper, background: D.terracotta, padding: "16px 26px", borderRadius: 999, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
              Descoperă metoda <span>→</span>
            </a>
            <a href="#profesori" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15, fontWeight: 500, color: D.ink, padding: "16px 24px", textDecoration: "none", borderRadius: 999, border: `1px solid ${D.ink}` }}>
              Găsește un profesor
            </a>
          </div>
        </div>

        <div style={{ position: "relative", aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", top: "8%", right: "8%", width: 120, height: 120, borderRadius: 999, background: D.mustard, animation: "d-pulse-soft 5s ease-in-out infinite" }} />

          <div style={{ position: "absolute", bottom: "6%", left: "4%", width: 200, height: 200, borderRadius: "62% 38% 55% 45% / 50% 60% 40% 50%", background: D.clay, animation: "d-drift-y 7s ease-in-out infinite" }} />

          <svg viewBox="-160 -160 320 320" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", animation: "d-rotate-slow 60s linear infinite" }}>
            <circle r="140" cx="0" cy="0" fill="none" stroke={D.terracotta} strokeWidth="1.2" strokeDasharray="2 8" opacity="0.4" />
          </svg>

          <svg viewBox="-120 -80 240 160" style={{ position: "relative", width: "70%", height: "70%", zIndex: 2 }}>
            <defs>
              <linearGradient id="d-loop-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={D.terracotta} />
                <stop offset="50%" stopColor={D.mustard} />
                <stop offset="100%" stopColor={D.teal} />
              </linearGradient>
            </defs>
            <path
              d="M -80,0 C -80,-60 -20,-60 0,0 C 20,60 80,60 80,0 C 80,-60 20,-60 0,0 C -20,60 -80,60 -80,0 Z"
              fill="none"
              stroke="url(#d-loop-grad)"
              strokeWidth="5"
              strokeLinecap="round"
              style={{ strokeDasharray: 600, animation: "d-flow 6s ease-in-out infinite alternate" }}
            />
            <circle cx="-80" cy="0" r="8" fill={D.terracotta} style={{ animation: "d-pulse-soft 3s ease-in-out infinite" }} />
            <circle cx="80" cy="0" r="8" fill={D.teal} style={{ animation: "d-pulse-soft 3s ease-in-out 1.5s infinite" }} />
            <circle cx="0" cy="0" r="6" fill={D.mustard} />
          </svg>

          <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.terracotta, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", zIndex: 3 }}>
            Senzație
          </div>
          <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.teal, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "right", zIndex: 3 }}>
            Mișcare
          </div>
          <div style={{ position: "absolute", left: "50%", bottom: "12%", transform: "translateX(-50%)", fontFamily: "'Frank Ruhl Libre', serif", fontStyle: "italic", fontSize: 22, color: D.ink, fontWeight: 400, zIndex: 3 }}>
            echilibru
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1360, margin: "96px auto 0", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, padding: 32, background: D.paperAlt, borderRadius: 24, border: `1px solid ${D.rule}` }}>
        {(
          [
            ["50", "ani de practică", D.terracotta],
            ["8", "profesori activi", D.teal],
            ["19", "absolvenți", D.mustard],
            ["2k+", "practicanți", D.terracotta],
          ] as const
        ).map(([n, l, c], i) => (
          <div key={l} style={{ borderLeft: i > 0 ? `1px solid ${D.rule}` : "none", paddingLeft: i > 0 ? 32 : 0 }}>
            <div style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 52, fontWeight: 500, color: c, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13.5, color: D.inkSoft, marginTop: 6 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatIsD() {
  const d = t.whatIs;
  return (
    <section style={{ background: D.paper }}>
      <CurveTop from={D.paper} to={D.paperWarm} />
      <div style={{ background: D.paperWarm, padding: "80px 48px 120px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10%", right: "-8%", width: 380, height: 380, borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", background: D.clay, opacity: 0.5, animation: "d-drift-y 9s ease-in-out infinite" }} />

        <div style={{ maxWidth: 1360, margin: "0 auto", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 1, background: D.terracotta }} />
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: D.terracotta, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {d.label}
                </span>
              </div>
              <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500, fontSize: 64, lineHeight: 0.98, color: D.ink, margin: "24px 0 0", letterSpacing: "-0.025em" }}>
                Disciplină a <span style={{ fontStyle: "italic", color: D.terracotta }}>întregului</span> organism.
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 28, lineHeight: 1.4, color: D.ink, fontWeight: 400, margin: 0 }}>
                <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 90, lineHeight: 0.85, float: "left", paddingRight: 14, paddingTop: 8, color: D.terracotta, fontWeight: 500, fontStyle: "italic" }}>
                  C
                </span>
                unoașterea și educarea dezvoltării senzo-motorii a omului. O practică inerentă și benefică tuturor, la orice vârstă, fie că suntem sănătoși sau nu.
              </p>
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 17, lineHeight: 1.6, color: D.inkSoft, marginTop: 24 }}>{d.paragraphs[1]}</p>
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 17, lineHeight: 1.6, color: D.inkSoft, marginTop: 16 }}>{d.paragraphs[2]}</p>
            </div>
          </div>

          <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div className="d-card-hover" style={{ background: D.terracotta, color: D.paper, borderRadius: 28, padding: 36, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: 999, border: `1.5px solid rgba(250,243,231,0.25)` }} />
              <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: 999, border: `1.5px solid rgba(250,243,231,0.18)` }} />
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: "rgba(250,243,231,0.7)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", position: "relative" }}>
                Conceptul I · §
              </div>
              <h3 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 40, fontWeight: 500, color: D.paper, margin: "12px 0 16px", letterSpacing: "-0.02em", position: "relative" }}>
                Reflexele Primare
              </h3>
              {t.concepts.primaryReflexes.paragraphs.map((p, i) => (
                <p key={i} style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14.5, lineHeight: 1.55, color: "rgba(250,243,231,0.9)", margin: "0 0 10px", position: "relative" }}>
                  {i === 2 ? (
                    <>
                      {p.split("98%")[0]}
                      <strong style={{ color: D.mustard, fontWeight: 700, fontSize: 18 }}>98%</strong>
                      {p.split("98%")[1]}
                    </>
                  ) : (
                    p
                  )}
                </p>
              ))}
            </div>
            <div className="d-card-hover" style={{ background: D.teal, color: D.paper, borderRadius: 28, padding: 36, position: "relative", overflow: "hidden" }}>
              <svg viewBox="0 0 100 100" style={{ position: "absolute", bottom: -20, right: -20, width: 180, height: 180, opacity: 0.2 }}>
                <path d="M 10,50 Q 30,20 50,50 T 90,50" stroke={D.paper} strokeWidth="2" fill="none" />
                <path d="M 10,60 Q 30,30 50,60 T 90,60" stroke={D.paper} strokeWidth="2" fill="none" />
                <path d="M 10,40 Q 30,10 50,40 T 90,40" stroke={D.paper} strokeWidth="2" fill="none" />
              </svg>
              <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: "rgba(250,243,231,0.7)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", position: "relative" }}>
                Conceptul II · §
              </div>
              <h3 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 40, fontWeight: 500, color: D.paper, margin: "12px 0 16px", letterSpacing: "-0.02em", position: "relative" }}>
                Tonusul Muscular
              </h3>
              {t.concepts.muscleTone.paragraphs.map((p, i) => (
                <p key={i} style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14.5, lineHeight: 1.55, color: "rgba(250,243,231,0.9)", margin: "0 0 10px", position: "relative" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceD() {
  const d = t.audience;
  const colors = [D.terracotta, D.mustard, D.teal, D.clay, D.terracotta, D.teal, D.mustard, D.clay];
  return (
    <section style={{ background: D.paper, padding: "120px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
            <div style={{ width: 32, height: 1, background: D.terracotta }} />
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: D.terracotta, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {d.label}
            </span>
            <div style={{ width: 32, height: 1, background: D.terracotta }} />
          </div>
          <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500, fontSize: 64, lineHeight: 0.98, color: D.ink, margin: "24px 0 0", letterSpacing: "-0.025em" }}>
            Pentru <span style={{ fontStyle: "italic", color: D.terracotta }}>fiecare</span>, la orice <span style={{ fontStyle: "italic", color: D.terracotta }}>vârstă</span>.
          </h2>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 18, lineHeight: 1.55, color: D.inkSoft, margin: "20px auto 0", maxWidth: 580 }}>
            {d.subtitle}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, position: "relative" }}>
          {d.groups.map((g, i) => {
            const isOdd = i % 2 === 1;
            return (
              <div
                key={g.title}
                className="d-card-hover"
                style={{
                  background: D.paperAlt,
                  borderRadius: 24,
                  padding: 24,
                  border: `1px solid ${D.rule}`,
                  position: "relative",
                  transform: isOdd ? "translateY(28px)" : "none",
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 999, background: colors[i], display: "flex", alignItems: "center", justifyContent: "center", color: D.paper, fontFamily: "'Frank Ruhl Libre', serif", fontStyle: "italic", fontSize: 22, fontWeight: 500 }}>
                    {i + 1}
                  </div>
                  <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, color: D.inkSoft, fontWeight: 500, letterSpacing: "0.06em", padding: "4px 10px", borderRadius: 999, background: D.paper, border: `1px solid ${D.rule}` }}>
                    {g.age}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 26, fontWeight: 500, color: D.ink, margin: 0, letterSpacing: "-0.015em" }}>
                  {g.title}
                </h3>
                <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13.5, lineHeight: 1.55, color: D.inkSoft, margin: "auto 0 0" }}>
                  {g.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MethodD() {
  const d = t.method;
  return (
    <section id="metoda" style={{ background: D.teal, color: D.paper, padding: "120px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: 280, height: 280, borderRadius: 999, background: D.terracotta, opacity: 0.15, animation: "d-drift-y 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: 360, height: 360, borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", background: D.mustard, opacity: 0.12, animation: "d-drift-y 10s ease-in-out 2s infinite" }} />

      <div style={{ maxWidth: 1360, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 72, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
            <div style={{ width: 32, height: 1, background: D.mustard }} />
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: D.mustard, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {d.label}
            </span>
            <div style={{ width: 32, height: 1, background: D.mustard }} />
          </div>
          <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500, fontSize: 64, lineHeight: 0.98, color: D.paper, margin: "24px 0 0", letterSpacing: "-0.025em" }}>
            Program de <span style={{ fontStyle: "italic", color: D.mustard }}>viață</span>, nu de cură.
          </h2>
        </div>

        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, position: "absolute", top: 350, left: 0, opacity: 0.4, zIndex: 0 }}>
          <path d="M 50,40 C 300,5 450,75 600,40 S 900,5 1150,40" stroke={D.mustard} strokeWidth="2" fill="none" strokeDasharray="6 8" />
        </svg>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, position: "relative", zIndex: 1 }}>
          {d.steps.map((s, i) => (
            <div
              key={s.title}
              className="d-card-hover"
              style={{ background: "rgba(250,243,231,0.07)", borderRadius: 28, padding: 28, border: `1px solid rgba(250,243,231,0.15)`, backdropFilter: "blur(4px)", display: "flex", flexDirection: "column", gap: 16, minHeight: 280 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: 999, background: D.mustard, color: D.teal, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Frank Ruhl Libre', serif", fontSize: 26, fontWeight: 700 }}>
                  {i + 1}
                </div>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, color: "rgba(250,243,231,0.6)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Pasul {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 26, fontWeight: 500, color: D.paper, margin: 0, letterSpacing: "-0.015em" }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(250,243,231,0.78)", margin: "auto 0 0" }}>
                {s.text}
              </p>
            </div>
          ))}
          <div
            className="d-card-hover"
            style={{ background: D.terracotta, color: D.paper, borderRadius: 28, padding: 28, display: "flex", flexDirection: "column", gap: 16, position: "relative", overflow: "hidden", minHeight: 280 }}
          >
            <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: 999, background: D.mustard, opacity: 0.35 }} />
            <div style={{ position: "absolute", top: -60, right: -60, width: 180, height: 180, borderRadius: 999, border: `1.5px solid rgba(250,243,231,0.3)` }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
              <div style={{ width: 56, height: 56, borderRadius: 999, background: D.paper, color: D.terracotta, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Frank Ruhl Libre', serif", fontSize: 26, fontWeight: 500, fontStyle: "italic" }}>
                ✦
              </div>
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 11, color: "rgba(250,243,231,0.8)", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Rezultat
              </span>
            </div>
            <h3 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 26, fontWeight: 500, color: D.paper, margin: 0, letterSpacing: "-0.015em", position: "relative" }}>
              {d.result.title}
            </h3>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(250,243,231,0.9)", margin: "auto 0 0", position: "relative" }}>
              {d.result.text}
            </p>
          </div>
        </div>

        <div style={{ marginTop: 56, padding: 28, background: "rgba(250,243,231,0.07)", borderRadius: 24, border: `1px solid rgba(250,243,231,0.15)`, display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "center" }}>
          <div style={{ width: 56, height: 56, borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", background: D.clay, display: "flex", alignItems: "center", justifyContent: "center", color: D.teal, fontFamily: "'Frank Ruhl Libre', serif", fontStyle: "italic", fontSize: 22, fontWeight: 500 }}>
            ★
          </div>
          <div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.mustard, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              În cazul copiilor
            </div>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15, lineHeight: 1.55, color: "rgba(250,243,231,0.85)", margin: "6px 0 0", maxWidth: 900 }}>
              {d.children.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsD() {
  const d = t.testimonials;
  const colors = [D.terracotta, D.mustard, D.teal, D.clay];
  return (
    <section style={{ background: D.paper, padding: "120px 48px", position: "relative" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
            <div style={{ width: 32, height: 1, background: D.terracotta }} />
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: D.terracotta, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {d.label}
            </span>
            <div style={{ width: 32, height: 1, background: D.terracotta }} />
          </div>
          <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500, fontSize: 64, lineHeight: 0.98, color: D.ink, margin: "24px 0 0", letterSpacing: "-0.025em" }}>
            Cu Primaristica<span style={{ fontStyle: "italic", color: D.terracotta }}>…</span>
          </h2>
        </div>

        <div style={{ columns: 4, columnGap: 20 }}>
          {d.items.map((q, i) => {
            const c = colors[i % colors.length];
            const isAccent = i % 3 === 0;
            return (
              <div
                key={i}
                style={{ breakInside: "avoid", marginBottom: 20, background: isAccent ? c : D.paperAlt, color: isAccent ? D.paper : D.ink, borderRadius: 24, padding: 24, border: isAccent ? "none" : `1px solid ${D.rule}` }}
              >
                <div style={{ fontFamily: "'Frank Ruhl Libre', serif", fontStyle: "italic", fontSize: 36, lineHeight: 0.7, color: isAccent ? "rgba(250,243,231,0.4)" : D.terracotta, marginBottom: 8 }}>
                  "
                </div>
                <p style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 17, lineHeight: 1.4, margin: 0, fontWeight: 400 }}>
                  …{q}.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HistoryD() {
  const d = t.history;
  return (
    <section style={{ background: D.paperWarm, padding: "120px 48px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", right: "-8%", width: 320, height: 320, borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", background: D.clay, opacity: 0.4, animation: "d-drift-y 12s ease-in-out infinite" }} />

      <div style={{ maxWidth: 1360, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 72, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
            <div style={{ width: 32, height: 1, background: D.terracotta }} />
            <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: D.terracotta, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {d.label}
            </span>
            <div style={{ width: 32, height: 1, background: D.terracotta }} />
          </div>
          <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500, fontSize: 64, lineHeight: 0.98, color: D.ink, margin: "24px 0 0", letterSpacing: "-0.025em" }}>
            Cinci decenii de <span style={{ fontStyle: "italic", color: D.terracotta }}>cercetare</span>.
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          <svg viewBox="0 0 1200 1200" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4, zIndex: 0 }}>
            <path d="M 200,80 Q 800,80 600,250 T 400,420 T 800,590 T 400,760 T 800,930 T 600,1100" stroke={D.terracotta} strokeWidth="2" fill="none" strokeDasharray="6 8" />
          </svg>

          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
            {d.items.map((item, i) => {
              const isLeft = i % 2 === 0;
              const c = i === d.items.length - 1 ? D.mustard : i % 2 === 0 ? D.terracotta : D.teal;
              return (
                <div key={item.year} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, padding: "20px 0", alignItems: "center" }}>
                  <div
                    className="d-card-hover"
                    style={{
                      gridColumn: isLeft ? 1 : 2,
                      background: D.paper,
                      borderRadius: 24,
                      padding: 28,
                      border: `1px solid ${D.rule}`,
                      display: "flex",
                      gap: 20,
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: 80, height: 80, borderRadius: 999, background: c, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: D.paper, flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 18, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}>
                        {item.year.replace(/Anii\s/, "")}
                      </span>
                    </div>
                    <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14.5, lineHeight: 1.5, color: D.ink, margin: 0, fontWeight: 400 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 64, padding: 36, background: D.teal, color: D.paper, borderRadius: 28, display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: 999, background: D.mustard, opacity: 0.18 }} />
          <div style={{ width: 100, height: 100, borderRadius: 999, overflow: "hidden", background: D.clay, position: "relative", zIndex: 1 }}>
            <img src="/images/home-istoric.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.85)" }} />
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.mustard, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Fondatoare
            </div>
            <div style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 36, fontWeight: 500, color: D.paper, marginTop: 6, letterSpacing: "-0.015em" }}>
              Helga Pfeiffer-Meisel <span style={{ color: D.clay, fontSize: 22, fontStyle: "italic", fontWeight: 400 }}>1941—2006</span>
            </div>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14.5, lineHeight: 1.55, color: "rgba(250,243,231,0.8)", margin: "8px 0 0", maxWidth: 760 }}>
              Terapeut fizic pediatric. A fondat Primaristica în Germania anilor '70, în colaborare cu Dr. Herbert Pfeiffer, pediatru homeopat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityD() {
  const d = t.community;
  return (
    <section style={{ background: D.paper, padding: "120px 48px" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", background: D.terracotta, color: D.paper, borderRadius: 36, padding: 56, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 320, height: 320, borderRadius: 999, background: D.mustard, opacity: 0.25, animation: "d-drift-x 9s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: -60, right: -60, width: 220, height: 220, borderRadius: 999, border: `2px solid rgba(250,243,231,0.25)` }} />

        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: D.mustard, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Comunitate
          </div>
          <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500, fontSize: 60, lineHeight: 0.98, color: D.paper, margin: "16px 0 0", letterSpacing: "-0.025em" }}>
            O <span style={{ fontStyle: "italic", color: D.mustard }}>familie</span> în continuă creștere.
          </h2>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 17, lineHeight: 1.55, color: "rgba(250,243,231,0.88)", margin: "24px 0 0", maxWidth: 520 }}>
            {d.paragraphs[0]}
          </p>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 17, lineHeight: 1.55, color: "rgba(250,243,231,0.88)", margin: "16px 0 0", maxWidth: 520 }}>
            {d.paragraphs[1]}
          </p>

          <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
            <a href="#" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15, fontWeight: 500, color: D.terracotta, background: D.paper, padding: "14px 24px", borderRadius: 999, textDecoration: "none" }}>
              Alătură-te
            </a>
            <a href="#" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15, fontWeight: 500, color: D.paper, padding: "14px 24px", borderRadius: 999, textDecoration: "none", border: `1px solid rgba(250,243,231,0.6)` }}>
              Vezi evenimente →
            </a>
          </div>
        </div>

        <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", overflow: "hidden", border: `4px solid ${D.paper}` }}>
          <img src="/images/home-comunitate.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(1.05)" }} />
        </div>
      </div>
    </section>
  );
}

function TeachersD() {
  const d = t.teachers;
  const colors = [D.terracotta, D.mustard, D.teal, D.clay, D.terracotta, D.teal, D.mustard, D.rose];
  return (
    <section id="profesori" style={{ background: D.paperWarm, padding: "120px 48px" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, marginBottom: 64, alignItems: "end" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 1, background: D.terracotta }} />
              <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: D.terracotta, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {d.label}
              </span>
            </div>
            <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500, fontSize: 64, lineHeight: 0.98, color: D.ink, margin: "24px 0 0", letterSpacing: "-0.025em" }}>
              Cine ne <span style={{ fontStyle: "italic", color: D.terracotta }}>învață</span>.
            </h2>
          </div>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 17, lineHeight: 1.55, color: D.inkSoft, margin: 0, fontWeight: 400 }}>
            {d.text}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {d.list.map((p, i) => (
            <div key={p.name} className="d-card-hover" style={{ background: D.paper, borderRadius: 24, padding: 20, border: `1px solid ${D.rule}`, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ aspectRatio: "1/1", borderRadius: 999, background: colors[i], display: "flex", alignItems: "center", justifyContent: "center", color: D.paper, fontFamily: "'Frank Ruhl Libre', serif", fontStyle: "italic", fontSize: 56, fontWeight: 500, letterSpacing: "-0.02em" }}>
                {p.name.split(" ").filter((s) => /^[A-ZȘȚĂÎÂ]/.test(s)).slice(0, 2).map((s) => s[0]).join("")}
              </div>
              <div>
                <div style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 18, fontWeight: 500, color: D.ink, letterSpacing: "-0.01em", lineHeight: 1.15 }}>
                  {p.name}
                </div>
                <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: D.inkSoft, marginTop: 6, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 5, height: 5, borderRadius: 999, background: D.terracotta }} />
                  {p.city}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <a href="#" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 15, fontWeight: 500, color: D.paper, background: D.teal, padding: "14px 28px", borderRadius: 999, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
            {d.cta} <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactD() {
  const d = t.contact;
  return (
    <section id="contact" style={{ background: D.paper, padding: "120px 48px 96px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", background: D.teal, color: D.paper, borderRadius: 36, padding: 56, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 280, height: 280, borderRadius: 999, background: D.mustard, opacity: 0.2, animation: "d-pulse-soft 6s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: 60, right: 80, width: 80, height: 80, borderRadius: 999, background: D.terracotta, opacity: 0.7 }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 240, height: 240, borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%", background: D.clay, opacity: 0.18 }} />

        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "start" }}>
          <div>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 13, color: D.mustard, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {d.label}
            </div>
            <h2 style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 500, fontSize: 72, lineHeight: 0.95, color: D.paper, margin: "16px 0 0", letterSpacing: "-0.03em" }}>
              Hai să <span style={{ fontStyle: "italic", color: D.mustard }}>vorbim.</span>
            </h2>
            <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 17, lineHeight: 1.55, color: "rgba(250,243,231,0.85)", margin: "24px 0 0", maxWidth: 460 }}>
              {d.description}
            </p>

            <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 999, background: D.terracotta, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 22, fontWeight: 400 }}>+40 21 000 0000</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 999, background: D.mustard, display: "flex", alignItems: "center", justifyContent: "center", color: D.teal }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 22, fontWeight: 400 }}>contact@primaristica.ro</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 999, background: D.clay, display: "flex", alignItems: "center", justifyContent: "center", color: D.teal }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontSize: 22, fontWeight: 400 }}>{d.schedule}</span>
              </div>
            </div>
          </div>

          <div style={{ background: D.paper, color: D.ink, borderRadius: 24, padding: 28, position: "relative" }}>
            <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.terracotta, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>
              Trimite un mesaj
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {(
                [
                  ["Nume", "Numele tău"],
                  ["Email", "adresa@email.com"],
                  ["Telefon (opțional)", "07xx xxx xxx"],
                ] as const
              ).map(([l, p]) => (
                <div key={l}>
                  <label style={{ display: "block", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.inkSoft, fontWeight: 500, marginBottom: 6 }}>
                    {l}
                  </label>
                  <div style={{ background: D.paperAlt, borderRadius: 12, padding: "12px 14px", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, color: D.inkSoft, border: `1px solid ${D.rule}` }}>
                    {p}
                  </div>
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.inkSoft, fontWeight: 500, marginBottom: 6 }}>
                  Mesaj
                </label>
                <div style={{ background: D.paperAlt, borderRadius: 12, padding: "12px 14px", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, color: D.inkSoft, border: `1px solid ${D.rule}`, minHeight: 64 }}>
                  Scrie mesajul tău aici…
                </div>
              </div>
              <button type="button" style={{ marginTop: 8, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, fontWeight: 500, color: D.paper, background: D.terracotta, padding: 14, borderRadius: 999, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                {d.cta} <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterD() {
  return (
    <footer style={{ background: D.paperWarm, padding: "56px 48px 32px", borderTop: `1px solid ${D.rule}` }}>
      <div style={{ maxWidth: 1360, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 999, background: D.terracotta, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <img src={t.brand.logoIcon} alt="" style={{ width: "72%", height: "72%", objectFit: "contain", filter: "invert(1) brightness(2)", mixBlendMode: "screen" }} />
            </div>
            <span style={{ fontFamily: "'Frank Ruhl Libre', serif", fontWeight: 700, fontSize: 20, color: D.ink, letterSpacing: "-0.005em" }}>
              Primaristica<sup style={{ fontSize: 10 }}>®</sup>
            </span>
          </div>
          <p style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, lineHeight: 1.55, color: D.inkSoft, margin: "16px 0 0", maxWidth: 320 }}>
            Institutul de Primaristică România. Cunoaștere și educație a dezvoltării senzo-motorii — la orice vârstă.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.inkSoft, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Navigare
          </div>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            {t.nav.map((n) => (
              <a key={n} href="#" className="d-link" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, color: D.ink, textDecoration: "none" }}>
                {n}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.inkSoft, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Contact
          </div>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8, fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 14, color: D.ink }}>
            <span>contact@primaristica.ro</span>
            <span>+40 21 000 0000</span>
            <span style={{ color: D.inkSoft, fontSize: 13 }}>Luni–Vineri, 09:00–12:00</span>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, color: D.inkSoft, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Limbă
          </div>
          <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["RO", "EN", "DE", "FR", "ES"].map((l) => (
              <span
                key={l}
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12, fontWeight: 500, padding: "5px 11px", borderRadius: 999, background: l === "RO" ? D.terracotta : "transparent", color: l === "RO" ? D.paper : D.inkSoft, border: l === "RO" ? "none" : `1px solid ${D.rule}` }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1360, margin: "48px auto 0", paddingTop: 24, borderTop: `1px solid ${D.rule}`, display: "flex", justifyContent: "space-between", fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 12.5, color: D.inkSoft }}>
        <span>© 2026 Institutul de Primaristică România · Toate drepturile rezervate</span>
        <span>Variant D — Movement & Earth</span>
      </div>
    </footer>
  );
}

export function VariantD() {
  return (
    <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", color: D.ink, background: D.paper, overflow: "hidden" }}>
      <style>{dFonts + dAnims}</style>
      <NavD />
      <HeroD />
      <WhatIsD />
      <AudienceD />
      <MethodD />
      <TestimonialsD />
      <HistoryD />
      <CommunityD />
      <TeachersD />
      <ContactD />
      <FooterD />
    </div>
  );
}
