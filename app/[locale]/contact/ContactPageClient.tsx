"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Phone, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { Dictionary } from "@/i18n/dictionaries";

interface ContactPageClientProps {
  dict: Dictionary["contact"];
  commonDict: Dictionary["common"];
}

export default function ContactPageClient({
  dict,
  commonDict,
}: ContactPageClientProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* ── Form column ── */}
          <div>
            <h2 className="mb-8 font-display text-xl text-foreground">
              {dict.form.title}
            </h2>

            {submitted ? (
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
                <CheckCircle className="mx-auto mb-4 h-10 w-10 text-primary" />
                <p className="font-display text-lg text-foreground">
                  {dict.form.successTitle}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {dict.form.successText}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="nume"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {dict.form.nameLabel} {dict.form.required}
                  </label>
                  <input
                    id="nume"
                    name="nume"
                    type="text"
                    required
                    placeholder={dict.form.namePlaceholder}
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {dict.form.emailLabel} {dict.form.required}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={dict.form.emailPlaceholder}
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefon"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {dict.form.phoneLabel}
                  </label>
                  <input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    placeholder={dict.form.phonePlaceholder}
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="mesaj"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    {dict.form.messageLabel} {dict.form.required}
                  </label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    required
                    rows={5}
                    placeholder={dict.form.messagePlaceholder}
                    className="w-full resize-y rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md active:translate-y-0"
                  >
                    {dict.form.submit}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* ── Info column ── */}
          <div>
            <h2 className="mb-8 font-display text-xl text-foreground">
              {dict.info.title}
            </h2>

            <div className="space-y-6">
              {/* Main contact card */}
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-display text-lg text-foreground">
                  {siteConfig.contact.organization}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      {commonDict.schedule}: {commonDict.scheduleValue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Site info card */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {commonDict.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
