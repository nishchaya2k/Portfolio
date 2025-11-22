import React from 'react'
import { FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import { motion } from 'framer-motion'

const ContactDetails = () => {
    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            label: "Location",
            value: "Gurugram, Haryana",
            link: null,
        },
        {
            icon: FaPhone,
            label: "Phone",
            value: "+91 8684833438",
            link: "tel:+918684833438",
        },
        {
            icon: FaEnvelope,
            label: "Email",
            value: "n.nishchaya2000@gmail.com",
            link: "mailto:n.nishchaya2000@gmail.com",
        },
    ]

    const socialLinks = [
        {
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/nishchaya-narula/",
            label: "LinkedIn",
            color: "text-blue-600",
        },
        {
            icon: FaWhatsapp,
            link: "https://wa.me/918684833438",
            label: "WhatsApp",
            color: "text-green-600",
        },
    ]

    return (
        <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 rounded-2xl p-6 md:p-8 text-white shadow-xl h-full flex flex-col">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Get in Touch</h3>
                <p className="text-primary-50 mb-8">
                    Prefer direct contact? Reach out through any of these channels.
                </p>

                <div className="space-y-6 mb-8">
                    {contactInfo.map((info, index) => {
                        const Icon = info.icon
                        const content = (
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-primary-100 uppercase tracking-wider mb-1">
                                        {info.label}
                                    </p>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-white font-medium hover:text-primary-100 transition-colors"
                                            aria-label={`Contact via ${info.label}: ${info.value}`}
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-white font-medium">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        )

                        return (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                {content}
                            </motion.div>
                        )
                    })}
                </div>

                <div className="pt-6 border-t border-white/20">
                    <p className="text-sm text-primary-100 mb-4">Connect on social media</p>
                    <div className="flex gap-4">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-xl bg-white flex items-center justify-center hover:bg-primary-50 transition-colors shadow-lg"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={`Visit ${social.label} profile`}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Icon className={`w-5 h-5 ${social.color}`} />
                                </motion.a>
                            )
                        })}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ContactDetails
