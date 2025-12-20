import './Solution.css'

function Solution() {
    const benefits = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Lightning-Fast Execution",
            description: "Tasks that took hours now complete in seconds"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "99.9% Accuracy",
            description: "Eliminate human errors completely"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: "24/7 Operation",
            description: "Your automations never sleep"
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 8V14M17 11H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: "Scale Without Hiring",
            description: "Handle 10x volume with same team"
        }
    ]

    return (
        <section className="solution section" id="solution">
            <div className="solution-bg">
                <div className="bg-grid"></div>
                <div className="solution-glow"></div>
            </div>

            <div className="container">
                <div className="solution-content">
                    <div className="solution-text">
                        <span className="section-label">The Solution</span>
                        <h2 className="section-title">
                            Introducing <span className="gradient-text">AI-Powered Automation</span>
                        </h2>
                        <p className="solution-description">
                            We build intelligent automation systems that handle your repetitive tasks with precision.
                            From data entry to customer support, from inventory management to reporting—we automate
                            it all so you can focus on growing your business.
                        </p>

                        <div className="solution-benefits">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="solution-benefit">
                                    <div className="benefit-icon">
                                        {benefit.icon}
                                    </div>
                                    <div className="benefit-content">
                                        <h4 className="benefit-title">{benefit.title}</h4>
                                        <p className="benefit-description">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="solution-visual">
                        <div className="solution-card">
                            <div className="solution-card-header">
                                <span className="badge badge-green">
                                    <span className="badge-dot-green"></span>
                                    Live Demo
                                </span>
                            </div>
                            <div className="solution-card-content">
                                <div className="automation-demo">
                                    <div className="demo-item demo-input">
                                        <span className="demo-label">Manual Task</span>
                                        <div className="demo-bar demo-bar-old">
                                            <div className="demo-fill" style={{ width: '100%' }}></div>
                                        </div>
                                        <span className="demo-time">4 hours</span>
                                    </div>
                                    <div className="demo-arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="demo-item demo-output">
                                        <span className="demo-label">With ScaletrailAI</span>
                                        <div className="demo-bar demo-bar-new">
                                            <div className="demo-fill" style={{ width: '8%' }}></div>
                                        </div>
                                        <span className="demo-time demo-time-fast">12 mins</span>
                                    </div>
                                </div>
                                <div className="demo-savings">
                                    <div className="demo-savings-value">95%</div>
                                    <div className="demo-savings-label">Time Reduction</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution
