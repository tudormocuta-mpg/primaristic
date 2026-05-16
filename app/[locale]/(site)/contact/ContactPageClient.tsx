"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Phone, Clock, CheckCircle, AlertCircle, Loader2, MapPin } from "lucide-react";
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      nume: formData.get("nume") as string,
      email: formData.get("email") as string,
      telefon: formData.get("telefon") as string,
      mesaj: formData.get("mesaj") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
    } catch {
      setError(dict.form.errorText);
    } finally {
      setLoading(false);
    }
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
                {error && (
                  <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p>{error}</p>
                  </div>
                )}
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
                    disabled={loading}
                    placeholder={dict.form.namePlaceholder}
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60"
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
                    disabled={loading}
                    placeholder={dict.form.emailPlaceholder}
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60"
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
                    disabled={loading}
                    placeholder={dict.form.phonePlaceholder}
                    className="w-full rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60"
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
                    disabled={loading}
                    placeholder={dict.form.messagePlaceholder}
                    className="w-full resize-y rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:bg-card focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-60"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md active:translate-y-0 disabled:pointer-events-none disabled:opacity-60"
                  >
                    {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                    {loading ? dict.form.sending : dict.form.submit}
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
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">
                      {siteConfig.contact.address}
                    </span>
                  </div>

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

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <a
                      href={siteConfig.contact.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Facebook
                    </a>
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
