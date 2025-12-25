import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './BlogPostPage.css'

function BlogPostPage({ post }) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [post])

    // Convert markdown-style content to HTML
    const formatContent = (content) => {
        if (!content) return ''

        let html = content
            // Headers
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            // Bold
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Lists
            .replace(/^- (.*$)/gm, '<li>$1</li>')
            .replace(/^(\d+)\. (.*$)/gm, '<li>$2</li>')
            // Paragraphs
            .replace(/\n\n/g, '</p><p>')
            // Links
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
            // Table rows
            .replace(/\|(.*?)\|/g, (match, content) => {
                const cells = content.split('|').map(cell => `<td>${cell.trim()}</td>`).join('')
                return `<tr>${cells}</tr>`
            })

        return `<p>${html}</p>`
    }

    return (
        <>
            <Helmet>
                <title>{post.metaTitle}</title>
                <meta name="description" content={post.metaDescription} />
                <meta property="og:title" content={post.metaTitle} />
                <meta property="og:description" content={post.metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={post.publishDate} />
                <meta property="article:author" content={post.author} />
                <link rel="canonical" href={`https://shiftora.ai/blog/${post.slug}`} />

                {/* Article Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": post.title,
                        "description": post.metaDescription,
                        "author": {
                            "@type": "Organization",
                            "name": post.author
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Shiftora AI",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://shiftora.ai/favicon.svg"
                            }
                        },
                        "datePublished": post.publishDate,
                        "dateModified": post.publishDate
                    })}
                </script>
            </Helmet>

            <article className="blog-post">
                <div className="blog-post-hero">
                    <div className="blog-hero-bg">
                        <div className="bg-grid"></div>
                    </div>

                    <div className="container">
                        <Link to="/blog" className="back-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Back to Blog
                        </Link>

                        <div className="post-header">
                            <span className="post-category badge badge-purple">{post.category}</span>
                            <h1 className="post-title">{post.title}</h1>
                            <div className="post-meta">
                                <span className="post-author">{post.author}</span>
                                <span>•</span>
                                <span>{post.publishDate}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-post-content">
                    <div className="container">
                        <div className="content-wrapper">
                            <div
                                className="prose"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <aside className="post-sidebar">
                                <div className="sidebar-card card">
                                    <h3>Ready to Automate?</h3>
                                    <p>Get a free automation audit and see how much you could save.</p>
                                    <Link to="/#cta" className="btn btn-primary">
                                        Get Free Audit
                                    </Link>
                                </div>

                                <div className="sidebar-card card">
                                    <h3>Share This Article</h3>
                                    <div className="share-links">
                                        <a
                                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://shiftora.ai/blog/${post.slug}`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="share-link"
                                        >
                                            Twitter
                                        </a>
                                        <a
                                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://shiftora.ai/blog/${post.slug}`)}&title=${encodeURIComponent(post.title)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="share-link"
                                        >
                                            LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </article>

            <section className="related-cta section">
                <div className="container">
                    <div className="related-cta-content card">
                        <h2>Want to Learn More?</h2>
                        <p>Subscribe to get the latest AI automation insights delivered to your inbox.</p>
                        <div className="subscribe-form">
                            <input type="email" placeholder="Enter your email" className="input" />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPostPage
