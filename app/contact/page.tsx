"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
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
            Contact
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Suntem aici pentru a răspunde întrebărilor tale despre PRIMARISTICA®
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact form */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-foreground">
              Trimite-ne un mesaj
            </h2>

            {submitted ? (
              <div className="rounded-lg border border-accent bg-accent/10 p-6 text-center">
                <p className="font-medium text-foreground">
                  Mulțumim pentru mesajul tău!
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Te vom contacta în cel mai scurt timp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="nume">Nume *</Label>
                  <Input
                    id="nume"
                    name="nume"
                    required
                    placeholder="Numele tău"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="adresa@email.com"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="telefon">Telefon (opțional)</Label>
                  <Input
                    id="telefon"
                    name="telefon"
                    type="tel"
                    placeholder="07xx xxx xxx"
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="mesaj">Mesaj *</Label>
                  <Textarea
                    id="mesaj"
                    name="mesaj"
                    required
                    rows={5}
                    placeholder="Scrie mesajul tău aici..."
                    className="mt-1.5"
                  />
                </div>
                <Button type="submit" size="lg">
                  Trimite mesajul
                </Button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 className="mb-6 text-xl font-bold text-foreground">
              Informații de contact
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
                    <span>Program: {siteConfig.contact.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-5">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {siteConfig.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
