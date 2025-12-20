import './Testimonials.css'

function Testimonials() {
    const testimonials = [
        {
            quote: "ScaletrailAI transformed our operations completely. We went from spending 6 hours daily on data entry to just 30 minutes of oversight. The ROI was visible within the first week.",
            author: "Sarah Chen",
            role: "Operations Director",
            company: "TechFlow Solutions",
            rating: 5,
            avatar: "SC"
        },
        {
            quote: "I was skeptical about AI automation at first, but the team at ScaletrailAI made the transition seamless. Our customer response time dropped from 24 hours to under 3 minutes.",
            author: "Michael Rodriguez",
            role: "CEO",
            company: "Elevate Retail",
            rating: 5,
            avatar: "MR"
        },
        {
            quote: "The automation systems they built for us handle 80% of our customer inquiries without any human intervention. My team can finally focus on strategic work instead of repetitive tasks.",
            author: "Emily Watson",
            role: "Customer Success Lead",
            company: "GrowthMetrics",
            rating: 5,
            avatar: "EW"
        },
        {
            quote: "We've reduced our operational costs by 40% since partnering with ScaletrailAI. Their process was transparent, and they delivered exactly what they promised—on time.",
            author: "David Park",
            role: "Founder",
            company: "Nexus Logistics",
            rating: 5,
            avatar: "DP"
        },
        {
            quote: "The inventory automation alone saved us from two stockouts that would have cost us $50K each. ScaletrailAI pays for itself many times over every single month.",
            author: "Jessica Torres",
            role: "Supply Chain Manager",
            company: "Urban Goods Co.",
            rating: 5,
            avatar: "JT"
        },
        {
            quote: "Best investment we've made this year. Period. Our team morale improved because they're no longer doing mind-numbing repetitive work. Everyone's more engaged now.",
            author: "Alex Kim",
            role: "HR Director",
            company: "Innovate Labs",
            rating: 5,
            avatar: "AK"
        }
    ]

    const renderStars = (rating) => {
        return Array(rating).fill(0).map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
        ))
    }

    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Testimonials</span>
                    <h2 className="section-title">
                        Trusted By <span className="gradient-text">Industry Leaders</span>
                    </h2>
                    <p className="section-subtitle">
                        Don't just take our word for it. Here's what our clients have to say about working with us.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card card">
                            <div className="testimonial-rating">
                                {renderStars(testimonial.rating)}
                            </div>
                            <blockquote className="testimonial-quote">
                                "{testimonial.quote}"
                            </blockquote>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.avatar}
                                </div>
                                <div className="author-info">
                                    <div className="author-name">{testimonial.author}</div>
                                    <div className="author-role">{testimonial.role}, {testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonials-logos">
                    <p className="logos-label">Trusted by innovative companies</p>
                    <div className="logos-grid">
                        {['TechFlow', 'Elevate', 'GrowthMetrics', 'Nexus', 'Urban Goods', 'Innovate'].map((logo, i) => (
                            <div key={i} className="logo-item">
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
