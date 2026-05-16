"use client";

import { useState } from "react";
import { VARIANT_CONTENT as t } from "./content";

// VARIANT C — Quiet Practice.
// Modern healthcare-product aesthetic: DM Sans + Instrument Serif italic flourish, deep forest green.

const C = {
  paper: "#FAF9F6",
  surface: "#F1EFEA",
  surfaceDeep: "#E6E2D8",
  forest: "#2F4F46",
  sage: "#8EA59A",
  ink: "#1A1F1C",
  inkSoft: "#5B6360",
  rule: "#DAD5C7",
  warm: "#C18B5E",
};

const cFonts = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
`;

const cAnims = `
  @keyframes c-breathe {
    0%, 100% { transform: scale(1); opacity: 0.85; }
    50% { transform: scale(1.04); opacity: 1; }
  }
  @keyframes c-breathe-slow {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.12); }
  }
  @keyframes c-pulse-ring {
    0% { transform: scale(0.95); opacity: 0.55; }
    100% { transform: scale(1.45); opacity: 0; }
  }
  @keyframes c-marquee {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }
  .c-card-hover { transition: transform .35s cubic-bezier(.2,.7,.3,1), box-shadow .35s, background .2s; }
  .c-card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 32px -16px rgba(26,31,28,0.15); }
  .c-tab { transition: background .2s, color .2s, border-color .2s; cursor: pointer; }
  .c-link-hover { transition: opacity .15s; }
  .c-link-hover:hover { opacity: 0.6; }
  .c-marquee-track { animation: c-marquee 50s linear infinite; }
  .c-marquee:hover .c-marquee-track { animation-play-state: paused; }
`;

function NavC() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(250,249,246,0.85)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: `1px solid ${C.rule}` }}>
      <div style={{ padding: "16px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 999, background: C.forest, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <img src={t.brand.logoIcon} alt="" style={{ width: "70%", height: "70%", objectFit: "contain", filter: "invert(1) brightness(2)", mixBlendMode: "screen" }} />
          </div>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 17, letterSpacing: "-0.01em", color: C.ink }}>
            Primaristica<sup style={{ fontSize: 9, marginLeft: 1 }}>®</sup>
          </span>
        </div>
        <nav style={{ display: "flex", gap: 32, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.inkSoft }}>
          {t.nav.map((n) => (
            <a key={n} href="#" className="c-link-hover" style={{ color: "inherit", textDecoration: "none" }}>
              {n}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button type="button" style={{ background: "transparent", border: "none", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, color: C.inkSoft, cursor: "pointer" }}>
            RO ↓
          </button>
          <a href="#contact" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.paper, background: C.forest, padding: "11px 20px", borderRadius: 999, textDecoration: "none" }}>
            Programează o lecție
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroC() {
  return (
    <section style={{ background: C.paper, padding: "96px 48px 120px", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center", maxWidth: 1280, margin: "0 auto" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 14px", border: `1px solid ${C.rule}`, borderRadius: 999, background: C.paper }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: C.forest }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: C.inkSoft, fontWeight: 500, letterSpacing: "0.01em" }}>
              Institutul de Primaristică România · est. 2018
            </span>
          </div>
          <h1 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 76, lineHeight: 1.02, color: C.ink, margin: "32px 0 0", letterSpacing: "-0.035em" }}>
            O viață mai liberă,<br />
            <span style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontStyle: "italic", color: C.forest, fontSize: "1.05em" }}>
              prin mișcare conștientă.
            </span>
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 19, lineHeight: 1.55, color: C.inkSoft, marginTop: 28, fontWeight: 400, maxWidth: 540 }}>
            Primaristica® este disciplina cunoașterii și educării dezvoltării senzo-motorii — necesară și benefică tuturor vârstelor, fie că suntem sănătoși sau nu.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 40, alignItems: "center" }}>
            <a href="#metoda" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: C.paper, background: C.forest, padding: "15px 24px", borderRadius: 999, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}>
              Descoperă metoda <span style={{ fontSize: 13 }}>→</span>
            </a>
            <a href="#profesori" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: C.ink, padding: "15px 20px", textDecoration: "none" }}>
              Găsește un profesor
            </a>
          </div>

          <div style={{ marginTop: 64, paddingTop: 32, borderTop: `1px solid ${C.rule}`, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {(
              [
                ["50", "ani de practică"],
                ["8", "profesori activi"],
                ["19", "absolvenți"],
                ["2k+", "practicanți"],
              ] as const
            ).map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 30, fontWeight: 600, color: C.forest, letterSpacing: "-0.02em" }}>{n}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.inkSoft, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative", aspectRatio: "1/1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "70%",
                height: "70%",
                border: `1px solid ${C.forest}`,
                borderRadius: "50%",
                animation: `c-pulse-ring 4.5s ease-out ${i * 1.5}s infinite`,
                opacity: 0,
              }}
            />
          ))}
          <div
            style={{
              width: "70%",
              height: "70%",
              borderRadius: "50%",
              background: `radial-gradient(circle at 35% 30%, ${C.surface} 0%, ${C.forest} 95%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "c-breathe 6s ease-in-out infinite",
              position: "relative",
              boxShadow: `inset 0 0 80px rgba(0,0,0,0.15), 0 30px 80px -30px rgba(47,79,70,0.45)`,
            }}
          >
            <div style={{ textAlign: "center", color: C.paper, padding: 32 }}>
              <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 36, lineHeight: 1.15, fontWeight: 400 }}>
                Senzație și mișcare<br />— o unitate inseparabilă.
              </div>
              <div style={{ marginTop: 16, fontFamily: "'DM Sans', sans-serif", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.7 }}>
                Inspiră · Expiră
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, right: 0, fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkSoft, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 24, height: 1, background: C.rule }} />
            Bucla senzo-motorie
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsC() {
  const d = t.whatIs;
  return (
    <section style={{ background: C.surface, padding: "120px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 96 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.forest, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {d.label}
          </div>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 54, lineHeight: 1.02, color: C.ink, margin: "16px 0 0", letterSpacing: "-0.03em" }}>
            O <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.forest, fontWeight: 400 }}>disciplină</span> a întregului organism.
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {d.paragraphs.map((p, i) => (
            <div key={i} className="c-card-hover" style={{ background: C.paper, borderRadius: 20, padding: "28px 32px", border: `1px solid ${C.rule}` }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 28, color: C.forest, fontWeight: 400, flexShrink: 0 }}>
                  {i + 1}.
                </span>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.55, color: C.ink, margin: 0, fontWeight: 400 }}>{p}</p>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 24, padding: 32, background: C.forest, color: C.paper, borderRadius: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(250,249,246,0.6)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Conceptul I
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 24, fontWeight: 500, color: C.paper, margin: "8px 0 12px", letterSpacing: "-0.015em" }}>
                Reflexele Primare
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, lineHeight: 1.55, color: "rgba(250,249,246,0.8)", margin: 0 }}>
                Tipare neurologice ereditare, vitale fătului. După naștere, persistența lor erodează zilnic funcționarea buclei senzo-motorii.
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(250,249,246,0.6)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Conceptul II
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 24, fontWeight: 500, color: C.paper, margin: "8px 0 12px", letterSpacing: "-0.015em" }}>
                Tonusul Muscular
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, lineHeight: 1.55, color: "rgba(250,249,246,0.8)", margin: 0 }}>
                Vibrația apărută la concepție și stinsă numai la moarte. Pe această buclă inseparabilă se clădește maturarea posturală.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceC() {
  const d = t.audience;
  const [selected, setSelected] = useState(0);
  return (
    <section style={{ background: C.paper, padding: "120px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.forest, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {d.label}
          </div>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 54, lineHeight: 1.02, color: C.ink, margin: "16px 0 0", letterSpacing: "-0.03em" }}>
            Pentru <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.forest, fontWeight: 400 }}>fiecare</span> dintre noi, la <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.forest, fontWeight: 400 }}>orice</span> vârstă.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, color: C.inkSoft, margin: "20px auto 0", maxWidth: 580 }}>
            {d.subtitle}
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 40 }}>
          {d.groups.map((g, i) => (
            <button
              key={g.title}
              type="button"
              className="c-tab"
              onClick={() => setSelected(i)}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                padding: "10px 18px",
                borderRadius: 999,
                border: `1px solid ${selected === i ? C.forest : C.rule}`,
                background: selected === i ? C.forest : "transparent",
                color: selected === i ? C.paper : C.ink,
              }}
            >
              {g.title}
            </button>
          ))}
        </div>

        <div style={{ background: C.surface, borderRadius: 24, padding: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", border: `1px solid ${C.rule}`, transition: "background 0.3s" }}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.forest, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {d.groups[selected].age} · grupa {String(selected + 1).padStart(2, "0")} / 08
            </div>
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 56, lineHeight: 1, color: C.ink, margin: "16px 0 24px", letterSpacing: "-0.03em" }}>
              {d.groups[selected].title}
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.55, color: C.inkSoft, margin: 0, fontWeight: 400 }}>
              {d.groups[selected].text}
            </p>
          </div>
          <div style={{ position: "relative", aspectRatio: "4/3", background: `linear-gradient(135deg, ${C.surfaceDeep} 0%, ${C.surface} 100%)`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
              {d.groups.map((g, i) => {
                const angle = (i / d.groups.length) * Math.PI * 2 - Math.PI / 2;
                const r = 38;
                const x = 50 + Math.cos(angle) * r;
                const y = 50 + Math.sin(angle) * r;
                return (
                  <div
                    key={g.title}
                    style={{
                      position: "absolute",
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                      width: selected === i ? 18 : 8,
                      height: selected === i ? 18 : 8,
                      borderRadius: 999,
                      background: selected === i ? C.forest : C.sage,
                      transition: "all 0.4s cubic-bezier(.2,.7,.3,1)",
                      boxShadow: selected === i ? `0 0 0 6px rgba(47,79,70,0.15)` : "none",
                    }}
                  />
                );
              })}
              <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 4, height: 4, borderRadius: 999, background: C.inkSoft, opacity: 0.4 }} />
            </div>
            <div style={{ position: "relative", fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 48, color: C.forest, fontWeight: 400, textAlign: "center", padding: "0 32px", lineHeight: 1.1 }}>
              „{d.groups[selected].title}."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodC() {
  const d = t.method;
  const [open, setOpen] = useState(0);
  return (
    <section id="metoda" style={{ background: C.surface, padding: "120px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 96 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.forest, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {d.label}
          </div>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 54, lineHeight: 1.02, color: C.ink, margin: "16px 0 0", letterSpacing: "-0.03em" }}>
            Un <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.forest, fontWeight: 400 }}>program</span> de viață, nu o cură.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.55, color: C.inkSoft, margin: "24px 0 0", fontWeight: 400, maxWidth: 380 }}>
            Lecția se învață o singură dată; practica se continuă acasă, zilnic, întreaga viață.
          </p>

          <div style={{ marginTop: 40, padding: 24, background: C.paper, borderRadius: 16, border: `1px solid ${C.rule}` }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.warm, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              În cazul copiilor
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.55, color: C.inkSoft, margin: "10px 0 0" }}>
              {d.children.text}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {d.steps.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={s.title}
                role="button"
                tabIndex={0}
                onClick={() => setOpen(isOpen ? -1 : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpen(isOpen ? -1 : i);
                  }
                }}
                style={{
                  background: isOpen ? C.forest : C.paper,
                  color: isOpen ? C.paper : C.ink,
                  borderRadius: 20,
                  padding: "28px 32px",
                  cursor: "pointer",
                  border: `1px solid ${isOpen ? C.forest : C.rule}`,
                  transition: "background 0.35s, color 0.35s, padding 0.35s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 999,
                        background: isOpen ? C.paper : C.surface,
                        color: isOpen ? C.forest : C.ink,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "'Instrument Serif', serif",
                        fontSize: 22,
                        fontWeight: 400,
                        fontStyle: "italic",
                      }}
                    >
                      {i + 1}
                    </div>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 24, fontWeight: 500, margin: 0, letterSpacing: "-0.015em" }}>
                      {s.title}
                    </h3>
                  </div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 20, opacity: 0.6, transition: "transform 0.3s", transform: isOpen ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </div>
                <div
                  style={{
                    maxHeight: isOpen ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(.2,.7,.3,1), margin-top 0.35s",
                    marginTop: isOpen ? 16 : 0,
                  }}
                >
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.6, margin: 0, opacity: 0.85, paddingLeft: 68 }}>
                    {s.text}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="c-card-hover" style={{ background: `linear-gradient(135deg, ${C.warm} 0%, ${C.forest} 100%)`, color: C.paper, borderRadius: 20, padding: 32, display: "flex", alignItems: "center", gap: 24, marginTop: 8 }}>
            <div style={{ width: 56, height: 56, borderRadius: 999, background: "rgba(250,249,246,0.18)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Instrument Serif', serif", fontSize: 28, fontStyle: "italic" }}>
              ✦
            </div>
            <div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 22, fontWeight: 500, margin: 0, letterSpacing: "-0.015em" }}>{d.result.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.55, margin: "6px 0 0", opacity: 0.9 }}>{d.result.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsC() {
  const d = t.testimonials;
  const cols: string[][] = [[], [], []];
  d.items.forEach((q, i) => cols[i % 3].push(q));
  return (
    <section style={{ background: C.paper, padding: "120px 48px", overflow: "hidden", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 64, alignItems: "start" }}>
        <div style={{ position: "sticky", top: 96 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.forest, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {d.label}
          </div>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 54, lineHeight: 1.02, color: C.ink, margin: "16px 0 0", letterSpacing: "-0.03em" }}>
            Cu Primaristica<span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.forest, fontWeight: 400 }}>…</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.55, color: C.inkSoft, margin: "24px 0 0", fontWeight: 400, maxWidth: 380 }}>
            Mărturii ale practicanților, culese în România între 2018 și 2026.
          </p>
        </div>

        <div
          className="c-marquee"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, height: 600, position: "relative", maskImage: "linear-gradient(180deg, transparent 0, #000 12%, #000 88%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, transparent 0, #000 12%, #000 88%, transparent 100%)" }}
        >
          {cols.map((col, ci) => (
            <div key={ci} style={{ overflow: "hidden" }}>
              <div className="c-marquee-track" style={{ animationDirection: ci % 2 === 0 ? "normal" : "reverse", animationDuration: `${45 + ci * 8}s` }}>
                {[...col, ...col].map((q, qi) => (
                  <div key={qi} style={{ background: C.surface, borderRadius: 16, padding: 20, marginBottom: 12, border: `1px solid ${C.rule}` }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, lineHeight: 1.45, color: C.ink, margin: 0, fontWeight: 400 }}>
                      „…{q}."
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HistoryC() {
  const d = t.history;
  return (
    <section style={{ background: C.forest, color: C.paper, padding: "120px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.sage, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {d.label}
          </div>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 64, lineHeight: 1.02, color: C.paper, margin: "16px auto 0", letterSpacing: "-0.03em", maxWidth: 800 }}>
            Cinci decenii de <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.sage, fontWeight: 400 }}>cercetare</span> și practică.
          </h2>
        </div>

        <div style={{ position: "relative", padding: "32px 0" }}>
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "rgba(250,249,246,0.2)" }} />
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${d.items.length}, 1fr)`, gap: 8, position: "relative" }}>
            {d.items.map((item, i) => {
              const isUp = i % 2 === 0;
              return (
                <div key={item.year} style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                  <div style={{ order: isUp ? 0 : 2, padding: isUp ? "0 0 20px" : "20px 0 0", textAlign: "center", minHeight: 120 }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, lineHeight: 1.5, color: "rgba(250,249,246,0.75)", margin: 0, fontWeight: 400 }}>
                      {item.text}
                    </p>
                  </div>
                  <div
                    style={{ width: 14, height: 14, borderRadius: 999, background: i === d.items.length - 1 ? C.warm : C.paper, border: `3px solid ${C.forest}`, boxShadow: `0 0 0 1px ${C.paper}`, order: 1, position: "relative", zIndex: 1 }}
                  />
                  <div style={{ order: isUp ? 2 : 0, padding: isUp ? "20px 0 0" : "0 0 20px", textAlign: "center" }}>
                    <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 28, fontWeight: 400, color: C.sage, letterSpacing: "-0.01em" }}>
                      {item.year}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, padding: 32, background: "rgba(250,249,246,0.06)", borderRadius: 20, border: `1px solid rgba(250,249,246,0.12)`, alignItems: "center" }}>
          <div style={{ width: 80, height: 80, borderRadius: 999, overflow: "hidden", background: C.surface }}>
            <img src="/images/home-istoric.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(0.4)" }} />
          </div>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.sage, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Fondatoare
            </div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 28, color: C.paper, marginTop: 4 }}>
              Helga Pfeiffer-Meisel <span style={{ color: C.sage, fontSize: 18 }}>· 1941—2006</span>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.55, color: "rgba(250,249,246,0.75)", margin: "8px 0 0", maxWidth: 720 }}>
              Terapeut fizic pediatric, a fondat Primaristica în Germania anilor '70, în colaborare cu Dr. Herbert Pfeiffer, pediatru homeopat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityC() {
  const d = t.community;
  return (
    <section style={{ background: C.paper, padding: "120px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.forest, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Comunitate
          </div>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 54, lineHeight: 1.02, color: C.ink, margin: "16px 0 0", letterSpacing: "-0.03em" }}>
            Mai mult decât o școală — o <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.forest, fontWeight: 400 }}>familie</span> în creștere.
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.55, color: C.inkSoft, margin: "24px 0 0", fontWeight: 400, maxWidth: 540 }}>
            {d.paragraphs[0]}
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, lineHeight: 1.55, color: C.inkSoft, margin: "16px 0 0", fontWeight: 400, maxWidth: 540 }}>
            {d.paragraphs[1]}
          </p>

          <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
            <a href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.paper, background: C.forest, padding: "13px 22px", borderRadius: 999, textDecoration: "none" }}>
              Alătură-te
            </a>
            <a href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink, padding: "13px 22px", border: `1px solid ${C.rule}`, borderRadius: 999, textDecoration: "none" }}>
              Vezi evenimente →
            </a>
          </div>
        </div>

        <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 24, overflow: "hidden" }}>
          <img src="/images/home-comunitate.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.8)" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 50%, rgba(47,79,70,0.55) 100%)` }} />
          <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, color: C.paper }}>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.85 }}>
              Întâlnire lunară · București
            </div>
            <div style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 28, marginTop: 4 }}>Toamnă 2024</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeachersC() {
  const d = t.teachers;
  return (
    <section id="profesori" style={{ background: C.surface, padding: "120px 48px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 56, gap: 48 }}>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.forest, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {d.label}
            </div>
            <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 54, lineHeight: 1.02, color: C.ink, margin: "16px 0 0", letterSpacing: "-0.03em" }}>
              Cine ne <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.forest, fontWeight: 400 }}>învață</span>.
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.55, color: C.inkSoft, margin: "20px 0 0", fontWeight: 400, maxWidth: 580 }}>
              {d.text}
            </p>
          </div>
          <a href="#" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.ink, padding: "13px 22px", border: `1px solid ${C.rule}`, borderRadius: 999, textDecoration: "none", whiteSpace: "nowrap", background: C.paper }}>
            {d.cta} →
          </a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {d.list.map((p) => (
            <div key={p.name} className="c-card-hover" style={{ background: C.paper, borderRadius: 20, padding: 20, border: `1px solid ${C.rule}`, display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ aspectRatio: "1/1", borderRadius: 16, background: `linear-gradient(135deg, ${C.surface} 0%, ${C.surfaceDeep} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", color: C.forest, fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontSize: 56, fontWeight: 400 }}>
                {p.name.split(" ").filter((s) => /^[A-ZȘȚĂÎÂ]/.test(s)).slice(0, 2).map((s) => s[0]).join("")}
              </div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, color: C.ink, letterSpacing: "-0.005em", lineHeight: 1.2 }}>{p.name}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.inkSoft, marginTop: 4, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 5, height: 5, borderRadius: 999, background: C.forest }} />
                  {p.city}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactC() {
  const d = t.contact;
  return (
    <section id="contact" style={{ background: C.paper, padding: "120px 48px 96px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", background: `linear-gradient(135deg, ${C.forest} 0%, ${C.ink} 100%)`, color: C.paper, borderRadius: 32, padding: "64px 56px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "start", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: 999, border: `1px solid rgba(250,249,246,0.12)`, animation: "c-breathe-slow 10s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: -50, right: -50, width: 300, height: 300, borderRadius: 999, border: `1px solid rgba(250,249,246,0.08)`, animation: "c-breathe-slow 10s ease-in-out 2s infinite" }} />

        <div style={{ position: "relative" }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: C.sage, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {d.label}
          </div>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 64, lineHeight: 1, color: C.paper, margin: "16px 0 0", letterSpacing: "-0.035em" }}>
            Hai să <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: C.sage, fontWeight: 400 }}>vorbim.</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, lineHeight: 1.55, color: "rgba(250,249,246,0.8)", margin: "20px 0 0", maxWidth: 440 }}>
            {d.description}
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: "rgba(250,249,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17 }}>+40 21 000 0000</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: "rgba(250,249,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17 }}>contact@primaristica.ro</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 999, background: "rgba(250,249,246,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17 }}>{d.schedule}</span>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", background: "rgba(250,249,246,0.06)", borderRadius: 20, padding: 28, border: `1px solid rgba(250,249,246,0.12)` }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {(
              [
                ["Nume", "Numele tău"],
                ["Email", "adresa@email.com"],
                ["Telefon (opțional)", "07xx xxx xxx"],
              ] as const
            ).map(([l, p]) => (
              <div key={l}>
                <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.sage, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 6 }}>
                  {l}
                </label>
                <div style={{ background: "rgba(250,249,246,0.06)", borderRadius: 10, padding: "12px 14px", fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(250,249,246,0.5)", border: `1px solid rgba(250,249,246,0.12)` }}>
                  {p}
                </div>
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.sage, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 6 }}>
                Mesaj
              </label>
              <div style={{ background: "rgba(250,249,246,0.06)", borderRadius: 10, padding: "12px 14px", fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: "rgba(250,249,246,0.5)", border: `1px solid rgba(250,249,246,0.12)`, minHeight: 64 }}>
                Scrie mesajul tău aici…
              </div>
            </div>
            <button type="button" style={{ marginTop: 4, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.forest, background: C.paper, padding: 14, borderRadius: 999, border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              {d.cta} <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterC() {
  return (
    <footer style={{ background: C.surface, padding: "56px 48px 32px", borderTop: `1px solid ${C.rule}` }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 999, background: C.forest, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
              <img src={t.brand.logoIcon} alt="" style={{ width: "70%", height: "70%", objectFit: "contain", filter: "invert(1) brightness(2)", mixBlendMode: "screen" }} />
            </div>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 17, color: C.ink, letterSpacing: "-0.01em" }}>
              Primaristica<sup style={{ fontSize: 9 }}>®</sup>
            </span>
          </div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.55, color: C.inkSoft, margin: "16px 0 0", maxWidth: 320 }}>
            Institutul de Primaristică România. Cunoaștere și educație a dezvoltării senzo-motorii.
          </p>
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkSoft, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Navigare
          </div>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
            {t.nav.map((n) => (
              <a key={n} href="#" className="c-link-hover" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink, textDecoration: "none" }}>
                {n}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkSoft, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Contact
          </div>
          <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: C.ink }}>
            <span>contact@primaristica.ro</span>
            <span>+40 21 000 0000</span>
            <span style={{ color: C.inkSoft, fontSize: 13 }}>Luni–Vineri, 09:00–12:00</span>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: C.inkSoft, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Limbă
          </div>
          <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 6 }}>
            {["RO", "EN", "DE", "FR", "ES"].map((l) => (
              <span
                key={l}
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500, padding: "5px 10px", borderRadius: 999, background: l === "RO" ? C.forest : "transparent", color: l === "RO" ? C.paper : C.inkSoft, border: l === "RO" ? "none" : `1px solid ${C.rule}` }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "48px auto 0", paddingTop: 24, borderTop: `1px solid ${C.rule}`, display: "flex", justifyContent: "space-between", fontFamily: "'DM Sans', sans-serif", fontSize: 12.5, color: C.inkSoft }}>
        <span>© 2026 Institutul de Primaristică România · Toate drepturile rezervate</span>
        <span>Variant C — Quiet Practice</span>
      </div>
    </footer>
  );
}

export function VariantC() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.ink, background: C.paper, overflow: "hidden" }}>
      <style>{cFonts + cAnims}</style>
      <NavC />
      <HeroC />
      <WhatIsC />
      <AudienceC />
      <MethodC />
      <TestimonialsC />
      <HistoryC />
      <CommunityC />
      <TeachersC />
      <ContactC />
      <FooterC />
    </div>
  );
}
