interface IconProps {
  className?: string;
}

/* ─── "Cui se adresează?" icons ────────────────────────────── */

/** Femeia gravidă — protective womb shape cradling new life */
export function IconPregnant({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Protective outer curve (womb/embrace) */}
      <path d="M7 17C5.5 14.5 5 12 5.5 9 6 5.5 8.5 3 12 3s6 2.5 6.5 6c.5 3 0 5.5-1.5 8" />
      {/* Baby circle */}
      <circle cx="12" cy="10.5" r="2.5" />
      {/* Cradling base */}
      <path d="M7 17c2 2 3.5 2.5 5 2.5s3-.5 5-2.5" />
      {/* Tiny heartbeat accent */}
      <path d="M10.5 10.5h1l.5-1 .5 2 .5-1h1" strokeWidth="1" />
    </svg>
  );
}

/** Nou-născut și sugar — cupping hands cradling a small life */
export function IconNewborn({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left cupping hand */}
      <path d="M4 8c0 5 3 9 8 12" />
      {/* Right cupping hand */}
      <path d="M20 8c0 5-3 9-8 12" />
      {/* Baby circle */}
      <circle cx="12" cy="11" r="3" />
      {/* Warmth/radiance dots */}
      <circle cx="12" cy="5" r=".75" fill="currentColor" />
      <circle cx="8.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="15.5" cy="6.5" r=".5" fill="currentColor" />
    </svg>
  );
}

/** Copilul mic — ascending stepping stones (first steps) */
export function IconToddler({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Three ascending stepping stones */}
      <circle cx="5" cy="19" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="5" r="2" />
      {/* Connecting paths (growth trajectory) */}
      <path d="M7 17.5 10 13.5" />
      <path d="M14 10.5 17 6.5" />
    </svg>
  );
}

/** Preșcolar și școlar — open book with rising spark */
export function IconStudent({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left page */}
      <path d="M12 8C10 6 7 5 4 5v12c3 0 6 1 8 3" />
      {/* Right page */}
      <path d="M12 8c2-2 5-3 8-3v12c-3 0-6 1-8 3" />
      {/* Spine */}
      <path d="M12 8v12" />
      {/* Rising spark above */}
      <circle cx="12" cy="3" r="1" fill="currentColor" fillOpacity="0.3" />
      <path d="M10 4.5 12 2l2 2.5" strokeWidth="1" />
    </svg>
  );
}

/** Tineri — ascending trajectory with arrowhead */
export function IconYouth({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Ascending curve */}
      <path d="M4 20C6 16 9 10 20 4" />
      {/* Arrowhead */}
      <path d="M15 4h5v5" />
      {/* Trailing spark dots */}
      <circle cx="7" cy="16" r=".75" fill="currentColor" />
      <circle cx="10" cy="12" r=".75" fill="currentColor" />
    </svg>
  );
}

/** Adulți — diamond (stability and centered balance) */
export function IconAdult({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Diamond */}
      <path d="M12 3 21 12 12 21 3 12z" />
      {/* Center circle — focused core */}
      <circle cx="12" cy="12" r="2.5" />
      {/* Stability crosshairs */}
      <path d="M12 6v3.5M12 14.5V18M6 12h3.5M14.5 12H18" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

/** Seniori — heartbeat pulse (continued vitality) */
export function IconSenior({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Heartbeat line */}
      <path d="M2 13h4l1.5-4 2 8 2-6 1.5 2H22" />
      {/* Subtle heart accent */}
      <path d="M18 7c1-1 2.5-1 3 .5s-.5 3-3 5c-2.5-2-3.5-3.5-3-5s2-1.5 3-.5z" strokeWidth="1" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

/** Familia — family tree with three connected branches */
export function IconFamily({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Trunk */}
      <path d="M12 21v-7" />
      {/* Branches */}
      <path d="M12 14c-3 0-5-2-5-4" />
      <path d="M12 14c3 0 5-2 5-4" />
      <path d="M12 14V8" />
      {/* Leaf nodes (family members) */}
      <circle cx="7" cy="8" r="2.5" />
      <circle cx="17" cy="8" r="2.5" />
      <circle cx="12" cy="5.5" r="2.5" />
      {/* Root accent */}
      <path d="M10 21c0-1 1-2 2-2s2 1 2 2" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

/* ─── Concept icons ──────────────────────────────────────── */

/** Reflexele Primare — neural branching pattern */
export function IconNeural({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Main neural stem */}
      <path d="M12 3v18" />
      {/* Branches */}
      <path d="M12 7c3-2 5-1 7 0" />
      <path d="M12 11c-3-2-5-1-7 0" />
      <path d="M12 15c3-2 5-1 7 0" />
      {/* Nodes */}
      <circle cx="19" cy="7" r="1.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="5" cy="11" r="1.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="19" cy="15" r="1.5" fill="currentColor" fillOpacity="0.15" />
      <circle cx="12" cy="3" r="1" fill="currentColor" fillOpacity="0.3" />
      <circle cx="12" cy="21" r="1" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

/** Tonusul Muscular — smooth oscillation wave */
export function IconWave({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Sine wave */}
      <path d="M2 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0" />
      {/* Peak highlights */}
      <circle cx="5" cy="6" r="1" fill="currentColor" fillOpacity="0.15" />
      <circle cx="11" cy="18" r="1" fill="currentColor" fillOpacity="0.15" />
      <circle cx="17" cy="6" r="1" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

/* ─── Method icons ───────────────────────────────────────── */

/** Lecția individuală — two figures in dialogue */
export function IconLesson({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Teacher */}
      <circle cx="7" cy="5.5" r="2.5" />
      <path d="M7 8v8" />
      <path d="M4 16h6" />
      {/* Student */}
      <circle cx="17" cy="7" r="2" />
      <path d="M17 9v7" />
      <path d="M14.5 16h5" />
      {/* Knowledge transfer arc */}
      <path d="M10 6c1.5-2 3-2 4.5 0" strokeWidth="1" strokeDasharray="2 1.5" />
    </svg>
  );
}

/** Practică zilnică acasă — resting figure under shelter */
export function IconPractice({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Shelter/home roof */}
      <path d="M3 12l9-8 9 8" />
      {/* Resting figure */}
      <circle cx="8" cy="17" r="1.5" />
      <path d="M9.5 17H18" />
      {/* Gentle arc (peace/rest) */}
      <path d="M7 14c3-2 7-2 10 0" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

/** Evoluție continuă — ascending growth spiral with leaf */
export function IconGrowth({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Stem */}
      <path d="M12 21c0-4-3-6-3-9s3-5 3-8" />
      {/* Leaves along the stem */}
      <path d="M12 16c2-1 4 0 4 2" strokeWidth="1.25" />
      <path d="M12 11c-2-1-4 0-4 2" strokeWidth="1.25" />
      {/* Top bloom */}
      <circle cx="12" cy="3" r="2" fill="currentColor" fillOpacity="0.12" />
      <circle cx="12" cy="3" r="1" fill="currentColor" fillOpacity="0.25" />
      {/* Root */}
      <path d="M10.5 21h3" strokeWidth="1" />
    </svg>
  );
}
