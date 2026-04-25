import { motion } from 'framer-motion';

const glowMap = {
  cyan:    'hover:border-cyan-400/25 hover:shadow-[0_0_40px_rgba(34,211,238,0.1),0_8px_32px_rgba(0,0,0,0.5)]',
  amber:   'hover:border-amber-400/25 hover:shadow-[0_0_40px_rgba(245,158,11,0.1),0_8px_32px_rgba(0,0,0,0.5)]',
  violet:  'hover:border-violet-400/25 hover:shadow-[0_0_40px_rgba(139,92,246,0.1),0_8px_32px_rgba(0,0,0,0.5)]',
  emerald: 'hover:border-emerald-400/25 hover:shadow-[0_0_40px_rgba(16,185,129,0.1),0_8px_32px_rgba(0,0,0,0.5)]',
};

export default function GlassCard({
  children,
  className = '',
  glow = 'cyan',
  animate = true,
  padding = 'p-6',
}) {
  const base = `
    glass rounded-2xl ${padding}
    shadow-card
    transition-all duration-500 ease-out
    ${glowMap[glow] ?? glowMap.cyan}
    ${className}
  `;

  if (!animate) return <div className={base}>{children}</div>;

  return (
    <motion.div
      className={base}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
