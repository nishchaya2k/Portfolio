import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaClock } from 'react-icons/fa'

const ProjectDetails = ({
    images,
    projectDetail,
    technologies,
    functionality,
    features,
    duration,
    gitLink,
    projectLink,
    isNew,
}) => {
    return (
        <div className="relative pt-4">
            <motion.div
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -8 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-neutral-100 to-neutral-50">
                <div className="flex flex-col gap-2 p-2 md:p-3">
                    {/* Main Image - Full Width */}
                    <div className="w-full h-44 md:h-52 lg:h-56 rounded-lg overflow-hidden bg-white shadow-sm">
                        <motion.img
                            className="w-full h-full object-contain"
                            src={images.image1}
                            alt={`${projectDetail} - Main view`}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            loading="lazy"
                        />
                    </div>
                    {/* Secondary Images - Row Below */}
                    <div className="flex gap-2 w-full">
                        <div className="flex-1 h-28 md:h-32 lg:h-36 rounded-lg overflow-hidden bg-white shadow-sm">
                            <motion.img
                                className="w-full h-full object-contain"
                                src={images.image2}
                                alt={`${projectDetail} - Secondary view`}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                loading="lazy"
                            />
                        </div>
                        <div className="flex-1 h-28 md:h-32 lg:h-36 rounded-lg overflow-hidden bg-white shadow-sm">
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
                        className={`flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-sm ${gitLink ? 'flex-1' : 'w-full'}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={`View ${projectDetail} live preview`}
                    >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Preview
                    </motion.a>
                    {gitLink && (
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
                    )}
                </div>
            </div>
        </motion.div>

            {isNew && (
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-4 right-0 translate-x-1/4 -translate-y-1/2 z-30 flex items-center gap-2 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white rounded-full border-2 border-white bg-gradient-to-r from-emerald-500 via-primary-500 to-accent-600 shadow-[0_8px_24px_rgba(14,165,233,0.5)]"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                    </span>
                    New
                </motion.span>
            )}
        </div>
    )
}

export default ProjectDetails
