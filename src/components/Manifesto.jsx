import React from 'react'
import { Container, Reveal, useBreakpoint } from './Atoms'

export default function Manifesto() {
  const bp = useBreakpoint()
  const isMobile = bp === 'mobile'
  const isTablet = bp === 'tablet'
  const isStacked = isMobile || isTablet
  return (
    <section style={{ padding: isMobile ? '96px 0 72px' : '160px 0 120px', position: 'relative' }}>
      <Container>
        <div style={{ display: 'grid', gridTemplateColumns: isStacked ? '1fr' : '180px 1fr', gap: isStacked ? 32 : 60, alignItems: 'start' }}>
          <Reveal>
            <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--ink-3)', lineHeight: 1.6, position: isStacked ? 'static' : 'sticky', top: 120 }}>
              <div style={{ color: 'var(--ink)' }}>/01</div>
              <div>Manifesto</div>
              <div style={{ marginTop: 10 }}>↳ por que</div>
              <div>↳ existimos</div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 style={{ fontSize: 'clamp(30px, 5.4vw, 78px)', lineHeight: 1.04, letterSpacing: '-0.035em', fontWeight: 500, margin: 0, textWrap: 'balance' }}>
              A maior parte das<br />
              empresas brasileiras<br />
              <span className="light">ainda perde tempo</span><br />
              <span className="light" style={{ color: 'var(--ink-2)' }}>com o que devia</span><br />
              <span className="light" style={{ color: 'var(--ink-2)' }}>estar automatizado.</span>
            </h2>
            <div style={{ marginTop: isMobile ? 48 : 80, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? 32 : 60, paddingTop: isMobile ? 32 : 50, borderTop: '1px solid var(--line)' }}>
              <div>
                <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 14 }}>Onde a gente entra</div>
                <p style={{ fontSize: isMobile ? 15.5 : 17, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>
                  Mapeamos o que toma tempo da sua equipe — atendimento, qualificação, cobrança, follow-up — e transformamos isso em fluxos automáticos. Sua marca, sua voz, seu ritmo.
                </p>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 14 }}>O que muda</div>
                <p style={{ fontSize: isMobile ? 15.5 : 17, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>
                  Time vendendo em vez de copiando dado entre abas. Cliente respondido em segundos, não em horas. Decisão baseada em número, não em achismo.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
