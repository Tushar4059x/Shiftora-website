import './Services.css'

function Services() {
    const services = [
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Data Entry & Processing",
            description: "Automatically extract, validate, and input data from any source—PDFs, emails, forms, spreadsheets. Zero manual data entry needed.",
            features: ["Invoice Processing", "Form Extraction", "Data Validation", "Database Sync"]
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Customer Support AI",
            description: "Deploy intelligent chatbots that handle 80% of customer inquiries instantly. Seamless handoff to humans when needed.",
            features: ["24/7 Responses", "Multi-language", "Ticket Routing", "Sentiment Analysis"]
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H10V10H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 4H20V10H14V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 14H10V20H4V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 17H20M17 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Workflow Automation",
            description: "Connect your tools and create intelligent workflows that trigger automatically. From lead to close, fully automated.",
            features: ["CRM Integration", "Auto Follow-ups", "Task Assignment", "Status Updates"]
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16V8C20.9996 7.6493 20.9071 7.3048 20.7315 7.00017C20.556 6.69555 20.3037 6.44145 20 6.264L13 2.264C12.696 2.08614 12.3511 1.99231 12 1.99231C11.6489 1.99231 11.304 2.08614 11 2.264L4 6.264C3.69626 6.44145 3.44398 6.69555 3.26846 7.00017C3.09294 7.3048 3.00036 7.6493 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9998C3.44398 17.3045 3.69626 17.5586 4 17.736L11 21.736C11.304 21.9139 11.6489 22.0077 12 22.0077C12.3511 22.0077 12.696 21.9139 13 21.736L20 17.736C20.3037 17.5586 20.556 17.3045 20.7315 16.9998C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.27002 6.95996L12 12.01L20.73 6.95996M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Inventory Management",
            description: "Real-time stock tracking, automatic reordering, and demand forecasting. Never run out of stock or overstock again.",
            features: ["Stock Alerts", "Auto Reorder", "Demand Forecast", "Supplier Sync"]
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Reporting & Analytics",
            description: "Automated reports delivered to your inbox daily, weekly, or monthly. Real-time dashboards with actionable insights.",
            features: ["Auto Reports", "Custom Dashboards", "KPI Tracking", "Trend Analysis"]
        },
        {
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Email & Communication",
            description: "Intelligent email sorting, auto-responses, and follow-up sequences. Never miss an important message again.",
            features: ["Smart Inbox", "Auto Replies", "Follow-up Sequences", "Meeting Scheduling"]
        }
    ]

    return (
        <section className="services section" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Our Services</span>
                    <h2 className="section-title">
                        What We <span className="gradient-text">Automate For You</span>
                    </h2>
                    <p className="section-subtitle">
                        We specialize in automating the most time-consuming tasks across your entire business operation.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="service-feature">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="services-cta">
                    <p>Don't see what you need? <strong>We build custom solutions too.</strong></p>
                    <a href="#cta" className="btn btn-secondary">
                        Discuss Your Requirements
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Services
