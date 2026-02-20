interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-primary/5 py-20 md:py-24">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] -top-[10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-accent/5 blur-[80px]" />
        <div className="absolute inset-0 bg-grain opacity-30" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {title}
        </span>
        <h1 className="font-display text-4xl font-normal tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg font-light text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
