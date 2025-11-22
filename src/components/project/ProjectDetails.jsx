import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaClock } from 'react-icons/fa'

const ProjectDetails = ({
    id,
    images,
    projectDetail,
    technologies,
    functionality,
    features,
    duration,
    gitLink,
    projectLink,
}) => {
    const [imageHover, setImageHover] = useState(false)

    return (
        <motion.div
            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -8 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            {/* Project Images */}
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-50">
                <div className="flex gap-2 p-2 md:p-3 h-full">
                    {/* Main Image - Left Side */}
                    <div className="w-[54%] h-full rounded-lg overflow-hidden bg-white shadow-sm">
                        <motion.img
                            className="w-full h-full object-contain"
                            src={images.image1}
                            alt={`${projectDetail} - Main view`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            loading="lazy"
                        />
                    </div>
                    {/* Secondary Images - Right Side */}
                    <div className="flex flex-col gap-2 w-[44%] h-full">
                        <div className="h-[48.5%] rounded-lg overflow-hidden bg-white shadow-sm">
                            <motion.img
                                className="w-full h-full object-contain"
                                src={images.image2}
                                alt={`${projectDetail} - Secondary view`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                loading="lazy"
                            />
                        </div>
                        <div className="h-[48.5%] rounded-lg overflow-hidden bg-white shadow-sm">
                            <motion.img
                                className="w-full h-full object-contain"
                                src={images.image3}
                                alt={`${projectDetail} - Additional view`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">{projectDetail}</h3>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies?.map((technology, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-semibold bg-primary-50 text-primary-700 rounded-full border border-primary-100"
                        >
                            {technology}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {functionality}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                    {features?.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-xs text-neutral-600 flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Duration */}
                <div className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
                    <FaClock className="w-3 h-3" />
                    <span>Duration: {duration}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-neutral-100">
                    <motion.a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`View ${projectDetail} live preview`}
                    >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Preview
                    </motion.a>
                    <motion.a
                        href={gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-800 text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`View ${projectDetail} source code on GitHub`}
                    >
                        <FaGithub className="w-4 h-4" />
                        Code
                    </motion.a>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectDetails
