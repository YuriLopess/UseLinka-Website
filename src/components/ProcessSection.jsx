import React, { useState } from 'react'
import { Container, Reveal } from './Atoms'

const steps = [
  { n: '01', t: 'Diagnóstico', d: '30 min de conversa pra entender operação, dores e onde tem dinheiro parado.', time: '1 dia' },
  { n: '02', t: 'Proposta', d: 'Mapa visual do que vamos fazer, com prazos, entregáveis e métricas de sucesso.', time: '3 dias' },
  { n: '03', t: 'Sprint', d: 'Squad dedicado executa em ciclos curtos, com previews semanais e ajuste em tempo real.', time: '4-6 sem' },
  { n: '04', t: 'Operação', d: 'Entregamos, treinamos sua equipe e seguimos como squad de suporte enquanto fizer sentido.', time: '∞' },
]

export default function ProcessSection() {
  const [hovered, setHovered] = useState(null)
  return (
    <section style={{ padding: '80px 0 120px' }}>
      <Container>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
            <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--ink-3)', lineHeight: 1.6 }}>
              <div style={{ color: 'var(--ink)' }}>/03</div>
              <div>Processo</div>
            </div>
            <h2 style={{ fontSize: 'clamp(38px, 5vw, 68px)', lineHeight: 1, letterSpacing: '-0.035em', fontWeight: 500, margin: 0, maxWidth: 880 }}>
              Do diagnóstico ao painel<br />
              <span className="light">em até 6 semanas.</span>
            </h2>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--line)' }}>
          {steps.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ padding: '32px 28px 0', height: '100%', borderRight: i < 3 ? '1px solid var(--line)' : 'none', display: 'flex', flexDirection: 'column', gap: 0, minHeight: 280, transition: 'background .25s', background: hovered === i ? 'var(--bg-2)' : 'transparent', cursor: 'default' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 36 }}>
                  <span className="light" style={{ fontSize: 88, letterSpacing: '-0.06em', lineHeight: 0.8, color: hovered === i ? 'var(--accent)' : 'var(--ink)', transition: 'color .25s' }}>{s.n}</span>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase' }}>{s.time}</span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 10 }}>{s.t}</div>
                <div style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.5, maxWidth: 240 }}>{s.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
