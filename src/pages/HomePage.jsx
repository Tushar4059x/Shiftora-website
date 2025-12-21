import { lazy, Suspense } from 'react'
import Hero from '../components/Hero'

// Lazy load below-the-fold components to improve LCP
const Problems = lazy(() => import('../components/Problems'))
const Solution = lazy(() => import('../components/Solution'))
const Services = lazy(() => import('../components/Services'))
const Process = lazy(() => import('../components/Process'))
const Results = lazy(() => import('../components/Results'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const Pricing = lazy(() => import('../components/Pricing'))
const CTA = lazy(() => import('../components/CTA'))

// Simple loading placeholder
const SectionLoader = () => (
    <div style={{ minHeight: '200px' }}></div>
)

function HomePage() {
    return (
        <>
            {/* Hero loads immediately - critical for LCP */}
            <Hero />

            {/* Below-the-fold sections lazy loaded */}
            <Suspense fallback={<SectionLoader />}>
                <Problems />
                <Solution />
                <Services />
                <Process />
                <Results />
                <Testimonials />
                <Pricing />
                <CTA />
            </Suspense>
        </>
    )
}

export default HomePage
