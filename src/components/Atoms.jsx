import React, { useState, useEffect, useRef } from 'react'

export function LinkaMark({ size = 28, accent }) {
  const s = size
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none" aria-label="Linka">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2.2" />
      <path d="M20 2 a18 18 0 0 1 0 36" stroke={accent || 'currentColor'} strokeWidth="6" strokeLinecap="round" />
      <circle cx="20" cy="20" r="5.5" fill="currentColor" />
    </svg>
  )
}

export function Wordmark({ height = 42 }) {
  return (
    <img src="/images/logo.png" alt="Linka" style={{ height, display: 'block' }} />
  )
}

export function ArrowRight({ size = 16, hov = false }) {
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden
      style={{ transform: hov ? 'translateX(4px)' : 'translateX(0)', transition: 'transform .3s cubic-bezier(.2,.7,.2,1)' }}
    >
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/**
 * Returns 'mobile' (<640px), 'tablet' (640-1023px) ou 'desktop' (>=1024px).
 * SSR-safe: começa como 'desktop' até o primeiro layout.
 */
export function useBreakpoint() {
  const get = () => {
    if (typeof window === 'undefined') return 'desktop'
    const w = window.innerWidth
    if (w < 640) return 'mobile'
    if (w < 1024) return 'tablet'
    return 'desktop'
  }
  const [bp, setBp] = useState(get)
  useEffect(() => {
    const on = () => setBp(get())
    on()
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])
  return bp
}

export function CTA({ children, kind = 'dark', size = 'md', as: Tag = 'button', href, hoverAccent = false, style: extraStyle, ...rest }) {
  const [hov, setHov] = useState(false)
  const [pressed, setPressed] = useState(false)
  const bp = useBreakpoint()

  const baseStyles = {
    dark: { background: 'var(--ink)', color: '#fff' },
    light: { background: '#fff', color: 'var(--ink)', boxShadow: 'inset 0 0 0 1px var(--line)' },
    accent: { background: 'var(--accent)', color: 'var(--accent-ink)' },
    ghost: { background: 'transparent', color: 'var(--ink)', boxShadow: 'inset 0 0 0 1px var(--ink)' },
  }[kind]

  const hoveredStyles = hoverAccent && hov
    ? { background: 'var(--accent)', color: 'var(--accent-ink)' }
    : hov ? { filter: 'brightness(1.18)' } : {}

  const sizing = {
    sm: { padding: '10px 18px', fontSize: 14, gap: 10 },
    md: { padding: bp === 'mobile' ? '14px 22px' : '16px 26px', fontSize: bp === 'mobile' ? 15 : 16, gap: 14 },
    lg: { padding: bp === 'mobile' ? '16px 24px' : '20px 30px', fontSize: bp === 'mobile' ? 15 : 17, gap: 16 },
  }[size]

  return (
    <Tag
      href={href}
      {...rest}
      style={{
        ...baseStyles,
        ...hoveredStyles,
        ...sizing,
        border: 'none',
        borderRadius: 999,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 500,
        transition: 'background .3s ease, color .3s ease, filter .25s ease, transform .2s ease',
        transform: pressed ? 'scale(.97)' : 'none',
        ...extraStyle,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      <span>{children}</span>
      <ArrowRight hov={hov} />
    </Tag>
  )
}

export function Container({ children, style, ...rest }) {
  const bp = useBreakpoint()
  const pad = bp === 'mobile' ? '0 20px' : bp === 'tablet' ? '0 28px' : '0 32px'
  return (
    <div {...rest} style={{ maxWidth: 1280, margin: '0 auto', padding: pad, ...style }}>
      {children}
    </div>
  )
}

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      })
    }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

export function Reveal({ children, delay = 0, style }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </div>
  )
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const bp = useBreakpoint()
  const isMobile = bp === 'mobile' || bp === 'tablet'

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10)
    on()
    window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])

  // Fecha menu mobile ao mudar pra desktop
  useEffect(() => { if (!isMobile) setOpen(false) }, [isMobile])

  // Trava scroll quando menu aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const innerMax = scrolled ? (isMobile ? '100%' : 960) : 1280
  const innerPad = scrolled
    ? (isMobile ? '10px 14px' : '10px 20px')
    : (isMobile ? '12px 16px' : '14px 28px')

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: isMobile ? '8px 12px' : '10px 16px', transition: 'all .3s ease' }}>
      <div
        className={scrolled ? 'nav-blur' : ''}
        style={{
          maxWidth: innerMax,
          margin: '0 auto',
          padding: innerPad,
          background: scrolled ? 'color-mix(in oklab, var(--bg) 60%, transparent)' : 'transparent',
          border: scrolled ? '1px solid var(--line)' : '1px solid transparent',
          borderRadius: scrolled ? 18 : 0,
          transition: 'all .4s cubic-bezier(.2,.7,.2,1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <a href="#" style={{ display: 'inline-flex' }}>
          <Wordmark accent="var(--accent)" height={isMobile ? 32 : 42} />
        </a>

        {!isMobile && (
          <nav style={{ display: 'flex', gap: 30, alignItems: 'center' }}>
            <NavItem label="Empresa" items={['Sobre nós', 'Manifesto', 'Cases', 'Carreiras']} />
            <NavItem label="Serviços" items={['Chatbots IA', 'Sites & landing', 'Rebranding', 'Automações', 'CRM & dados']} />
            <NavItem label="Recursos" items={['Blog', 'Guia gratuito', 'FAQ', 'Contato']} />
          </nav>
        )}

        {!isMobile && (
          <a
            href="#cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, padding: '8px 16px', borderRadius: 999, background: 'var(--ink)', color: '#fff', whiteSpace: 'nowrap' }}
          >
            Fale com a gente <ArrowRight size={14} />
          </a>
        )}

        {isMobile && (
          <button
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            style={{ background: 'transparent', border: '1px solid var(--line)', borderRadius: 12, width: 42, height: 42, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--ink)' }}
          >
            <Hamburger open={open} />
          </button>
        )}
      </div>

      {isMobile && open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  )
}

function Hamburger({ open }) {
  const common = { stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <line x1="4" y1={open ? '12' : '7'} x2="20" y2={open ? '12' : '7'} {...common} style={{ transform: open ? 'rotate(45deg)' : 'none', transformOrigin: '12px 12px', transition: 'transform .25s' }} />
      <line x1="4" y1="12" x2="20" y2="12" {...common} style={{ opacity: open ? 0 : 1, transition: 'opacity .2s' }} />
      <line x1="4" y1={open ? '12' : '17'} x2="20" y2={open ? '12' : '17'} {...common} style={{ transform: open ? 'rotate(-45deg)' : 'none', transformOrigin: '12px 12px', transition: 'transform .25s' }} />
    </svg>
  )
}

function MobileMenu({ onClose }) {
  const groups = [
    { label: 'Empresa', items: ['Sobre nós', 'Manifesto', 'Cases', 'Carreiras'] },
    { label: 'Serviços', items: ['Chatbots IA', 'Sites & landing', 'Rebranding', 'Automações', 'CRM & dados'] },
    { label: 'Recursos', items: ['Blog', 'Guia gratuito', 'FAQ', 'Contato'] },
  ]
  return (
    <div
      style={{
        position: 'fixed',
        top: 64,
        left: 12,
        right: 12,
        maxHeight: 'calc(100vh - 80px)',
        overflowY: 'auto',
        background: 'var(--bg)',
        border: '1px solid var(--line)',
        borderRadius: 18,
        padding: 20,
        boxShadow: '0 24px 50px -10px rgba(0,0,0,.12)',
        animation: 'heroIn .25s ease forwards',
      }}
    >
      {groups.map(g => (
        <div key={g.label} style={{ paddingBottom: 16, marginBottom: 16, borderBottom: '1px solid var(--line)' }}>
          <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 12 }}>{g.label}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {g.items.map(i => (
              <li key={i}>
                <a href="#" onClick={onClose} style={{ display: 'block', padding: '10px 4px', fontSize: 16, color: 'var(--ink)' }}>{i}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <a
        href="#cta"
        onClick={onClose}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '14px 22px', borderRadius: 999, background: 'var(--ink)', color: '#fff', fontSize: 15, marginTop: 4 }}
      >
        Fale com a gente <ArrowRight size={14} />
      </a>
    </div>
  )
}

function NavItem({ label, items }) {
  const [open, setOpen] = useState(false)
  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} style={{ position: 'relative' }}>
      <button style={{ background: 'none', border: 'none', padding: '8px 0', color: 'var(--ink-2)', fontSize: 15, cursor: 'pointer' }}>
        {label}
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
          background: 'var(--card)', borderRadius: 14,
          boxShadow: '0 14px 40px -10px rgba(0,0,0,.18), 0 2px 4px rgba(0,0,0,.04)',
          padding: 8, minWidth: 200, marginTop: 6, border: '1px solid var(--line)',
        }}>
          {items.map(i => (
            <a
              key={i}
              href="#"
              style={{ display: 'block', padding: '10px 14px', fontSize: 14, borderRadius: 8, color: 'var(--ink)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-2)')}
              onMouseLeave={e => (e.currentTarget.style.background = '')}
            >{i}</a>
          ))}
        </div>
      )}
    </div>
  )
}
