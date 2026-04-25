import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  size = 'md',
  type = 'button',
}) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variants = {
    primary: `
      bg-cyan-400 text-space-black font-semibold
      hover:bg-cyan-300 hover:shadow-glow-cyan
      transition-all duration-300
    `,
    amber: `
      bg-amber-500 text-space-black font-semibold
      hover:bg-amber-400 hover:shadow-glow-amber
      transition-all duration-300
    `,
    outline: `
      border border-white/20 text-slate-200 font-medium
      hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-400/5
      transition-all duration-300
    `,
    ghost: `
      text-slate-400 font-medium
      hover:text-cyan-400
      transition-all duration-200
    `,
  };

  const cls = `
    inline-flex items-center gap-2 rounded-xl
    font-sans tracking-wide
    ${sizes[size]}
    ${variants[variant]}
    ${className}
  `;

  const inner = (
    <motion.span
      className={cls}
      whileTap={{ scale: 0.97 }}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
    >
      {children}
    </motion.span>
  );

  if (to) return <Link to={to} className="inline-flex">{inner}</Link>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex">{inner}</a>;
  return <button type={type} onClick={onClick} className="inline-flex">{inner}</button>;
}
