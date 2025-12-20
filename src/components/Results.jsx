import './Results.css'

function Results() {
    const stats = [
        {
            value: "70%",
            label: "Average Time Saved",
            description: "On repetitive tasks"
        },
        {
            value: "$2.5M+",
            label: "Client Savings",
            description: "In operational costs"
        },
        {
            value: "99.9%",
            label: "Accuracy Rate",
            description: "Zero human errors"
        },
        {
            value: "50+",
            label: "Businesses Automated",
            description: "Across industries"
        }
    ]

    const caseStudies = [
        {
            industry: "E-Commerce",
            company: "Online Retail Brand",
            challenge: "Processing 500+ orders daily with manual data entry",
            solution: "Automated order processing and inventory sync",
            results: [
                { metric: "Time Saved", before: "8 hrs/day", after: "45 mins/day" },
                { metric: "Error Rate", before: "4.2%", after: "0.1%" },
                { metric: "Monthly Savings", before: "$0", after: "$12,500" }
            ]
        },
        {
            industry: "Real Estate",
            company: "Property Management Firm",
            challenge: "Managing 200+ tenant communications manually",
            solution: "AI chatbot + automated follow-up sequences",
            results: [
                { metric: "Response Time", before: "24 hrs", after: "2 mins" },
                { metric: "Lead Conversion", before: "12%", after: "34%" },
                { metric: "Staff Hours", before: "40 hrs/week", after: "8 hrs/week" }
            ]
        },
        {
            industry: "Healthcare",
            company: "Medical Practice",
            challenge: "Appointment scheduling and patient reminders",
            solution: "Automated booking, reminders, and follow-ups",
            results: [
                { metric: "No-Show Rate", before: "18%", after: "4%" },
                { metric: "Admin Time", before: "25 hrs/week", after: "5 hrs/week" },
                { metric: "Patient Satisfaction", before: "72%", after: "94%" }
            ]
        }
    ]

    return (
        <section className="results section" id="results">
            <div className="results-bg">
                <div className="bg-grid"></div>
                <div className="results-glow"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-label">Proven Results</span>
                    <h2 className="section-title">
                        The Numbers <span className="gradient-text">Speak For Themselves</span>
                    </h2>
                    <p className="section-subtitle">
                        Real results from real businesses. These aren't projections—they're documented outcomes.
                    </p>
                </div>

                <div className="results-stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="result-stat">
                            <div className="stat-value gradient-text">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-description">{stat.description}</div>
                        </div>
                    ))}
                </div>

                <div className="case-studies">
                    <h3 className="case-studies-title">Success Stories</h3>
                    <div className="case-studies-grid">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="case-study card">
                                <div className="case-study-header">
                                    <span className="case-study-industry badge badge-purple">{study.industry}</span>
                                    <h4 className="case-study-company">{study.company}</h4>
                                </div>

                                <div className="case-study-content">
                                    <div className="case-study-section">
                                        <span className="case-study-label">Challenge</span>
                                        <p>{study.challenge}</p>
                                    </div>
                                    <div className="case-study-section">
                                        <span className="case-study-label">Solution</span>
                                        <p>{study.solution}</p>
                                    </div>
                                </div>

                                <div className="case-study-results">
                                    {study.results.map((result, i) => (
                                        <div key={i} className="case-study-result">
                                            <span className="result-metric">{result.metric}</span>
                                            <div className="result-comparison">
                                                <span className="result-before">{result.before}</span>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <span className="result-after">{result.after}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Results
