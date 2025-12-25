import './Pricing.css'

function Pricing() {
    const calendlyLink = "https://cal.com/shreshth-daga-rxfhkj/30min"

    const features = [
        "Custom AI automation workflows",
        "Tailored to your business needs",
        "Full implementation & training",
        "Ongoing support & optimization",
        "30-day results guarantee"
    ]

    return (
        <section className="pricing section" id="pricing">
            <div className="pricing-bg">
                <div className="bg-grid"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-label">Investment</span>
                    <h2 className="section-title">
                        Simple, <span className="gradient-text">Transparent Pricing</span>
                    </h2>
                    <p className="section-subtitle">
                        Every business is unique. Let's discuss your specific needs and create a custom solution.
                    </p>
                </div>

                <div className="pricing-single">
                    <div className="pricing-card card featured">
                        <div className="pricing-header">
                            <h3 className="plan-name">Custom Automation Solutions</h3>
                            <p className="plan-description">Tailored AI automation that fits your business perfectly</p>
                        </div>

                        <div className="pricing-price">
                            <span className="price-label">Starting from</span>
                            <div className="price-main">
                                <span className="price-currency">$</span>
                                <span className="price-amount">400+</span>
                            </div>
                            <span className="price-note">One-time setup + flexible monthly plans</span>
                        </div>

                        <ul className="pricing-features">
                            {features.map((feature, i) => (
                                <li key={i} className="pricing-feature">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={calendlyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-large"
                        >
                            Book a Quote
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="pricing-guarantee">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>
                        <strong>30-Day Results Guarantee:</strong> See measurable improvements or we work for free until you do.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Pricing

