import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    const isHomePage = location.pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    const navLinks = [
        { href: isHomePage ? '#services' : '/#services', label: 'Services' },
        { href: isHomePage ? '#process' : '/#process', label: 'Process' },
        { href: isHomePage ? '#results' : '/#results', label: 'Results' },
        { href: isHomePage ? '#pricing' : '/#pricing', label: 'Pricing' },
        { href: '/blog', label: 'Blog', isRoute: true },
    ]

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/logo.png" alt="Shiftora AI" className="logo-image" />
                </Link>

                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        link.isRoute ? (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="navbar-link"
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <a
                                key={link.href}
                                href={link.href}
                                className="navbar-link"
                            >
                                {link.label}
                            </a>
                        )
                    ))}
                </div>

                <div className="navbar-actions">
                    <ThemeToggle />
                    <a href="https://cal.com/shreshth-daga-rxfhkj/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Book a Call
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>

                <button
                    className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
