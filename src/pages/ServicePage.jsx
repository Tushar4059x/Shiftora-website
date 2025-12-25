import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './ServicePage.css'
import CTA from '../components/CTA'

function ServicePage({ service }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [service])

    const getIcon = (iconName) => {
        const icons = {
            document: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            chat: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            workflow: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H10V10H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 4H20V10H14V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 14H10V20H4V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 17H20M17 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            inventory: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8C20.9996 7.6493 20.9071 7.3048 20.7315 7.00017C20.556 6.69555 20.3037 6.44145 20 6.264L13 2.264C12.696 2.08614 12.3511 1.99231 12 1.99231C11.6489 1.99231 11.304 2.08614 11 2.264L4 6.264C3.69626 6.44145 3.44398 6.69555 3.26846 7.00017C3.09294 7.3048 3.00036 7.6493 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9998C3.44398 17.3045 3.69626 17.5586 4 17.736L11 21.736C11.304 21.9139 11.6489 22.0077 12 22.0077C12.3511 22.0077 12.696 21.9139 13 21.736L20 17.736C20.3037 17.5586 20.556 17.3045 20.7315 16.9998C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.27002 6.95996L12 12.01L20.73 6.95996M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            chart: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            email: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
        return icons[iconName] || icons.document
    }

    return (
        <>
            <Helmet>
                <title>{service.metaTitle}</title>
                <meta name="description" content={service.metaDescription} />
                <meta property="og:title" content={service.metaTitle} />
                <meta property="og:description" content={service.metaDescription} />
                <link rel="canonical" href={`https://shiftora.ai/services/${service.slug}`} />
            </Helmet>

            <section className="service-hero">
                <div className="service-hero-bg">
                    <div className="bg-grid"></div>
                    <div className="service-glow service-glow-1"></div>
                    <div className="service-glow service-glow-2"></div>
                </div>

                <div className="container">
                    <Link to="/" className="back-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Home
                    </Link>

                    <div className="service-hero-content">
                        <div className="service-hero-icon">
                            {getIcon(service.icon)}
                        </div>
                        <span className="section-label">{service.heroTagline}</span>
                        <h1 className="service-hero-title">{service.heroTitle}</h1>
                        <p className="service-hero-subtitle">{service.heroSubtitle}</p>
                        <a href="#cta" className="btn btn-primary btn-large">
                            {service.cta}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section className="service-benefits section">
                <div className="container">
                    <div className="benefits-grid">
                        {service.benefits.map((benefit, index) => (
                            <div key={index} className="benefit-card">
                                <div className="benefit-metric gradient-text">{benefit.metric}</div>
                                <div className="benefit-label">{benefit.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-features section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Features</span>
                        <h2 className="section-title">How It Works</h2>
                    </div>

                    <div className="features-grid">
                        {service.features.map((feature, index) => (
                            <div key={index} className="feature-card card">
                                <div className="feature-number">{String(index + 1).padStart(2, '0')}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-usecases section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Use Cases</span>
                        <h2 className="section-title">Perfect For</h2>
                    </div>

                    <div className="usecases-list">
                        {service.useCases.map((useCase, index) => (
                            <div key={index} className="usecase-item">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>{useCase}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
        </>
    )
}

export default ServicePage
