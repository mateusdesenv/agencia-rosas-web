import { useEffect, useState } from 'react'
import './App.css'

const services = [
  {
    title: 'Trafego Pago',
    text: 'Campanhas que geram visibilidade, leads e vendas com ROI previsivel.',
    icon: '/assets/roas/icon-paid-traffic.png',
    featured: true,
  },
  {
    title: 'Social Media',
    text: 'Gestao de redes sociais que cria autoridade e gera engajamento real.',
    icon: '/assets/roas/icon-social-media.png',
  },
  {
    title: 'Sites de Conversao',
    text: 'Sites rapidos, estrategicos e focados em conversao de verdade.',
    icon: '/assets/roas/icon-conversion-sites.png',
  },
  {
    title: 'Automacao e CRM',
    text: 'Automatize processos e aumente vendas com CRM e fluxos inteligentes.',
    icon: '/assets/roas/icon-automation-crm.png',
  },
  {
    title: 'Analytics & BI',
    text: 'Dados que orientam decisoes e impulsionam resultados.',
    icon: '/assets/roas/icon-analytics-bi.png',
  },
]

const heroCards = [
  ['ROAS Atual', '4.8x', '+12% vs mes anterior', 'card-roas'],
  ['Leads Qualificados', '150k+', '+32% vs mes anterior', 'card-leads'],
  ['Faturamento Gerado', 'R$ 12.000.000+', 'crescimento acumulado', 'card-revenue'],
  ['CPA Reduzido', '-45%', 'vs mes anterior', 'card-cpa'],
  ['Performance de Anuncios', '92%', 'Taxa de Conversao', 'card-performance'],
]

const metrics = [
  ['12M+', 'Faturamento Gerado', 'para nossos clientes'],
  ['R$ 4,80', 'ROAS Medio', 'para cada R$ 1 investido'],
  ['150k+', 'Leads Qualificados', 'gerados todos os meses'],
  ['45%', 'Reducao no CPA', 'media de reducao no custo'],
]

const cases = [
  ['E-commerce', 'E-commerce Materiais Abrasivos', 'Escala de vendas com trafego pago e otimizacao de funil.', '+400%', 'de aumento no ROAS'],
  ['Construcao', 'Construtora de Casas de Madeiras', 'Geracao de leads qualificados e nutricao automatizada.', '+320%', 'mais leads qualificados'],
  ['Saude', 'Clinica Estetica', 'Aumento de agendamentos e reducao de custo por lead.', '+100%', 'aumento em conversoes'],
]

const testimonials = [
  ['A estrategia deixou nossos numeros claros e as campanhas finalmente previsiveis.', 'Marina Costa', 'CEO, Studio Viva'],
  ['A ROAS transformou trafego em processo comercial. O time ganhou ritmo.', 'Rafael Lima', 'Diretor, Prime Fit'],
  ['O site novo e os anuncios passaram a conversar. As conversoes subiram rapido.', 'Camila Rocha', 'Founder, Marea'],
]

const navItems = [
  ['Servicos', '#servicos'],
  ['Resultados', '#resultados'],
  ['Cases', '#cases'],
  ['Contato', '#contato'],
]

const trustItems = ['Resposta em ate 24h', 'Plano focado em ROI', 'Acompanhamento proximo']

const footerColumns = [
  ['Servicos', [['Trafego Pago', '#servicos'], ['Social Media', '#servicos'], ['Sites de Conversao', '#servicos'], ['Automacao e CRM', '#servicos']]],
  ['Resultados', [['Metricas', '#resultados'], ['Cases', '#cases'], ['Depoimentos', '#cases'], ['Proposta', '#contato']]],
  ['Contato', [['WhatsApp', 'https://wa.me/5500000000000'], ['contato@roas.com.br', 'mailto:contato@roas.com.br'], ['Sao Paulo - SP', '#contato']]],
]

function ServiceIcon({ src, title }) {
  return (
    <span className="service-icon" aria-hidden="true">
      <img src={src} alt="" width="78" height="78" loading="lazy" />
      <span className="sr-only">{title}</span>
    </span>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 24)
    }

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <main className="site-shell">
      <header className={`topbar ${isScrolled ? 'is-scrolled' : ''} ${isMenuOpen ? 'is-menu-open' : ''}`}>
        <a className="brand" href="#hero" aria-label="ROAS - inicio" onClick={closeMenu}>
          <span className="brand-logo">RO<span>A</span>S</span>
          <small>Agencia de marketing</small>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="nav-links" id="main-navigation" aria-label="Principal">
          {navItems.map(([label, href]) => (
            <a href={href} onClick={closeMenu} key={href}>{label}</a>
          ))}
        </nav>
        <a className="topbar-cta" href="#contato" onClick={closeMenu}>Solicitar Proposta</a>
      </header>

      <section className="hero-section" id="hero">
        <div className="hero-bg" aria-hidden="true">
          {heroCards.map(([label, value, note, className]) => (
            <div className={`floating-card ${className}`} key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{note}</small>
            </div>
          ))}
        </div>

        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Performance para marcas que querem crescer</p>
            <h1>
              Mais <span>visibilidade.</span><br />
              Mais <span>clientes.</span><br />
              Mais <span>vendas.</span>
            </h1>
            <p className="hero-text">
              Trafego pago, social media e sites de alta conversao para transformar cliques em crescimento real.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contato">Quero multiplicar meus resultados <span aria-hidden="true">→</span></a>
              <a className="btn btn-secondary" href="#cases">Ver cases <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-trust" aria-label="Diferenciais da ROAS">
              {trustItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-section light-section" id="servicos">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Solucoes integradas</p>
            <h2>Solucoes que <span>multiplicam</span> resultados</h2>
            <p>Estrategia completa para atrair, converter e reter clientes com performance previsivel.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className={`service-card reveal ${service.featured ? 'is-featured' : ''}`} key={service.title}>
                {service.featured ? <span className="badge">Mais escolhido</span> : null}
                <ServiceIcon src={service.icon} title={service.title} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className="read-more" href="#contato">Saiba mais <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="results-section dark-section" id="resultados">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Numeros que importam</p>
            <h2>Numeros que <span>falam por si</span></h2>
            <p>Metricas organizadas para o time vender melhor, investir com clareza e escalar sem achismo.</p>
          </div>
          <div className="metrics-grid">
            {metrics.map(([value, label, note]) => (
              <article className="metric-card reveal" key={value}>
                <strong>{value}</strong>
                <b>{label}</b>
                <span>{note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cases-section light-section" id="cases">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Cases de crescimento</p>
            <h2>Transformamos investimento em crescimento</h2>
          </div>
          <div className="case-grid">
            {cases.map(([tag, title, text, value, label]) => (
              <article className="case-card reveal" key={tag}>
                <span className="case-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="case-numbers">
                  <span><small>Investimento</small>R$ 5.000/mes</span>
                  <span><small>Resultado</small>R$ 22.000/mes</span>
                </div>
                <div className="mini-chart" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <strong>{value}</strong>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section dark-section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Depoimentos</p>
            <h2>Depoimentos de quem ja transformou seu negocio com a ROAS</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map(([quote, name, role]) => (
              <article className="testimonial-card reveal" key={name}>
                <div className="stars" aria-label="5 estrelas">★★★★★</div>
                <p>"{quote}"</p>
                <strong>{name}</strong>
                <span>{role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta light-section" id="contato">
        <div className="container cta-panel reveal">
          <div>
            <p className="eyebrow">Proxima fase</p>
            <h2>Pronto para transformar trafego em crescimento?</h2>
            <p>Vamos mapear suas oportunidades e montar uma rota simples para vender mais com previsibilidade.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
                Falar no WhatsApp <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn-dark" href="mailto:contato@roas.com.br">Solicitar Proposta <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="cta-visual" aria-hidden="true">
            <div className="cta-funnel" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-cta">
          <div>
            <p className="eyebrow">Pronto para escalar?</p>
            <h2>Vamos multiplicar seus resultados?</h2>
            <p>Receba um plano claro para transformar trafego, conteudo e site em uma maquina de crescimento.</p>
          </div>
          <a className="btn btn-primary" href="#contato">Solicitar proposta <span aria-hidden="true">→</span></a>
        </div>

        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#hero" aria-label="ROAS - inicio">
              <span className="brand-logo">RO<span>A</span>S</span>
              <small>Agencia de marketing</small>
            </a>
            <p>Marketing digital, performance e sites de conversao para marcas que querem crescer com previsibilidade.</p>
            <div className="footer-social" aria-label="Redes sociais">
              <a href="#contato" aria-label="Instagram">IG</a>
              <a href="#contato" aria-label="LinkedIn">IN</a>
              <a href="#contato" aria-label="YouTube">YT</a>
            </div>
          </div>

          {footerColumns.map(([title, links]) => (
            <nav className="footer-links" aria-label={title} key={title}>
              <strong>{title}</strong>
              <div className="footer-link-list">
                {links.map(([label, href]) => (
                  <a href={href} key={label}>{label}</a>
                ))}
              </div>
            </nav>
          ))}
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Agencia ROAS. Todos os direitos reservados.</span>
          <span>CNPJ: 06.476.540/0001-31</span>
        </div>
      </footer>
    </main>
  )
}

export default App
