import React from 'react'
import ContactDetails from './ContactDetails'
import MessageForm from './MessageForm'

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div>
                    {/* heading */}
                    <div className='bg-[#FCFCFC] border-t-2 border-b-2'>
                        <h1 className='text-4xl font-bold py-12 pl-12'><span className="text-[#54CA95]">C</span>ontact</h1>
                    </div>

                    <div className='flex max-lg:flex-col mt-24 mb-16 relative lg:mb-96 '>
                        <MessageForm />
                        <ContactDetails />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact
