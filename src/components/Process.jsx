import './Process.css'

function Process() {
    const steps = [
        {
            number: "01",
            title: "Discovery Call",
            description: "We dive deep into your business operations to identify automation opportunities and understand your pain points.",
            duration: "30 min call",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19.92C22 20.48 21.54 20.96 20.98 20.99C20.68 21.01 20.39 21.02 20.09 21.02C10.6 21.02 2.98 13.4 2.98 3.91C2.98 3.61 2.99 3.32 3.01 3.02C3.04 2.46 3.52 2 4.08 2H7.08C7.58 2 8 2.39 8.04 2.88C8.12 3.96 8.33 5.01 8.67 6.01C8.79 6.36 8.69 6.75 8.41 6.99L6.42 8.83C8.07 12.09 10.91 14.93 14.17 16.58L16.01 14.59C16.25 14.31 16.64 14.21 16.99 14.33C17.99 14.67 19.04 14.88 20.12 14.96C20.61 15 21 15.42 21 15.92V16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: "02",
            title: "Custom Strategy",
            description: "We create a detailed automation roadmap tailored to your specific needs, with clear timelines and expected ROI.",
            duration: "3-5 days",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M2 3H8C9.06 3 10.08 3.42 10.83 4.17C11.58 4.92 12 5.94 12 7V21C12 20.2 11.68 19.44 11.12 18.88C10.56 18.32 9.8 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 3H16C14.94 3 13.92 3.42 13.17 4.17C12.42 4.92 12 5.94 12 7V21C12 20.2 12.32 19.44 12.88 18.88C13.44 18.32 14.2 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: "03",
            title: "Build & Integrate",
            description: "Our team builds your custom automation systems and integrates them seamlessly with your existing tools.",
            duration: "2-4 weeks",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M14.7 6.3C14.5168 6.48693 14.4141 6.73825 14.4141 7C14.4141 7.26175 14.5168 7.51307 14.7 7.7L16.3 9.3C16.4869 9.48322 16.7382 9.58586 17 9.58586C17.2618 9.58586 17.5131 9.48322 17.7 9.3L21.47 5.53C21.97 6.64 22.18 7.86 22.08 9.07C21.98 10.28 21.57 11.44 20.88 12.44C20.19 13.44 19.26 14.24 18.16 14.75C17.07 15.26 15.86 15.47 14.66 15.36C14.19 15.32 13.73 15.45 13.37 15.72L8 20C7.45 20.55 6.71 20.86 5.94 20.86C5.17 20.86 4.43 20.55 3.88 20C3.33 19.45 3.02 18.71 3.02 17.94C3.02 17.17 3.33 16.43 3.88 15.88L8.16 10.51C8.43 10.15 8.56 9.7 8.52 9.24C8.41 8.04 8.62 6.83 9.13 5.74C9.64 4.65 10.44 3.72 11.44 3.03C12.44 2.34 13.6 1.93 14.81 1.83C16.02 1.73 17.24 1.94 18.35 2.44L14.7 6.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            number: "04",
            title: "Launch & Optimize",
            description: "We go live with your automations and continuously monitor and optimize their performance for maximum efficiency.",
            duration: "Ongoing",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ]

    return (
        <section className="process section" id="process">
            <div className="process-bg">
                <div className="bg-grid"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-label">Our Process</span>
                    <h2 className="section-title">
                        How We <span className="gradient-text">Transform Your Business</span>
                    </h2>
                    <p className="section-subtitle">
                        A proven 4-step process that takes you from overwhelmed to automated in weeks, not months.
                    </p>
                </div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-connector">
                                <div className="step-number">{step.number}</div>
                                {index < steps.length - 1 && <div className="step-line"></div>}
                            </div>
                            <div className="step-content card">
                                <div className="step-icon">
                                    {step.icon}
                                </div>
                                <div className="step-info">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-description">{step.description}</p>
                                    <span className="step-duration">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        {step.duration}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="process-guarantee">
                    <div className="guarantee-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="guarantee-content">
                        <h4 className="guarantee-title">Our Guarantee</h4>
                        <p className="guarantee-text">
                            If you don't see measurable improvements within 30 days of going live, we'll continue working for free until you do.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process
