"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Home } from "lucide-react";
import { localePath } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n/config";
import { VARIANT_IDS, VARIANT_META, type VariantId } from "./registry";

interface Props {
  locale: Locale;
  currentVariant: VariantId;
}

// Fixed pill shown on every variant preview page. Lets the client jump
// between the original homepage and the 4 design variants without scrolling
// back up to the variant's own custom navbar.
export function FloatingVariantSwitcher({ locale, currentVariant }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = VARIANT_META[currentVariant];

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        top: 16,
        right: 16,
        zIndex: 1000,
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(15, 15, 13, 0.92)",
          color: "#FAF9F6",
          borderRadius: 999,
          padding: "6px 6px 6px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 12.5,
          fontWeight: 500,
          letterSpacing: "0.01em",
          boxShadow: "0 8px 24px -8px rgba(0,0,0,0.35)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      >
        <span style={{ opacity: 0.6, textTransform: "uppercase", fontSize: 10, letterSpacing: "0.12em" }}>
          Versiune
        </span>
        <span>{current.label}</span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Schimbă versiunea homepage"
          aria-expanded={open}
          style={{
            background: "#FAF9F6",
            color: "#0F0F0D",
            border: "none",
            borderRadius: 999,
            padding: "6px 10px",
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            cursor: "pointer",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          Schimbă
          <ChevronDown
            size={14}
            style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none" }}
          />
        </button>
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            minWidth: 280,
            background: "#FFFFFF",
            color: "#0F0F0D",
            borderRadius: 16,
            border: "1px solid rgba(15,15,13,0.1)",
            boxShadow: "0 16px 48px -16px rgba(0,0,0,0.25)",
            overflow: "hidden",
          }}
        >
          <Link
            href={localePath(locale, "/")}
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 16px",
              fontSize: 14,
              color: "#0F0F0D",
              textDecoration: "none",
              borderBottom: "1px solid rgba(15,15,13,0.08)",
              fontWeight: 500,
            }}
          >
            <Home size={14} />
            <span style={{ flex: 1 }}>Original</span>
            <span style={{ fontSize: 11, color: "rgba(15,15,13,0.5)" }}>Homepage curent</span>
          </Link>
          {VARIANT_IDS.map((id) => {
            const meta = VARIANT_META[id];
            const isCurrent = id === currentVariant;
            return (
              <Link
                key={id}
                href={localePath(locale, `/varianta/${id}`)}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  fontSize: 14,
                  color: "#0F0F0D",
                  textDecoration: "none",
                  background: isCurrent ? "rgba(90,138,126,0.08)" : "transparent",
                  borderBottom: id === "d" ? "none" : "1px solid rgba(15,15,13,0.08)",
                }}
              >
                <div style={{ fontWeight: isCurrent ? 600 : 500, color: isCurrent ? "#5A8A7E" : "#0F0F0D" }}>
                  {meta.label}
                </div>
                <div style={{ fontSize: 12, color: "rgba(15,15,13,0.55)", marginTop: 2 }}>
                  {meta.description}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
