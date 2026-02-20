"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Clock } from "lucide-react";
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
    <>
      {/* Page header inline — client component */}
      <div className="border-b border-border bg-card py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {dict.header.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            {dict.header.subtitle}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-foreground">
              {dict.form.title}
            </h2>

            {submitted ? (
              <div className="rounded-lg border border-accent bg-accent/10 p-6 text-center">
                <p className="font-medium text-foreground">
                  {dict.form.successTitle}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {dict.form.successText}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="nume">
                    {dict.form.nameLabel} {dict.form.required}
                  </Label>
                  <Input
                    id="nume"
                    name="nume"
                    required
                    placeholder={dict.form.namePlaceholder}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email">
                    {dict.form.emailLabel} {dict.form.required}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={dict.form.emailPlaceholder}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="telefon">{dict.form.phoneLabel}</Label>
                  <Input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    placeholder={dict.form.phonePlaceholder}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="mesaj">
                    {dict.form.messageLabel} {dict.form.required}
                  </Label>
                  <Textarea
                    id="mesaj"
                    name="mesaj"
                    required
                    rows={5}
                    placeholder={dict.form.messagePlaceholder}
                    className="mt-1.5"
                  />
                </div>
                <Button type="submit" size="lg">
                  {dict.form.submit}
                </Button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-foreground">
              {dict.info.title}
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-card p-5">
                <p className="font-bold text-foreground">
                  {siteConfig.contact.organization}
                </p>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 shrink-0" />
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="transition-colors hover:text-foreground"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0" />
                    <span>
                      {commonDict.schedule}: {commonDict.scheduleValue}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-5">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {commonDict.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
