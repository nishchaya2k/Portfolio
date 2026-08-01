import React, { Suspense, lazy } from 'react'
import Navbar from '../components/Navbar'
import Description from '../components/Description'
import SectionShimmer from '../components/SectionShimmer'

const Resume = lazy(() => import('../components/resume/Resume'))
const Project = lazy(() => import('../components/project/Project'))
const Contact = lazy(() => import('../components/contact/Contact'))

const Home = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
            <Navbar />
            <main>
                <Description />
                <Suspense fallback={<SectionShimmer tone="muted" />}>
                    <Resume />
                </Suspense>
                <Suspense fallback={<SectionShimmer tone="plain" />}>
                    <Project />
                </Suspense>
                <Suspense fallback={<SectionShimmer tone="muted" />}>
                    <Contact />
                </Suspense>
            </main>
        </div>
    )
}

export default Home
