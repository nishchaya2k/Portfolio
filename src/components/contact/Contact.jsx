import React from 'react'
import ContactDetails from './ContactDetails'
import MessageForm from './MessageForm'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <section id="contact" className="py-16 lg:py-24 bg-neutral-50">
            <div className="container-padding">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">C</span>ontact
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                        Let's connect! Feel free to reach out for opportunities or collaborations.
                    </p>
                </motion.div>

                {/* Contact Content */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <MessageForm />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ContactDetails />
                    </motion.div>
                </div>
                </div>
            </section>
    )
}

export default Contact
