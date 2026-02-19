import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ContactCTAProps {
  title?: string;
  description?: string;
}

export function ContactCTA({
  title = "Contactează-ne pentru informații",
  description = "Suntem aici pentru a răspunde întrebărilor tale despre PRIMARISTIC® și despre cum te poate ajuta.",
}: ContactCTAProps) {
  return (
    <section className="bg-primary/5 py-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          {description}
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <Link href="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
