import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        services: [
            { label: 'Data Entry Automation', href: '/services/data-entry-automation', isRoute: true },
            { label: 'Customer Support AI', href: '/services/customer-support-ai', isRoute: true },
            { label: 'Workflow Automation', href: '/services/workflow-automation', isRoute: true },
            { label: 'Reporting & Analytics', href: '/services/reporting-analytics-automation', isRoute: true },
            { label: 'Email Automation', href: '/services/email-communication-automation', isRoute: true }
        ],
        company: [
            { label: 'About Us', href: '/#hero' },
            { label: 'Case Studies', href: '/#results' },
            { label: 'Process', href: '/#process' },
            { label: 'Pricing', href: '/#pricing' },
            { label: 'Contact', href: '/#cta' }
        ],
        resources: [
            { label: 'Blog', href: '/blog', isRoute: true },
            { label: 'What is AI Automation?', href: '/blog/what-is-ai-automation', isRoute: true },
            { label: 'Signs You Need Automation', href: '/blog/5-signs-your-business-needs-automation', isRoute: true },
            { label: 'ROI of AI Automation', href: '/blog/roi-of-ai-automation', isRoute: true }
        ]
    }

    const socialLinks = [
        {
            label: 'Twitter',
            href: 'https://twitter.com',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            label: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            label: 'YouTube',
            href: 'https://youtube.com',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22.54 6.42C22.4212 5.94541 22.1792 5.51057 21.8387 5.15941C21.4981 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50195 4.84824 2.16141 5.19941C1.82087 5.55057 1.57885 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17817 18.2945C2.51803 18.6308 2.93885 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.4981 18.6118 21.8387 18.2606C22.1792 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0113 9.96295 22.8573 8.1787 22.54 6.42Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ]

    const renderLink = (link, index) => {
        if (link.isRoute) {
            return (
                <li key={index}>
                    <Link to={link.href} className="footer-link">{link.label}</Link>
                </li>
            )
        }
        return (
            <li key={index}>
                <a href={link.href} className="footer-link">{link.label}</a>
            </li>
        )
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src="/logo.png" alt="Shiftora AI" className="logo-image" />
                        </Link>
                        <p className="footer-tagline">
                            Empowering businesses with intelligent AI automation.
                            Save time, reduce costs, and scale effortlessly.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <p className="footer-heading" aria-label="Services navigation">Services</p>
                            <ul className="footer-list">
                                {footerLinks.services.map(renderLink)}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <p className="footer-heading" aria-label="Company navigation">Company</p>
                            <ul className="footer-list">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a href={link.href} className="footer-link">{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <p className="footer-heading" aria-label="Resources navigation">Resources</p>
                            <ul className="footer-list">
                                {footerLinks.resources.map(renderLink)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Shiftora AI. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <a href="/#cta" className="footer-link">Contact Us</a>
                        <a href="https://cal.com/shreshth-daga-rxfhkj/30min" target="_blank" rel="noopener noreferrer" className="footer-link">Book a Call</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
