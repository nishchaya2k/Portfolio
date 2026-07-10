import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { scrollToSection } from "./utils/helpers"

const navItems = [
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
]

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            const scrollPosition = window.scrollY + 120
            let currentSection = ''

            navItems.forEach(({ id }) => {
                const section = document.getElementById(id)
                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = id
                }
            })

            setActiveSection(currentSection)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItemClickHandler = (section, e) => {
        e.preventDefault()
        setActiveSection(section)
        scrollToSection(section)
    }

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-sm' 
                    : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container-padding">
                <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Scroll to top"
                    >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                            N
                        </div>
                        <div className="text-xl font-semibold text-neutral-800">
                            <span className="font-bold">Nishchaya</span> Narula
                        </div>
                    </motion.a>

                    {/* Divider for mobile */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent my-4 md:hidden"></div>

                    {/* Navigation Items */}
                    <nav className="flex gap-6 md:gap-8" aria-label="Main navigation">
                        {navItems.map((item, index) => {
                            const isActive = activeSection === item.id

                            return (
                            <motion.a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`text-sm font-medium transition-colors relative group ${
                                    isActive
                                        ? 'text-primary-600'
                                        : 'text-neutral-600 hover:text-primary-600'
                                }`}
                                onClick={(e) => menuItemClickHandler(item.id, e)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                aria-label={`Navigate to ${item.label} section`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {item.label}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-300 ${
                                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </motion.a>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar
