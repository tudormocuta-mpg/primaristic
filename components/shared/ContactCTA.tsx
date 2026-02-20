import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ContactCTAProps {
  title?: string;
  description?: string;
}

export function ContactCTA({
  title = "Contactează-ne pentru informații",
  description = "Suntem aici pentru a răspunde întrebărilor tale despre PRIMARISTICA® și despre cum te poate ajuta.",
}: ContactCTAProps) {
  return (
    <section className="relative overflow-hidden border-t border-border bg-primary/5 py-20">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grain opacity-30" />
      </div>
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg font-light text-muted-foreground">
          {description}
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full px-10 shadow-lg shadow-primary/10"
          >
            <Link href="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
