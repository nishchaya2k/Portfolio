import React from 'react'
import Nishchaya3 from "../images/Nishchaya3.jpeg"
import DynamicText from './DynamicText'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import { scrollToSection } from "./utils/helpers"
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa'

const Description = () => {
  const menuItemClickHandler = (section) => {
    scrollToSection(section)
  }

  const goToLink = (link) => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

  const socialLinks = [
    { icon: FaTwitter, link: "https://x.com/n_narula", label: "Twitter" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/nishchaya-narula/", label: "LinkedIn" },
    { icon: FaGithub, link: "https://github.com/nishchaya2k", label: "GitHub" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 section-padding">
      <div className="container-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left section - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-accent-400 to-primary-600 rounded-3xl blur-2xl opacity-20 -z-10"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={Nishchaya3}
                  alt="Nishchaya Narula"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl opacity-80 blur-xl"></div>
            </div>
          </motion.div>

          {/* Right section - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2 max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-primary-600 font-medium text-sm uppercase tracking-wider mb-2"
            >
              Hello, I'm
            </motion.p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4">
              <span className="block">Nishchaya</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Narula
              </span>
            </h1>

            <div className="mb-6 h-12">
              <DynamicText />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-neutral-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Aspiring React developer with solid expertise in <strong className="text-neutral-800">React.js</strong> and <strong className="text-neutral-800">JavaScript</strong>, and an unwavering passion for mastering skills in building web applications. Eagerly seeking opportunities to apply profound knowledge and gain practical experience in a collaborative and innovative development environment.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mb-8"
              aria-label="Social media links"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.button
                    key={social.label}
                    onClick={() => goToLink(social.link)}
                    className="w-12 h-12 rounded-xl bg-neutral-100 hover:bg-primary-50 flex items-center justify-center text-neutral-700 hover:text-primary-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Visit ${social.label} profile`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.button>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.button
                onClick={() => goToLink("https://www.linkedin.com/in/nishchaya-narula/")}
                className="px-8 py-3 rounded-xl border-2 border-primary-500 text-primary-600 font-semibold hover:bg-primary-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Visit LinkedIn profile"
              >
                Visit LinkedIn
              </motion.button>

              <motion.button
                onClick={() => menuItemClickHandler("contact")}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Navigate to contact section"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-16 hidden lg:flex flex-col items-center gap-2 text-neutral-400"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Description
