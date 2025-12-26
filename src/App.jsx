import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))

// Data
import { services } from './data/services'

// Loading fallback component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    background: 'var(--bg-primary)'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid var(--border-color)',
      borderTop: '3px solid var(--primary)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
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

              {/* Blog Pages - Dynamic routing to improve bundle size */}
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  )
}

export default App
