import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'

// Service Data
import { services } from './data/services'
import { blogPosts } from './data/blogPosts'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Service Pages */}
          {services.map((service) => (
            <Route
              key={service.slug}
              path={`/services/${service.slug}`}
              element={<ServicePage service={service} />}
            />
          ))}

          {/* Blog Pages */}
          <Route path="/blog" element={<BlogPage posts={blogPosts} />} />
          {blogPosts.map((post) => (
            <Route
              key={post.slug}
              path={`/blog/${post.slug}`}
              element={<BlogPostPage post={post} />}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
