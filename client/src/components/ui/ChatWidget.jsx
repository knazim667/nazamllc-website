import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ZOOM_URL = 'https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad';

const SYSTEM_PROMPT = 'You are a friendly assistant for Nazam LLC. Help visitors learn about our services: AI automation and n8n workflows, Amazon and Walmart full account management including suspended account recovery and PPC, custom app and web development, and stock market financial education. If someone is interested or ready to talk, encourage them to book a meeting at https://scheduler.zoom.us/muhammad-nazam-1upfay/30-mins-with-muhammad or email admin@nazamllc.com. Keep answers short, helpful, and professional.';

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-cyan-400/60"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

function Message({ msg }) {
  const isBot = msg.role === 'assistant';
  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-3`}>
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm font-sans leading-relaxed ${
          isBot
            ? 'bg-white/[0.06] text-slate-200 rounded-tl-sm'
            : 'bg-cyan-400 text-[#06060e] font-medium rounded-tr-sm'
        }`}
      >
        {msg.content}
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m the Nazam LLC assistant. Ask me about our services, or I can help you book a meeting. 👋' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, messages]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://nazamllc.com',
          'X-Title': 'Nazam LLC',
        },
        body: JSON.stringify({
          model: 'minimax/minimax-m2.5:free',
          messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...next],
          max_tokens: 512,
        }),
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || 'Sorry, something went wrong. Please email admin@nazamllc.com.';
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection error. Please email admin@nazamllc.com or book a call directly.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9998] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="w-[340px] sm:w-[380px] flex flex-col rounded-2xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.07)]"
            style={{
              background: 'rgba(8, 8, 20, 0.92)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.07]"
              style={{ background: 'rgba(34,211,238,0.05)' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-400/15 border border-cyan-400/30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold font-sans text-sm leading-none">Nazam LLC</p>
                  <p className="text-emerald-400 text-[10px] font-sans mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-200 hover:bg-white/10 transition-all"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2 space-y-1" style={{ maxHeight: '320px', minHeight: '220px' }}>
              {messages.map((msg, i) => (
                <Message key={i} msg={msg} />
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.06] rounded-2xl rounded-tl-sm">
                    <TypingIndicator />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick action */}
            <div className="px-4 pb-2">
              <a
                href={ZOOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-full py-2 px-3 rounded-xl border border-cyan-400/20 bg-cyan-400/5 hover:bg-cyan-400/10 hover:border-cyan-400/40 transition-all duration-200 group"
              >
                <svg className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-cyan-400 text-xs font-semibold font-sans">Book a Free 30-min Call →</span>
              </a>
            </div>

            {/* Input */}
            <div className="px-3 pb-3 pt-1">
              <div className="flex items-end gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2 focus-within:border-cyan-400/40 transition-colors">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about our services..."
                  rows={1}
                  className="flex-1 bg-transparent text-slate-100 text-sm font-sans placeholder-slate-600 resize-none outline-none leading-relaxed"
                  style={{ maxHeight: '80px' }}
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="w-8 h-8 rounded-lg bg-cyan-400 flex items-center justify-center flex-shrink-0 hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  aria-label="Send"
                >
                  <svg className="w-4 h-4 text-[#06060e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-center text-[10px] text-slate-600 font-sans mt-1.5">Powered by Nazam LLC AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bubble trigger */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(34,211,238,0.35)] hover:shadow-[0_6px_32px_rgba(34,211,238,0.5)] transition-shadow duration-300"
        style={{
          background: 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
        }}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.06 }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6 text-[#06060e]"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6 text-[#06060e]"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
