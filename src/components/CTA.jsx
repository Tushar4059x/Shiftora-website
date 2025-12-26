import './CTA.css'

function CTA() {
    return (
        <section className="cta section" id="cta">
            <div className="cta-bg">
                <div className="bg-grid"></div>
                <div className="cta-glow cta-glow-1"></div>
                <div className="cta-glow cta-glow-2"></div>
            </div>

            <div className="container">
                <div className="cta-content">
                    <span className="section-label">Let's Get Started</span>
                    <h2 className="cta-title">
                        Ready to <span className="gradient-text">Transform Your Business?</span>
                    </h2>
                    <p className="cta-description">
                        Book a free 30-minute discovery call. We'll analyze your current workflows,
                        identify automation opportunities, and show you exactly how much time and money
                        you could save—with zero obligation.
                    </p>

                    <div className="cta-features">
                        <div className="cta-feature">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Free automation audit</span>
                        </div>
                        <div className="cta-feature">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Custom ROI projection</span>
                        </div>
                        <div className="cta-feature">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>No obligation</span>
                        </div>
                    </div>

                    <div className="cta-actions">
                        <a href="https://cal.com/shreshth-daga-rxfhkj/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large cta-button">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
                            </svg>
                            Book Your Free Discovery Call
                        </a>
                        <p className="cta-note">
                            Or email us at <a href="mailto:Shiftora25@gmail.com">Shiftora25@gmail.com</a>
                        </p>
                    </div>

                    <div className="cta-trust">
                        <div className="trust-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>100% Secure</span>
                        </div>
                        <div className="trust-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span>30-min call</span>
                        </div>
                        <div className="trust-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>5-star rated</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
