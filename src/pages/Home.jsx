import React from 'react'
import Navbar from '../components/Navbar'
import Description from '../components/Description'
import Resume from '../components/resume/Resume'
import Project from '../components/project/Project'
import Contact from '../components/contact/Contact'



const Home = () => {
    return (
        <div className='w-full bg-white xl:rounded-[70px] lg:my-16 lg:mx-24 p-2'>
            <Navbar />
            <Description />
            <Resume />
            <Project />
            <Contact />
        </div>
    )
}

export default Home
