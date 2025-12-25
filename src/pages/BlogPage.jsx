import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './BlogPage.css'

function BlogPage({ posts }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const featuredPosts = posts.filter(post => post.featured)
    const regularPosts = posts.filter(post => !post.featured)

    return (
        <>
            <Helmet>
                <title>AI Automation Blog | Tips, Guides & Insights | Shiftora AI</title>
                <meta name="description" content="Learn about AI automation, business process optimization, and how to save time with intelligent automation. Expert guides, case studies, and tips." />
                <meta property="og:title" content="AI Automation Blog | Shiftora AI" />
                <meta property="og:description" content="Learn about AI automation, business process optimization, and how to save time with intelligent automation." />
                <link rel="canonical" href="https://shiftora.ai/blog" />
            </Helmet>

            <section className="blog-hero">
                <div className="blog-hero-bg">
                    <div className="bg-grid"></div>
                </div>

                <div className="container">
                    <Link to="/" className="back-link">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Back to Home
                    </Link>

                    <div className="section-header">
                        <span className="section-label">Blog</span>
                        <h1 className="section-title">AI Automation <span className="gradient-text">Insights & Guides</span></h1>
                        <p className="section-subtitle">
                            Expert articles on AI automation, business efficiency, and digital transformation.
                        </p>
                    </div>
                </div>
            </section>

            {featuredPosts.length > 0 && (
                <section className="blog-featured section">
                    <div className="container">
                        <h2 className="featured-title">Featured Articles</h2>
                        <div className="featured-grid">
                            {featuredPosts.map((post) => (
                                <Link key={post.slug} to={`/blog/${post.slug}`} className="featured-card card">
                                    <div className="featured-badge badge badge-purple">Featured</div>
                                    <span className="post-category">{post.category}</span>
                                    <h3 className="post-title">{post.title}</h3>
                                    <p className="post-excerpt">{post.excerpt}</p>
                                    <div className="post-meta">
                                        <span>{post.publishDate}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="blog-list section">
                <div className="container">
                    <h2 className="list-title">All Articles</h2>
                    <div className="blog-grid">
                        {posts.map((post) => (
                            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card card">
                                <span className="post-category">{post.category}</span>
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-excerpt">{post.excerpt}</p>
                                <div className="post-meta">
                                    <span>{post.publishDate}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <span className="read-more">
                                    Read article
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="blog-cta section">
                <div className="container">
                    <div className="blog-cta-content card">
                        <h2>Ready to Automate Your Business?</h2>
                        <p>Get a free automation audit and see how much time and money you could save.</p>
                        <Link to="/#cta" className="btn btn-primary btn-large">
                            Get Your Free Audit
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPage
