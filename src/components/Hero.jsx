import React from 'react'
import { Container, CTA, ArrowRight, Reveal, useBreakpoint } from './Atoms'
import { LinkaMark } from './Atoms'

export default function Hero() {
  const bp = useBreakpoint()
  const isMobile = bp === 'mobile'
  const step = i => ({ className: 'hero-in', style: { animationDelay: `${i * 120}ms` } })
  return (
    <section style={{ padding: isMobile ? '96px 0 40px' : '120px 0 60px', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.7 }}>
        <div style={{ position: 'absolute', left: '-20%', top: -200, width: '42rem', height: '80rem', transform: 'rotate(-35deg)', borderRadius: '50%', background: 'radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--ink) 6%, transparent) 0, color-mix(in oklab, var(--ink) 2%, transparent) 50%, transparent 80%)' }} />
        <div style={{ position: 'absolute', right: '-15%', top: 200, width: '34rem', height: '60rem', transform: 'rotate(30deg)', borderRadius: '50%', background: 'radial-gradient(50% 50% at 50% 50%, color-mix(in oklab, var(--accent) 12%, transparent) 0, transparent 70%)' }} />
      </div>

      <Container style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <h1
            {...step(0)}
            style={{
              ...step(0).style,
              margin: '0 auto',
              maxWidth: 1000,
              fontSize: 'clamp(36px, 7vw, 100px)',
              lineHeight: 0.98,
              letterSpacing: '-0.04em',
              fontWeight: 500,
              textWrap: 'balance',
            }}
          >
            Soluções modernas para<br />
            <span className="light" style={{ color: 'var(--ink-2)' }}>impulsionar</span>{' '}
            <span className="light">sua empresa.</span>
          </h1>

          <p
            {...step(1)}
            style={{
              ...step(1).style,
              margin: isMobile ? '24px auto 0' : '32px auto 0',
              maxWidth: 620,
              padding: isMobile ? '0 4px' : 0,
              fontSize: 'clamp(15px,1.3vw,20px)',
              lineHeight: 1.5,
              color: 'var(--ink-2)',
              textWrap: 'balance',
            }}
          >
            Chatbots, sites, rebranding e automações sob medida —
            para empresas B2B que querem crescer sem virar refém da própria operação.
          </p>

          <div
            {...step(2)}
            style={{
              ...step(2).style,
              marginTop: isMobile ? 32 : 44,
              display: 'flex',
              gap: 10,
              justifyContent: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <div style={{ padding: 2, borderRadius: 14, background: 'color-mix(in oklab, var(--ink) 8%, transparent)', border: '1px solid var(--line)' }}>
              <CTA size="md" kind="dark" hoverAccent style={{ borderRadius: 12 }}>Começar agora</CTA>
            </div>
            <button
              style={{ background: 'transparent', border: 'none', padding: isMobile ? '12px 18px' : '14px 22px', borderRadius: 12, color: 'var(--ink)', fontSize: isMobile ? 15 : 16, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'inherit' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              Solicitar demo
            </button>
          </div>
        </div>

        <div {...step(3)} style={{ ...step(3).style, marginTop: isMobile ? 56 : 80, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, transparent 35%, var(--bg) 100%)', zIndex: 5, pointerEvents: 'none' }} />
          <IPhoneShowcase bp={bp} />
        </div>
      </Container>
    </section>
  )
}

function IPhoneShowcase({ bp }) {
  const isMobile = bp === 'mobile'
  const isTablet = bp === 'tablet'
  // Em mobile, escondemos os cards flutuantes; em tablet, aproximamos do iPhone
  const cardLeft = isTablet ? 'calc(50% - 280px)' : 'calc(50% - 360px)'
  const cardRight = isTablet ? 'calc(50% - 300px)' : 'calc(50% - 380px)'
  const cardWidth = isTablet ? 240 : 280
  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0 0', minHeight: isMobile ? 560 : 680 }}>
      {!isMobile && (
        <div style={{ position: 'absolute', left: cardLeft, top: 60, width: cardWidth, background: 'var(--card)', borderRadius: 16, padding: 18, border: '1px solid var(--line)', boxShadow: '0 24px 50px -22px rgba(0,0,0,.18)', zIndex: 1 }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', marginBottom: 10 }}>↳ painel · hoje</div>
          <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 14 }}>Leads gerados</div>
          <div style={{ display: 'flex', alignItems: 'end', gap: 6, height: 60 }}>
            {[40, 72, 55, 90, 48, 108, 75].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: i === 5 ? 'var(--accent)' : i === 3 ? 'var(--ink)' : 'var(--bg-2)' }} />
            ))}
          </div>
          <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em' }}>+128</div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase' }}>↑ 32%</div>
          </div>
        </div>
      )}

      {!isMobile && (
        <div style={{ position: 'absolute', right: cardRight, top: 140, width: cardWidth, background: '#0a0a0a', color: '#fff', borderRadius: 16, padding: 18, boxShadow: '0 24px 50px -22px rgba(0,0,0,.28)', zIndex: 1 }}>
          <div className="mono" style={{ fontSize: 10, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', marginBottom: 10 }}>↳ atendimento ia</div>
          <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6 }}>247 clientes hoje</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', lineHeight: 1.4, marginBottom: 14 }}>
            Tempo médio de resposta &lt; 3s · 24/7
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['WhatsApp', 'Site', 'Instagram'].map(t => (
              <span key={t} style={{ padding: '4px 10px', borderRadius: 999, fontSize: 11, background: 'rgba(255,255,255,.08)', color: '#fff' }}>{t}</span>
            ))}
          </div>
        </div>
      )}

      <IPhone scale={isMobile ? 0.82 : isTablet ? 0.92 : 1} />
    </div>
  )
}

function IPhone({ scale = 1 }) {
  const W = 320, H = 660, bezel = 11, radius = 48
  const islandW = 110, islandH = 32
  return (
    <div style={{ position: 'relative', zIndex: 2, transform: scale !== 1 ? `scale(${scale})` : 'none', transformOrigin: 'center top' }}>
      <div style={{ width: W + bezel * 2, height: H + bezel * 2, borderRadius: radius + bezel, padding: bezel, background: 'linear-gradient(135deg, #2a2c30 0%, #1c1e22 40%, #0c0d0f 100%)', boxShadow: 'none', position: 'relative', boxSizing: 'border-box' }}>
        <div style={{ width: '100%', height: '100%', borderRadius: radius, background: '#0a0a0a', position: 'relative', overflow: 'hidden', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.04), inset 0 10px 20px rgba(0,0,0,.35)' }}>
          <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: islandW, height: islandH, borderRadius: 18, background: '#000', zIndex: 5 }} />
          <div className="mono" style={{ position: 'absolute', top: 18, left: 20, right: 20, display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: 13, zIndex: 4 }}>
            <span>9:41</span>
            <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
              <svg width="16" height="10" viewBox="0 0 16 10"><rect x="0" y="6" width="3" height="4" fill="#fff" /><rect x="4" y="4" width="3" height="6" fill="#fff" /><rect x="8" y="2" width="3" height="8" fill="#fff" /><rect x="12" y="0" width="3" height="10" fill="#fff" /></svg>
              <svg width="20" height="10" viewBox="0 0 22 10" fill="none"><rect x="0.5" y="0.5" width="18" height="9" rx="2" stroke="#fff" opacity=".6" /><rect x="2" y="2" width="14" height="6" rx="1" fill="#fff" /><rect x="19" y="3" width="2" height="4" rx="1" fill="#fff" opacity=".6" /></svg>
            </span>
          </div>
          <div style={{ position: 'absolute', top: 60, left: 0, right: 0, bottom: 30, display: 'flex', flexDirection: 'column', padding: '20px 18px', color: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <LinkaMark size={22} accent="var(--accent)" />
              <span style={{ fontSize: 15, fontWeight: 600 }}>Linka</span>
              <span style={{ marginLeft: 'auto', width: 30, height: 30, borderRadius: 999, background: 'var(--accent)' }} />
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Operação · hoje</div>
            <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              247<span style={{ color: 'rgba(255,255,255,.45)' }}> clientes</span>
            </div>
            <div className="light" style={{ fontSize: 34, letterSpacing: '-0.03em', color: 'rgba(255,255,255,.45)', marginTop: -2 }}>respondidos</div>
            <div style={{ marginTop: 18, padding: 14, background: 'rgba(255,255,255,.06)', borderRadius: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>Leads novos</span>
                <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 999, background: 'var(--accent)', color: 'var(--accent-ink)' }}>+18%</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'end', gap: 5, height: 50 }}>
                {[40, 72, 55, 90, 48, 108, 75].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: i === 5 ? 'var(--accent)' : 'rgba(255,255,255,.18)' }} />
                ))}
              </div>
            </div>
            <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div style={{ padding: 12, background: 'rgba(255,255,255,.06)', borderRadius: 12 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)' }}>Conversão</div>
                <div style={{ fontSize: 20, fontWeight: 500, marginTop: 4 }}>34%</div>
              </div>
              <div style={{ padding: 12, background: 'rgba(255,255,255,.06)', borderRadius: 12 }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,.5)' }}>Resposta</div>
                <div style={{ fontSize: 20, fontWeight: 500, marginTop: 4 }}>&lt;3s</div>
              </div>
            </div>
            <div style={{ marginTop: 'auto', padding: '12px 14px', background: 'rgba(255,255,255,.06)', borderRadius: 999, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 24, height: 24, borderRadius: 999, background: 'conic-gradient(from 0deg, var(--accent), #fff)' }} />
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', flex: 1 }}>Pergunte à Linka IA…</span>
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 8, left: '50%', transform: 'translateX(-50%)', width: 110, height: 4, borderRadius: 3, background: 'rgba(255,255,255,.7)' }} />
        </div>
      </div>
    </div>
  )
}
