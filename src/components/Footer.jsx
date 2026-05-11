import React from 'react'
import { Container, Wordmark } from './Atoms'

export default function Footer() {
  return (
    <footer style={{ padding: '80px 0 32px', borderTop: '1px solid var(--line)', background: 'var(--bg-2)' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, paddingBottom: 70, borderBottom: '1px solid var(--line)' }}>
          <div>
            <Wordmark accent="var(--accent)" />
            <p style={{ color: 'var(--ink-2)', lineHeight: 1.5, marginTop: 18, maxWidth: 300, fontSize: 14 }}>
              Tecnologia, design e processos para empresas que querem crescer sem virar refém da própria operação.
            </p>
            <div className="mono" style={{ marginTop: 24, fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase' }}>
              ↳ São Paulo / Remoto · BR
            </div>
          </div>
          {[
            { h: 'Serviços', l: ['Chatbots IA', 'Sites & landings', 'Rebranding', 'Automações', 'CRM & dados'] },
            { h: 'Empresa', l: ['Sobre', 'Manifesto', 'Cases', 'Blog', 'Carreiras'] },
            { h: 'Contato', l: ['ola@linka.com.br', '+55 11 99999-0000', 'LinkedIn', 'Instagram', 'Newsletter'] },
          ].map(col => (
            <div key={col.h}>
              <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 18 }}>{col.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.l.map(li => <li key={li}><a href="#" className="link-line" style={{ color: 'var(--ink)', fontSize: 14 }}>{li}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="light" style={{ fontSize: 'clamp(120px, 22vw, 320px)', lineHeight: 0.85, letterSpacing: '-0.06em', margin: '40px 0 24px', color: 'var(--ink)', textAlign: 'center' }}>
          linka<span style={{ color: 'var(--accent)' }}>.</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24, flexWrap: 'wrap', gap: 14 }}>
          <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase' }}>© 2026 Linka · CNPJ 00.000.000/0001-00</span>
          <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase' }}>Feito com cuidado em São Paulo</span>
        </div>
      </Container>
    </footer>
  )
}
