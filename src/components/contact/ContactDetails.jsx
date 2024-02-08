import React from 'react'
import { FaLinkedin, FaWhatsapp, FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";



//lg:absolute lg:right-[15%] lg:top-[45%]
// absolute max-lg:static
const ContactDetails = () => {
    return (
        <div className='box-border bg-[#54CA95] border-t-2  rounded-lg py-10 w-full lg:w-80 xl:flex-shrink-0 xl:absolute xl:right-[120px]  xl:-bottom-36 max-xl:ml-auto '>
            <div className='p-6 text-white max-lg:ml-4' style={{ fontfamily: 'Poppins,sans-serif' }}>
                <h2 className='font-bold uppercase text-3xl mb-8'>CONTACT INFORMATION</h2>

                <div className='flex flex-col gap-2 justify-start'>
                    <div className='flex gap-3 items-center'><p><FaLocationArrow />
                    </p>GURUGRAM,HARYANA</div>
                    <div className='flex gap-3 items-center'><p><BsFillTelephoneFill /></p> +918684833438</div>
                    <div className='flex gap-3 items-center'><p><TfiEmail />
                    </p>n.nishchaya2000@gmail.com</div>
                </div>

                <div className='flex gap-3 mt-6'>
                    <span className='bg-white rounded-2xl p-[6px] cursor-pointer'> <FaLinkedin className='text-[#54CA95]' /></span>

                    <span className='bg-white rounded-2xl p-[6px] cursor-pointer'><FaWhatsapp className='text-[#54CA95]' /></span>
                </div>
            </div>
        </div>
    )
}

export default ContactDetails
