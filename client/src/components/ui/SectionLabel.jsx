export default function SectionLabel({ children, color = 'cyan' }) {
  const colors = {
    cyan:    'text-cyan-400 border-cyan-400/30 bg-cyan-400/8',
    amber:   'text-amber-400 border-amber-400/30 bg-amber-400/8',
    violet:  'text-violet-400 border-violet-400/30 bg-violet-400/8',
    emerald: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/8',
  };
  return (
    <span className={`
      inline-flex items-center gap-2
      px-4 py-1.5 rounded-full
      border text-xs font-semibold tracking-[0.15em] uppercase
      font-sans
      ${colors[color] ?? colors.cyan}
    `}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {children}
    </span>
  );
}
