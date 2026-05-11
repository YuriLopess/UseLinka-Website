import React from 'react'
import { Container, CTA, Reveal } from './Atoms'

export default function FinalCTA() {
  return (
    <section id="cta" style={{ padding: '140px 0 120px', position: 'relative' }}>
      <Container>
        <Reveal>
          <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 30, display: 'flex', gap: 30 }}>
            <span style={{ color: 'var(--ink)' }}>/05</span> <span>Próximo passo</span>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'end' }}>
          <Reveal>
            <h2 style={{ fontSize: 'clamp(48px, 7.2vw, 116px)', lineHeight: 0.92, letterSpacing: '-0.045em', fontWeight: 500, margin: 0, textWrap: 'balance' }}>
              Vamos conectar<br />
              <span className="light">sua empresa ao</span><br />
              <span className="light" style={{ color: 'var(--ink-2)' }}>próximo nível.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ink-2)', marginTop: 0, marginBottom: 36 }}>
                30 minutos. A gente mapeia onde sua operação está perdendo tempo e dinheiro — e o que dá pra automatizar já no próximo ciclo.
              </p>
              <CTA size="lg" hoverAccent>Agendar diagnóstico gratuito</CTA>
              <div className="mono" style={{ marginTop: 18, fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase' }}>
                ↳ sem fidelidade  ·  resposta em 24h
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={180}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: 100, borderTop: '1px solid var(--line)' }}>
            {[
              { k: 'Clareza', v: 'Sua operação inteira mapeada antes da gente propor qualquer coisa.' },
              { k: 'Confiança', v: 'Squad dedicado, contratos transparentes, sem fidelidade longa.' },
              { k: 'Progresso', v: 'Números melhorando já no primeiro mês de execução.' },
            ].map((c, i) => (
              <div key={i} style={{ padding: '34px 28px 4px', borderRight: i < 2 ? '1px solid var(--line)' : 'none' }}>
                <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 16 }}>/0{i + 1}</div>
                <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 14 }}>{c.k}</div>
                <div style={{ color: 'var(--ink-2)', lineHeight: 1.5, maxWidth: 280, fontSize: 15 }}>{c.v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
