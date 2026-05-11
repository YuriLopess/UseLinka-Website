import React from 'react'
import { Container, ArrowRight } from './Atoms'

const logos = [
  { name: 'Vortex', type: 'mark' },
  { name: 'CAMPO', type: 'plain' },
  { name: 'Mendel & Co.', type: 'wide' },
  { name: 'Solvex', type: 'mark' },
  { name: 'APEX', type: 'plain' },
  { name: 'horizonte', type: 'lower' },
  { name: 'Lumiar', type: 'mark' },
  { name: 'Verdant', type: 'leaf' },
]

function Logo({ name, type }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, color: 'var(--ink-3)', height: 32, fontSize: 20, fontWeight: type === 'plain' ? 700 : type === 'wide' ? 500 : type === 'lower' ? 300 : 500, letterSpacing: type === 'plain' ? '0.18em' : type === 'lower' ? '-0.03em' : '-0.01em', textTransform: type === 'lower' ? 'lowercase' : 'none' }}>
      {type === 'mark' && (
        <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
          <rect x="2" y="2" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="11" cy="11" r="4" fill="currentColor" />
        </svg>
      )}
      {type === 'leaf' && (
        <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
          <path d="M11 2 C 16 7, 16 15, 11 20 C 6 15, 6 7, 11 2 Z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      )}
      <span>{name}</span>
    </div>
  )
}

export default function LogosMarquee() {
  return (
    <section style={{ padding: '40px 0 100px' }}>
      <Container>
        <div className="grp" style={{ position: 'relative' }}>
          <div className="grp-overlay" style={{ position: 'absolute', inset: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'scale(.95)', opacity: 0, transition: 'opacity .5s ease, transform .5s cubic-bezier(.2,.7,.2,1)', pointerEvents: 'none' }}>
            <a href="#" className="link-line" style={{ fontSize: 14, color: 'var(--ink)', display: 'inline-flex', alignItems: 'center', gap: 8, pointerEvents: 'auto' }}>
              Conheça nossos clientes <ArrowRight size={12} />
            </a>
          </div>
          <div className="grp-target mono" style={{ textAlign: 'center', marginBottom: 36, fontSize: 11, textTransform: 'uppercase', color: 'var(--ink-3)', transition: 'all .5s ease' }}>
            ↳ Empresas que cresceram com a Linka
          </div>
          <div className="grp-target" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '56px 64px', maxWidth: 780, margin: '0 auto', transition: 'all .5s ease' }}>
            {logos.map((l, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
                <Logo {...l} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
