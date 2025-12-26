import './Process.css'

function Process() {
    return (
        <section className="process section" id="process">
            <div className="container">
                <div className="process-guarantee">
                    <div className="guarantee-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="guarantee-content">
                        <h4 className="guarantee-title">30-Day Guarantee</h4>
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
