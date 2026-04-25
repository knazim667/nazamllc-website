import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ui/ScrollReveal';
import GlassCard from '../components/ui/GlassCard';
import SectionLabel from '../components/ui/SectionLabel';
import Button from '../components/ui/Button';
import SEOMeta from '../components/ui/SEOMeta';

const PAGE_TRANSITION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};

const services = [
  'AI Automations',
  'Amazon & Walmart Marketplace',
  'App Development',
  'Financial Intelligence',
  'Something Else',
];

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email (Best Method)',
    value: 'admin@nazamllc.com',
    sub: 'Response within 1 business day',
    href: 'mailto:admin@nazamllc.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: 'Wyoming, USA',
    sub: 'Remote-first — we work nationwide',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/muhammad-nazam',
    sub: 'Connect directly',
    href: 'https://linkedin.com/in/muhammad-nazam',
  },
];

const inputClass = `
  w-full px-4 py-3 rounded-xl
  bg-white/[0.04] border border-white/[0.1]
  text-slate-100 placeholder-slate-600
  text-sm font-sans
  transition-all duration-200
`;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://formsubmit.co/ajax/admin@nazamllc.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _replyto: form.email,
          subject: `New Inquiry: ${form.service || 'General'} — ${form.name}`,
          message: `Company: ${form.company || 'N/A'}\nService: ${form.service || 'Not specified'}\n\n${form.message}`,
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.div {...PAGE_TRANSITION}>
      <SEOMeta
        title="Contact Us"
        description="Reach out to Nazam LLC — book a free strategy call, send a message, or ask about AI automation, marketplace management, app development, or financial intelligence."
        path="/contact"
      />
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-space-black" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="orb orb-cyan absolute w-[500px] h-[500px] -top-20 -right-20 opacity-25" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <SectionLabel>Get In Touch</SectionLabel>
          </motion.div>
          <motion.h1
            className="font-display font-bold text-white text-display mt-6 mb-5 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Let's Talk About What's<br />
            <span className="gradient-text-cyan">Holding Your Business Back</span>
          </motion.h1>
          <motion.p
            className="max-w-xl text-slate-400 text-lg font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Whether you need a free account audit, want to scope an app idea, or just have a question — we respond within one business day. No auto-responders. No offshore call centers. You talk to us directly.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: details + trust */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <GlassCard glow="cyan" className="mb-6">
                  <p className="text-slate-300 text-sm font-sans leading-relaxed mb-4">
                    Nazam LLC is a Wyoming-registered technology consultancy. We work with a limited number of clients at any given time — by design. When you reach out, you're talking to the person who will actually do the work.
                  </p>
                  <p className="text-slate-400 text-sm font-sans leading-relaxed">
                    We run a tight, honest shop. If we can help you, we'll tell you exactly how. If we can't, we'll tell you that too — and we'll point you somewhere that can.
                  </p>
                </GlassCard>
              </ScrollReveal>

              {contactDetails.map((cd, i) => (
                <ScrollReveal key={cd.label} delay={i * 0.08}>
                  <GlassCard glow="cyan" padding="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                        {cd.icon}
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs font-sans uppercase tracking-widest mb-0.5">{cd.label}</p>
                        {cd.href ? (
                          <a href={cd.href} target="_blank" rel="noopener noreferrer"
                            className="text-white font-semibold font-sans text-sm hover:text-cyan-400 transition-colors duration-200">
                            {cd.value}
                          </a>
                        ) : (
                          <p className="text-white font-semibold font-sans text-sm">{cd.value}</p>
                        )}
                        <p className="text-slate-500 text-xs font-sans mt-0.5">{cd.sub}</p>
                      </div>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}

              <ScrollReveal delay={0.3}>
                <GlassCard glow="amber" padding="p-5">
                  <p className="text-amber-400 font-semibold font-sans text-sm mb-2">Prefer to jump straight to a call?</p>
                  <p className="text-slate-400 text-sm font-sans mb-4 leading-relaxed">
                    Book a free 30-minute strategy session. Come with your biggest business problem. We'll come with honest thinking.
                  </p>
                  <Button href="https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad" variant="amber" size="sm">
                    Book a Free Strategy Call →
                  </Button>
                </GlassCard>
              </ScrollReveal>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <GlassCard glow="cyan">
                  <h2 className="font-display font-bold text-white text-2xl mb-8">Send Us a Message</h2>

                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-display font-bold text-white text-xl mb-2">Message Received.</h3>
                      <p className="text-slate-400 font-sans">We'll be in touch within one business day.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-slate-400 text-xs font-sans uppercase tracking-widest mb-2">
                            Your Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text" name="name" required
                            value={form.name} onChange={handleChange}
                            placeholder="Muhammad Nazam"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-slate-400 text-xs font-sans uppercase tracking-widest mb-2">
                            Your Email <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email" name="email" required
                            value={form.email} onChange={handleChange}
                            placeholder="you@company.com"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs font-sans uppercase tracking-widest mb-2">
                          Your Business / Company
                          <span className="text-slate-600 normal-case tracking-normal ml-1">(optional)</span>
                        </label>
                        <input
                          type="text" name="company"
                          value={form.company} onChange={handleChange}
                          placeholder="Acme Corp."
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs font-sans uppercase tracking-widest mb-2">
                          How Can We Help?
                        </label>
                        <select
                          name="service"
                          value={form.service} onChange={handleChange}
                          className={`${inputClass} cursor-pointer`}
                          style={{ appearance: 'none' }}
                        >
                          <option value="" className="bg-space-dark">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-space-dark">{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-400 text-xs font-sans uppercase tracking-widest mb-2">
                          Tell Us About Your Project or Question <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message" required rows={5}
                          value={form.message} onChange={handleChange}
                          placeholder="Describe your challenge, goal, or question..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {status === 'error' && (
                        <p className="text-red-400 text-sm font-sans">
                          Something went wrong. Please try emailing admin@nazamllc.com directly.
                        </p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`
                          w-full py-4 rounded-xl text-sm font-semibold font-sans
                          transition-all duration-300
                          ${status === 'loading'
                            ? 'bg-cyan-400/50 text-space-black cursor-not-allowed'
                            : 'bg-cyan-400 text-space-black hover:bg-cyan-300 hover:shadow-glow-cyan cursor-pointer'
                          }
                        `}
                        whileTap={status !== 'loading' ? { scale: 0.99 } : {}}
                      >
                        {status === 'loading' ? 'Sending...' : 'Send Message →'}
                      </motion.button>
                    </form>
                  )}
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
