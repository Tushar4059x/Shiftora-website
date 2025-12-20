import { useState } from 'react'
import './Pricing.css'

function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false)

    const plans = [
        {
            name: "Starter",
            description: "Perfect for small businesses getting started with automation",
            price: { monthly: 1497, annual: 1197 },
            features: [
                "Up to 3 automation workflows",
                "1,000 tasks/month",
                "Email & chat support",
                "Basic integrations",
                "Weekly performance reports",
                "30-day money-back guarantee"
            ],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Growth",
            description: "For growing businesses ready to scale their operations",
            price: { monthly: 2997, annual: 2397 },
            features: [
                "Up to 10 automation workflows",
                "10,000 tasks/month",
                "Priority support (24hr response)",
                "Advanced integrations",
                "Custom AI training",
                "Daily performance reports",
                "Dedicated account manager",
                "Monthly strategy calls"
            ],
            cta: "Start Growing",
            popular: true
        },
        {
            name: "Enterprise",
            description: "Custom solutions for large organizations",
            price: { monthly: "Custom", annual: "Custom" },
            features: [
                "Unlimited automation workflows",
                "Unlimited tasks/month",
                "24/7 priority support",
                "Enterprise integrations",
                "Custom AI development",
                "Real-time analytics dashboard",
                "Dedicated success team",
                "On-site training available",
                "SLA guarantees",
                "White-label options"
            ],
            cta: "Contact Sales",
            popular: false
        }
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
                        Choose the plan that fits your business. All plans include our 30-day results guarantee.
                    </p>
                </div>

                <div className="pricing-toggle">
                    <span className={!isAnnual ? 'active' : ''}>Monthly</span>
                    <button
                        className={`toggle-switch ${isAnnual ? 'active' : ''}`}
                        onClick={() => setIsAnnual(!isAnnual)}
                        aria-label="Toggle annual pricing"
                    >
                        <span className="toggle-knob"></span>
                    </button>
                    <span className={isAnnual ? 'active' : ''}>
                        Annual
                        <span className="save-badge">Save 20%</span>
                    </span>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card card ${plan.popular ? 'popular' : ''}`}
                        >
                            {plan.popular && (
                                <div className="popular-badge">Most Popular</div>
                            )}

                            <div className="pricing-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <p className="plan-description">{plan.description}</p>
                            </div>

                            <div className="pricing-price">
                                {typeof plan.price.monthly === 'number' ? (
                                    <>
                                        <span className="price-currency">$</span>
                                        <span className="price-amount">
                                            {isAnnual ? plan.price.annual : plan.price.monthly}
                                        </span>
                                        <span className="price-period">/month</span>
                                    </>
                                ) : (
                                    <span className="price-custom">Custom Pricing</span>
                                )}
                            </div>

                            <ul className="pricing-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="pricing-feature">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#cta"
                                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-large`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
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
