import React from 'react'

const words = ['CHATBOTS', 'SITES', 'REBRANDING', 'AUTOMAÇÃO', 'CRM', 'LANDING', 'IA', 'OPERAÇÃO']

export default function BigTicker() {
  return (
    <section aria-hidden style={{ padding: '60px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
      <div className="ticker">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="light" style={{ fontSize: 'clamp(64px, 9vw, 130px)', letterSpacing: '-0.045em', lineHeight: 1, whiteSpace: 'nowrap', color: i % 4 === 0 ? 'var(--ink)' : 'var(--ink-3)', display: 'inline-flex', alignItems: 'center', gap: 60 }}>
            {w}
            <span style={{ width: 14, height: 14, borderRadius: 999, background: 'var(--accent)', display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </section>
  )
}
