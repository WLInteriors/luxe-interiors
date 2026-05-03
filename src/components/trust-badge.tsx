interface TrustBadgeProps {
  label: string;
  sub?: string;
  className?: string;
}

export function TrustBadge({ label, sub, className = "" }: TrustBadgeProps) {
  return (
    <div className={`inline-flex flex-col items-center justify-center w-32 h-32 rounded-full border border-gold/40 bg-card ${className}`}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-gold mb-1">
        <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.3l-4.8 2.6.9-5.4L4.2 7.7l5.4-.8L12 2z"
              stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
      <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-foreground text-center px-2 leading-tight">
        {label}
      </span>
      {sub && <span className="text-[9px] text-muted-foreground mt-0.5">{sub}</span>}
    </div>
  );
}
