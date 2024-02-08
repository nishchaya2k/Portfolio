import React from 'react'
import { Link } from "react-router-dom";
import contact from "../images/contact.svg";
import resume from "../images/resume.svg";
import project from "../images/project.svg"
import { scrollToSection } from "./utils/helpers"

const Navbar = () => {


    const menuItemClickHandler = (section) => {
        scrollToSection(section);
    };

    return (
        <div>
            <nav>
                <div className='flex flex-col md:flex-row justify-between items-center h-32 md:px-12 md: mt-2'>
                    <div className='flex justify-center items-center gap-4'>
                        <div className='w-14 h-14 bg-green-400 rounded-full flex justify-center items-center text-3xl font-bold text-white'>N</div>
                        <div className='text-xl'><span className='font-semibold'>Nishchaya</span> Narula</div>
                    </div>

                    <span className='w-[220px] h-[1px] my-4 border md:hidden '></span>

                    <div className='flex gap-9 text-[#757575] hover:text-gray-700 text-sm space-x-4'>
                        <a href="#" className='flex flex-col items-center justify-center gap-1' onClick={() => menuItemClickHandler("resume")}>
                            <img className='h-8 w-8' src={resume} alt='' />
                            <span>Resume</span>
                        </a>
                        <a href="#" className='flex flex-col items-center justify-center gap-1' onClick={() => menuItemClickHandler("projects")}>
                            <img className='h-8 w-8' src={project} alt='' />
                            <span>Projects</span>
                        </a>
                        <a href="#" className='flex flex-col items-center justify-center gap-1' onClick={() => menuItemClickHandler("contact")}>
                            <img className='h-8 w-8' src={contact} alt='' />
                            <span>Contact</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
