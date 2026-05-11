import React, { useState } from 'react'
import { Container, ArrowRight, Reveal } from './Atoms'

const items = [
  { tag: '01', title: 'Chatbots inteligentes', desc: 'Atendimento 24/7 que qualifica leads, responde dúvidas e marca reuniões com IA treinada na sua operação.', stats: [{ k: 'Resposta', v: '<3s' }, { k: 'Canais', v: 'WhatsApp + site' }] },
  { tag: '02', title: 'Sites & landing pages', desc: 'Sites institucionais e landings de alta conversão, com SEO técnico, performance e identidade alinhada.', stats: [{ k: 'Lighthouse', v: '99/100' }, { k: 'Entrega', v: '7-14 dias' }] },
  { tag: '03', title: 'Rebranding completo', desc: 'Identidades visuais que comunicam maturidade — logo, sistema, voz e aplicações com aplicação consistente.', stats: [{ k: 'Sprint', v: '4-6 semanas' }, { k: 'Entregáveis', v: '30+ peças' }] },
  { tag: '04', title: 'Automação & CRM', desc: 'Fluxos integrados entre WhatsApp, e-mail, CRM e planilhas — sem ninguém arrastando dado entre abas.', stats: [{ k: 'Integrações', v: '+18' }, { k: 'Economia', v: '~38h/sem' }] },
]

function ServiceCard({ tag, title, desc, stats }) {
  const [hover, setHover] = useState(false)
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ background: 'var(--card)', borderRadius: 'var(--radius)', padding: '34px 34px 30px', minHeight: 300, border: '1px solid var(--line)', position: 'relative', overflow: 'hidden', transition: 'transform .5s cubic-bezier(.2,.7,.2,1), box-shadow .5s ease', transform: hover ? 'translateY(-4px)' : '', boxShadow: hover ? '0 22px 50px -22px rgba(0,0,0,.18)' : 'none', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>/{tag}</div>
        <div className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase' }}>serviço</div>
      </div>
      <div style={{ marginTop: 60, flex: 1 }}>
        <h3 style={{ fontSize: 32, letterSpacing: '-0.025em', margin: '0 0 14px', fontWeight: 500, lineHeight: 1.05 }}>{title}</h3>
        <p style={{ margin: 0, color: 'var(--ink-2)', lineHeight: 1.5, fontSize: 15.5, maxWidth: 460 }}>{desc}</p>
      </div>
      <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px dashed var(--line)', display: 'flex', gap: 30, alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 28 }}>
          {stats.map(s => (
            <div key={s.k}>
              <div className="mono" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 4 }}>{s.k}</div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>{s.v}</div>
            </div>
          ))}
        </div>
        <div style={{ width: 42, height: 42, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform .5s ease, background .3s ease', transform: hover ? 'rotate(-45deg) scale(1.05)' : '', background: hover ? 'var(--accent)' : 'var(--ink)', color: hover ? 'var(--accent-ink)' : '#fff' }}>
          <ArrowRight size={16} />
        </div>
      </div>
    </article>
  )
}

export default function ServicesGrid() {
  return (
    <section id="servicos" style={{ padding: '40px 0 140px' }}>
      <Container>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
            <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--ink-3)', lineHeight: 1.6 }}>
              <div style={{ color: 'var(--ink)' }}>/02</div>
              <div>Serviços</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 30, flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: 'clamp(40px, 5.4vw, 76px)', lineHeight: 1, letterSpacing: '-0.035em', fontWeight: 500, margin: 0, maxWidth: 780 }}>
                Quatro frentes,<br /><span className="light">uma operação só.</span>
              </h2>
              <a href="#" className="mono link-line" style={{ fontSize: 12, textTransform: 'uppercase', color: 'var(--ink-2)', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
                Ver todos <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 70}>
              <ServiceCard {...it} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
