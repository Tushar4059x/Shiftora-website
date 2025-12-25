import './Hero.css'

function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-bg">
                <div className="bg-grid"></div>
                <div className="bg-glow bg-glow-top-right"></div>
                <div className="bg-glow bg-glow-bottom-left"></div>
                <div className="hero-orb hero-orb-1"></div>
                <div className="hero-orb hero-orb-2"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        AI-Powered Business Automation
                    </div>

                    {/* Removed animation classes that cause CLS */}
                    <h1 className="hero-title">
                        Stop Wasting Time on
                        <br />
                        <span className="gradient-text">Repetitive Tasks</span>
                    </h1>

                    <p className="hero-subtitle">
                        We help businesses automate their workflows with intelligent AI solutions.
                        Reduce manual labor by 70%, cut costs, and let your team focus on what matters—
                        <strong>growing your business.</strong>
                    </p>

                    <div className="hero-cta">
                        <a href="https://cal.com/shreshth-daga-rxfhkj/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                            Get Your Free Automation Audit
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#process" className="btn btn-secondary btn-large">
                            See How It Works
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat-value">70%</span>
                            <span className="hero-stat-label">Time Saved</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">50+</span>
                            <span className="hero-stat-label">Businesses Automated</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="hero-stat-value">$2M+</span>
                            <span className="hero-stat-label">Client Savings</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-visual-card">
                        <div className="visual-header">
                            <div className="visual-dots">
                                <span></span><span></span><span></span>
                            </div>
                            <span className="visual-title">Automation Dashboard</span>
                        </div>
                        <div className="visual-content">
                            <div className="visual-workflow">
                                <div className="workflow-node workflow-node-start">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Data Input</span>
                                </div>
                                <div className="workflow-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="workflow-node workflow-node-ai">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>AI Processing</span>
                                </div>
                                <div className="workflow-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="workflow-node workflow-node-end">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Automated</span>
                                </div>
                            </div>
                            <div className="visual-metrics">
                                <div className="metric">
                                    <span className="metric-label">Tasks Automated Today</span>
                                    <span className="metric-value">1,247</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-label">Hours Saved</span>
                                    <span className="metric-value">156</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-label">Error Rate</span>
                                    <span className="metric-value metric-success">0.01%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Scroll to explore</span>
            </div>
        </section>
    )
}

export default Hero
