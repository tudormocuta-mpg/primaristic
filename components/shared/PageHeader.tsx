interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-[hsl(195,33%,93%)] via-[hsl(195,25%,91%)] to-[hsl(195,20%,89%)] py-16 md:py-20">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] -top-[10%] h-[50%] w-[50%] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-primary/5 blur-[80px]" />
        <div className="absolute inset-0 bg-grain opacity-40" />

        {/* Flowing organic curves — from Stitch abstract header */}
        <svg
          className="absolute inset-0 h-full w-full text-primary/20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 300"
        >
          <path
            d="M-100,200 C200,180 400,250 600,200 C800,150 1000,100 1540,130"
            fill="none"
            stroke="currentColor"
            strokeDasharray="4 4"
            strokeWidth="0.5"
            opacity="0.6"
          />
          <path
            d="M-100,240 C250,260 500,180 800,220 C1100,260 1300,160 1540,200"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block h-2 w-2 rounded-full bg-primary/60" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {title}
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-lg font-light text-muted-foreground">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
