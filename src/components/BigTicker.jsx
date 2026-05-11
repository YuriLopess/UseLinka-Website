import React from 'react'
import { useBreakpoint } from './Atoms'

const words = ['CHATBOTS', 'SITES', 'REBRANDING', 'AUTOMAÇÃO', 'CRM', 'LANDING', 'IA', 'OPERAÇÃO']

export default function BigTicker() {
  const bp = useBreakpoint()
  const isMobile = bp === 'mobile'
  return (
    <section aria-hidden style={{ padding: isMobile ? '36px 0' : '60px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
      <div className="ticker">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="light" style={{ fontSize: 'clamp(44px, 9vw, 130px)', letterSpacing: '-0.045em', lineHeight: 1, whiteSpace: 'nowrap', color: i % 4 === 0 ? 'var(--ink)' : 'var(--ink-3)', display: 'inline-flex', alignItems: 'center', gap: isMobile ? 36 : 60 }}>
            {w}
            <span style={{ width: isMobile ? 10 : 14, height: isMobile ? 10 : 14, borderRadius: 999, background: 'var(--accent)', display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </section>
  )
}
