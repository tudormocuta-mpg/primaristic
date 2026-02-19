export function SectionDivider() {
  return (
    <div aria-hidden="true" className="flex w-full items-center justify-center py-2">
      <svg
        className="block h-[60px] w-full max-w-[1400px]"
        preserveAspectRatio="none"
        viewBox="0 0 1400 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C200,30 250,15 450,15 C650,15 700,45 900,45 C1100,45 1150,30 1400,30"
          fill="none"
          stroke="hsl(195 22% 44%)"
          strokeLinecap="round"
          strokeOpacity="0.2"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}
