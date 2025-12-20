import './Problems.css'

function Problems() {
    const problems = [
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Wasting Hours on Repetitive Tasks",
            description: "Your team spends 60% of their time on tasks that could be automated—data entry, reporting, email responses, scheduling.",
            stat: "60%",
            statLabel: "of work time wasted"
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            title: "Scaling Feels Impossible",
            description: "Every new client or order means more manual work. You can't grow without hiring more people—but that cuts into profits.",
            stat: "3x",
            statLabel: "hiring costs to scale"
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.29 3.86L1.82 18C1.64 18.3 1.55 18.64 1.55 19C1.55 19.36 1.64 19.7 1.82 20C2 20.3 2.25 20.55 2.55 20.73C2.85 20.91 3.19 21 3.55 21H20.45C20.81 21 21.15 20.91 21.45 20.73C21.75 20.55 22 20.3 22.18 20C22.36 19.7 22.45 19.36 22.45 19C22.45 18.64 22.36 18.3 22.18 18L13.71 3.86C13.53 3.56 13.28 3.31 12.98 3.13C12.68 2.95 12.34 2.86 12 2.86C11.66 2.86 11.32 2.95 11.02 3.13C10.72 3.31 10.47 3.56 10.29 3.86Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 9V13M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Human Errors Cost You Money",
            description: "Typos in orders, missed follow-ups, inconsistent data—these small mistakes add up to big losses and unhappy customers.",
            stat: "$125K",
            statLabel: "avg. annual error cost"
        },
        {
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Your Best People Are Burning Out",
            description: "Talented employees leave because they're stuck doing boring, repetitive work instead of high-impact creative tasks.",
            stat: "67%",
            statLabel: "burnout from repetition"
        }
    ]

    return (
        <section className="problems section" id="problems">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">The Problem</span>
                    <h2 className="section-title">
                        Sound Familiar? <span className="gradient-text">You're Not Alone.</span>
                    </h2>
                    <p className="section-subtitle">
                        These challenges are costing your business thousands every month—and holding you back from reaching your full potential.
                    </p>
                </div>

                <div className="problems-grid">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="problem-card card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="problem-icon">
                                {problem.icon}
                            </div>
                            <h3 className="problem-title">{problem.title}</h3>
                            <p className="problem-description">{problem.description}</p>
                            <div className="problem-stat">
                                <span className="problem-stat-value">{problem.stat}</span>
                                <span className="problem-stat-label">{problem.statLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="problems-cta">
                    <p className="problems-cta-text">
                        <strong>The good news?</strong> There's a better way.
                    </p>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="problems-cta-arrow">
                        <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Problems
