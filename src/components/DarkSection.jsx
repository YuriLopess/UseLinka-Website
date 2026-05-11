import React, { useState, useEffect, useRef } from 'react'
import { Container, CTA, ArrowRight, Reveal } from './Atoms'

function ChatbotDemo() {
  const script = [
    { who: 'user', text: 'Oi, vocês fazem orçamento pra clínicas?' },
    { who: 'bot', text: 'Sim! Atendemos clínicas, com integração ao seu agendamento. Posso te mostrar um caso parecido?' },
    { who: 'user', text: 'Pode sim' },
    { who: 'bot', text: 'Top. Em qual dia da semana cai melhor uma call de 20 min?' },
  ]
  const [shown, setShown] = useState(0)
  const [typing, setTyping] = useState('')
  useEffect(() => {
    let t1, t2
    if (shown >= script.length) {
      t1 = setTimeout(() => { setShown(0); setTyping('') }, 4000)
      return () => clearTimeout(t1)
    }
    const target = script[shown].text
    let i = 0
    t1 = setInterval(() => {
      i++; setTyping(target.slice(0, i))
      if (i >= target.length) {
        clearInterval(t1)
        t2 = setTimeout(() => { setShown(s => s + 1); setTyping('') }, 700)
      }
    }, 28)
    return () => { clearInterval(t1); clearTimeout(t2) }
  }, [shown])

  return (
    <div>
      <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 20, display: 'flex', justifyContent: 'space-between' }}>
        <span>↳ canal/whatsapp · cliente novo</span><span>ao vivo</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 340 }}>
        {script.slice(0, shown).map((m, i) => <Bubble key={i} who={m.who}>{m.text}</Bubble>)}
        {shown < script.length && <Bubble who={script[shown].who}>{typing}<span className="caret" /></Bubble>}
      </div>
      <div style={{ marginTop: 24, padding: '12px 16px', borderRadius: 999, background: 'rgba(255,255,255,.05)', display: 'flex', alignItems: 'center', gap: 12, border: '1px solid rgba(255,255,255,.08)' }}>
        <span style={{ color: 'rgba(255,255,255,.4)', fontSize: 14, flex: 1 }}>Digite uma mensagem…</span>
        <div style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-ink)' }}>
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  )
}

function Bubble({ who, children }) {
  const isBot = who === 'bot'
  return (
    <div style={{ display: 'flex', justifyContent: isBot ? 'flex-start' : 'flex-end' }}>
      <div style={{ background: isBot ? 'rgba(255,255,255,.07)' : 'var(--accent)', color: isBot ? '#fff' : 'var(--accent-ink)', padding: '12px 16px', borderRadius: 18, borderBottomLeftRadius: isBot ? 6 : 18, borderBottomRightRadius: isBot ? 18 : 6, maxWidth: '78%', fontSize: 15, lineHeight: 1.4 }}>{children}</div>
    </div>
  )
}

function SitePreview() {
  return (
    <div>
      <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 20 }}>↳ preview/landing · publicado em 5 dias</div>
      <div style={{ background: '#0a0a08', borderRadius: 14, padding: 20, minHeight: 340, border: '1px solid rgba(255,255,255,.08)', backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,.025) 0 1px, transparent 1px 12px)' }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 18 }}>
          {[0, 1, 2].map(i => <div key={i} style={{ width: 9, height: 9, borderRadius: 999, background: 'rgba(255,255,255,.15)' }} />)}
          <div style={{ flex: 1, height: 9, borderRadius: 6, background: 'rgba(255,255,255,.06)', marginLeft: 10 }} />
        </div>
        <div style={{ fontSize: 34, letterSpacing: '-0.025em', fontWeight: 500, lineHeight: 1, maxWidth: 380 }}>
          Cuidamos<br />do seu sorriso<br /><span className="light" style={{ color: 'var(--accent)' }}>desde 1998.</span>
        </div>
        <div style={{ marginTop: 18, fontSize: 14, color: 'rgba(255,255,255,.5)', maxWidth: 360 }}>Clínica odontológica · São Paulo · agende online em 30s.</div>
        <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
          <div style={{ padding: '10px 16px', borderRadius: 999, background: 'var(--accent)', color: 'var(--accent-ink)', fontSize: 13, fontWeight: 500 }}>Agendar consulta</div>
          <div style={{ padding: '10px 16px', borderRadius: 999, border: '1px solid rgba(255,255,255,.15)', fontSize: 13 }}>Conhecer a clínica</div>
        </div>
        <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {['/01 estética', '/02 implantes', '/03 ortodontia'].map(t => <div key={t} style={{ padding: 14, border: '1px solid rgba(255,255,255,.08)', borderRadius: 10, fontSize: 13, color: 'rgba(255,255,255,.7)' }}>{t}</div>)}
        </div>
      </div>
      <div className="mono" style={{ display: 'flex', gap: 20, marginTop: 18, color: 'rgba(255,255,255,.4)', fontSize: 11, textTransform: 'uppercase' }}>
        <span>Lighthouse 99</span><span>1.4s carregamento</span><span>SEO técnico</span>
      </div>
    </div>
  )
}

function RebrandPreview() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 2), 2400)
    return () => clearInterval(t)
  }, [])
  return (
    <div>
      <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 20, display: 'flex', justifyContent: 'space-between' }}>
        <span>↳ antes · depois</span><span>caso: campo seguros</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div style={{ aspectRatio: '1/1.1', borderRadius: 14, background: '#1f1d18', border: '1px solid rgba(255,255,255,.06)', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div className="mono" style={{ fontSize: 10, textTransform: 'uppercase', color: 'rgba(255,255,255,.4)' }}>ANTES — 2019</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '10px 18px', borderRadius: 6, background: '#3a3a30', color: '#bdbb96', fontWeight: 700, fontSize: 22, letterSpacing: '0.05em' }}>CAMPO</div>
            <div style={{ marginTop: 10, color: 'rgba(255,255,255,.4)', fontSize: 11 }}>seguros e consórcios ltda</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#3a3a30', '#5e5d3f', '#a4a07a'].map(c => <div key={c} style={{ flex: 1, height: 6, background: c, borderRadius: 2 }} />)}
          </div>
        </div>
        <div style={{ aspectRatio: '1/1.1', borderRadius: 14, background: '#fff', color: '#0a0a08', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transform: step === 1 ? 'scale(1.02)' : 'scale(1)', transition: 'transform .8s ease' }}>
          <div className="mono" style={{ fontSize: 10, textTransform: 'uppercase', color: '#8a8a82' }}>DEPOIS — 2025</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#0a0a08" strokeWidth="2" /><path d="M12 26 L20 14 L28 26" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-0.03em' }}>Campo</span>
            </div>
            <div className="mono" style={{ marginTop: 10, fontSize: 11, color: '#5b5852', textTransform: 'uppercase', letterSpacing: '0.1em' }}>proteção que segue você</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['#0a0a08', 'oklch(0.78 0.18 130)', '#efece6', '#5b5852'].map(c => <div key={c} style={{ flex: 1, height: 6, background: c, borderRadius: 2 }} />)}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 18, fontSize: 14, color: 'rgba(255,255,255,.6)', lineHeight: 1.5 }}>
        Reposicionamento + nova identidade + sistema de marca em 6 semanas. Reconhecimento espontâneo subiu 3x em 4 meses.
      </div>
    </div>
  )
}

function AutomationPreview() {
  const nodes = [
    { x: 8, y: 30, label: 'WhatsApp', color: 'var(--accent)' },
    { x: 40, y: 10, label: 'Linka IA', color: '#fff' },
    { x: 40, y: 55, label: 'CRM', color: '#fff' },
    { x: 72, y: 30, label: 'Pipefy', color: '#fff' },
    { x: 72, y: 75, label: 'Planilha', color: '#fff' },
  ]
  return (
    <div>
      <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 20 }}>↳ fluxo/lead novo · 18 etapas automatizadas</div>
      <div style={{ position: 'relative', height: 340, background: '#0a0a08', borderRadius: 14, border: '1px solid rgba(255,255,255,.08)', backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 1px)', backgroundSize: '18px 18px' }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M11 32 L37 13" stroke="rgba(255,255,255,.25)" strokeWidth="0.3" fill="none" />
          <path d="M11 32 L37 55" stroke="rgba(255,255,255,.25)" strokeWidth="0.3" fill="none" />
          <path d="M43 13 L70 30" stroke="rgba(255,255,255,.25)" strokeWidth="0.3" fill="none" />
          <path d="M43 55 L70 30" stroke="rgba(255,255,255,.25)" strokeWidth="0.3" fill="none" />
          <path d="M43 55 L70 75" stroke="rgba(255,255,255,.25)" strokeWidth="0.3" fill="none" />
        </svg>
        {nodes.map((n, i) => (
          <div key={i} style={{ position: 'absolute', left: `${n.x}%`, top: `${n.y}%`, transform: 'translate(-50%,-50%)', padding: '10px 14px', borderRadius: 10, background: n.color === 'var(--accent)' ? 'var(--accent)' : 'rgba(255,255,255,.07)', color: n.color === 'var(--accent)' ? 'var(--accent-ink)' : '#fff', fontSize: 13, fontWeight: 500, border: '1px solid ' + (n.color === 'var(--accent)' ? 'transparent' : 'rgba(255,255,255,.1)'), whiteSpace: 'nowrap' }}>{n.label}</div>
        ))}
      </div>
      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, fontSize: 13, color: 'rgba(255,255,255,.7)' }}>
        {[{ k: 'tempo poupado', v: '~38h/semana' }, { k: 'erros operacionais', v: '↓ 92%' }, { k: 'integrações', v: '18 ferramentas' }].map(s => (
          <div key={s.k} style={{ padding: 14, border: '1px solid rgba(255,255,255,.08)', borderRadius: 10 }}>
            <div className="mono" style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', marginBottom: 6 }}>{s.k}</div>
            {s.v}
          </div>
        ))}
      </div>
    </div>
  )
}

function CountUp({ target, prefix = '', suffix = '', decimals = 0 }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const ran = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !ran.current) {
        ran.current = true
        const duration = 1400
        const start = performance.now()
        const tick = now => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(eased * target)
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>
}

export default function DarkSection() {
  const tabs = [
    { key: 'chatbot', title: 'Chatbots IA', body: 'Conectados ao WhatsApp, site e Instagram. Respondem, qualificam e empurram lead pro CRM em segundos.', preview: <ChatbotDemo /> },
    { key: 'sites', title: 'Sites & landings', body: 'Sites que carregam em menos de 1.5s, com SEO técnico, painel editável e identidade alinhada ao seu posicionamento.', preview: <SitePreview /> },
    { key: 'rebranding', title: 'Rebranding', body: 'Reposicionamento estratégico, identidade visual e sistema de marca aplicável em digital, físico e produto.', preview: <RebrandPreview /> },
    { key: 'automacao', title: 'Automação', body: 'CRM, financeiro, atendimento e planilhas falando entre si. Sua equipe foca em vender — não em copiar e colar.', preview: <AutomationPreview /> },
  ]
  const [active, setActive] = useState('chatbot')
  const current = tabs.find(t => t.key === active)

  return (
    <section style={{ background: 'var(--dark)', color: '#fff', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <Container>
        <Reveal>
          <div className="mono" style={{ fontSize: 12, textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginBottom: 30 }}>03 — Plataforma</div>
        </Reveal>
        <Reveal>
          <h2 style={{ fontSize: 'clamp(40px, 5.4vw, 72px)', lineHeight: 0.98, letterSpacing: '-0.03em', fontWeight: 500, margin: '0 0 60px', maxWidth: 900 }}>
            Tudo o que sua empresa<br />precisa, <span className="light" style={{ color: 'var(--accent)' }}>num só lugar.</span>
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 60, alignItems: 'start' }}>
          <Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {tabs.map(t => (
                <button key={t.key} onClick={() => setActive(t.key)} style={{ textAlign: 'left', background: active === t.key ? 'var(--dark-3)' : 'transparent', border: '1px solid ' + (active === t.key ? 'rgba(255,255,255,.12)' : 'transparent'), color: '#fff', padding: '20px 22px', borderRadius: 16, cursor: 'pointer', transition: 'background .3s ease' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: active === t.key ? 10 : 0 }}>
                    <span style={{ fontSize: 17, fontWeight: 500 }}>{t.title}</span>
                    <span className="mono" style={{ fontSize: 11, color: 'rgba(255,255,255,.4)' }}>0{tabs.findIndex(x => x.key === t.key) + 1}</span>
                  </div>
                  {active === t.key && <div style={{ color: 'rgba(255,255,255,.6)', fontSize: 14, lineHeight: 1.5 }}>{t.body}</div>}
                </button>
              ))}
              <div style={{ marginTop: 30, display: 'flex', gap: 14 }}>
                <CTA kind="accent" size="md">Solicitar demo</CTA>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div style={{ background: 'var(--dark-2)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 24, padding: 28, minHeight: 480, position: 'relative' }}>
              {current.preview}
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div style={{ marginTop: 80, padding: '40px 0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid rgba(255,255,255,.1)', borderBottom: '1px solid rgba(255,255,255,.1)' }}>
            {[
              { target: 50, prefix: '+', suffix: '',   decimals: 0, l: 'empresas atendidas' },
              { target: 7,  prefix: '',  suffix: 'd',  decimals: 0, l: 'setup médio' },
              { target: 1.4,prefix: '', suffix: 's',  decimals: 1, l: 'tempo médio de site' },
              { target: 24, prefix: '', suffix: '/7',  decimals: 0, l: 'atendimento via IA' },
            ].map((s, i) => (
              <div key={i} style={{ padding: '0 28px', borderRight: i < 3 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
                <div style={{ fontSize: 'clamp(36px,3.4vw,52px)', letterSpacing: '-0.03em', fontWeight: 500, lineHeight: 1 }}>
                  <CountUp target={s.target} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'rgba(255,255,255,.45)', marginTop: 10 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
