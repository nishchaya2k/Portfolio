import React from 'react'
import Navbar from '../components/Navbar'
import Description from '../components/Description'
import Resume from '../components/resume/Resume'
import Project from '../components/project/Project'
import Contact from '../components/contact/Contact'

const Home = () => {
    return (
        <div className='w-full min-h-screen bg-white'>
            <Navbar />
            <main>
                <Description />
                <Resume />
                <Project />
                <Contact />
            </main>
        </div>
    )
}

export default Home
