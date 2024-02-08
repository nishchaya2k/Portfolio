import React from 'react'
import Nishchaya3 from "../images/Nishchaya3.jpeg"
import DynamicText from './DynamicText'
import whatsapp from '../images/whatsapp.svg'
import leetcode from '../images/leetcode.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import { scrollToSection } from "./utils/helpers"



const Description = () => {

  const menuItemClickHandler = (section) => {
    scrollToSection(section);
  };

  const goToLink = (link) => {
    window.open(link, "_blank");
  }

  return (
    <div>
      <section>

        <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-32 p-4 mt-20'>
          {/* left section */}
          <div className='h-[300px] w-[300px] rounded-full drop-shadow-2xl border-[17px] border-slate-200 overflow-hidden'>
            <div className='w-full h-[calc(100%)] bg-no-repeat bg-cover bg-left-center' style={{ backgroundImage: `url(${Nishchaya3})` }}>
            </div>
          </div>

          {/* right section */}
          <div className='w-full md:w-4/12 flex flex-col items-center md:items-start'>
            <h3 className='text-gray-500 tracking-wide'>Nishchaya Narula</h3>
            <DynamicText />
            <p className='text-gray-600 tracking-wide whitespace-normal text-sm text-justify'>Aspiring  React  developer  with  solid  expertise  in  <b>React.js, JavaScript,</b>  and  an  unwavering  passion
              and  vision  for  mastering  skills  in  building  web  applications.  Eagerly  seeking
              opportunities  to  apply  profound  knowledge  and gain practical experience in a
              collaborative and innovative development environment.
            </p>
            <div className='flex gap-2 my-8'>

              <span className='h-[20px] w-6 cursor-pointer'
                onClick={() => goToLink("https://www.linkedin.com/in/nishchaya-narula/")}>
                <img className='h-full w-full' src={linkedin} />
              </span>

              {/* <span className='h-[20px] w-6 cursor-pointer'
                onClick={() => goToLink("https://leetcode.com/narula_1/")}>
                <img className='h-full w-full' src={leetcode} />
              </span> */}


              <span className='h-[20px] w-6 cursor-pointer'
                onClick={() => goToLink("https://github.com/nishchaya2k")}>
                <img className='h-full w-full' src={github} />
              </span>

            </div>

            <div className='flex flex-col items-center justify-center gap-6'>
              <button className='w-56 rounded-3xl p-2 border-2 border-green-400 hover:bg-[#54CA95] hover:cursor-pointer transition duration-300'>Download Resume</button>
              <button className='w-48 rounded-3xl p-2 bg-[#54CA95] hover:bg-[#32be7f] transition duration-300 hover:cursor-pointer' onClick={() => menuItemClickHandler("contact")}>Contact me</button>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Description
