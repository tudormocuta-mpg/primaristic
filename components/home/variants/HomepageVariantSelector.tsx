"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { localePath } from "@/lib/i18n-utils";
import type { Locale } from "@/i18n/config";
import { VARIANT_IDS, VARIANT_META } from "./registry";

interface Props {
  locale: Locale;
  className?: string;
}

// Dropdown shown in the main navbar that lets the client preview 4 alternative
// homepage designs. The "Original" entry points back to the live homepage.
export function HomepageVariantSelector({ locale, className }: Props) {
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

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-md border border-border/60 bg-card px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
      >
        <Sparkles className="h-3.5 w-3.5" />
        Versiune
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1 min-w-[200px] overflow-hidden rounded-lg border border-border bg-card shadow-lg">
          <Link
            href={localePath(locale, "/")}
            onClick={() => setOpen(false)}
            className="block border-b border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Original
          </Link>
          {VARIANT_IDS.map((id, idx) => {
            const meta = VARIANT_META[id];
            return (
              <Link
                key={id}
                href={localePath(locale, `/varianta/${id}`)}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted",
                  idx < VARIANT_IDS.length - 1 && "border-b border-border"
                )}
              >
                {meta.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
