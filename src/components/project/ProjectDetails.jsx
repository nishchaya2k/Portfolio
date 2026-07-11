import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaClock } from 'react-icons/fa'

const FEATURES_PREVIEW_COUNT = 3

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
    const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
    const [areFeaturesExpanded, setAreFeaturesExpanded] = useState(false)

    const description = useMemo(() => {
        if (Array.isArray(functionality)) {
            return functionality.join(' ')
        }
        return functionality || ''
    }, [functionality])

    const visibleFeatures = areFeaturesExpanded
        ? features
        : features?.slice(0, FEATURES_PREVIEW_COUNT)
    const hasMoreFeatures = (features?.length || 0) > FEATURES_PREVIEW_COUNT

    return (
        <article className="relative h-full pt-4">
            {isNew && (
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-4 right-0 z-30 flex translate-x-1/4 -translate-y-1/2 items-center gap-2 rounded-full border-2 border-white bg-gradient-to-r from-emerald-500 via-primary-500 to-accent-600 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_rgba(14,165,233,0.5)]"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                    </span>
                    New
                </motion.span>
            )}

            <motion.div
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {/* Images — main on top, two below */}
                <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 p-2 md:p-3">
                    <div className="mb-2 h-44 overflow-hidden rounded-lg bg-white shadow-sm md:h-52 lg:h-56">
                        <motion.img
                            className="h-full w-full object-contain"
                            src={images.image1}
                            alt={`${projectDetail} - Main view`}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="h-28 flex-1 overflow-hidden rounded-lg bg-white shadow-sm md:h-32 lg:h-36">
                            <motion.img
                                className="h-full w-full object-contain"
                                src={images.image2}
                                alt={`${projectDetail} - Secondary view`}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                loading="lazy"
                            />
                        </div>
                        <div className="h-28 flex-1 overflow-hidden rounded-lg bg-white shadow-sm md:h-32 lg:h-36">
                            <motion.img
                                className="h-full w-full object-contain"
                                src={images.image3}
                                alt={`${projectDetail} - Additional view`}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-2xl font-bold text-neutral-900">{projectDetail}</h3>

                    <div className="mb-4 flex flex-wrap gap-2">
                        {technologies?.map((technology, index) => (
                            <span
                                key={index}
                                className="rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    {description && (
                        <div className="mb-4">
                            <p
                                className={`text-sm leading-relaxed text-neutral-600 ${
                                    isDescriptionExpanded ? '' : 'line-clamp-3'
                                }`}
                            >
                                {description}
                            </p>
                            {description.length > 120 && (
                                <button
                                    type="button"
                                    onClick={() => setIsDescriptionExpanded((prev) => !prev)}
                                    className="mt-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
                                    aria-expanded={isDescriptionExpanded}
                                >
                                    {isDescriptionExpanded ? 'Read less' : 'Read more'}
                                </button>
                            )}
                        </div>
                    )}

                    {features?.length > 0 && (
                        <div className="mb-4">
                            <ul className="space-y-1.5">
                                {visibleFeatures.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2 text-sm text-neutral-600"
                                    >
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            {hasMoreFeatures && (
                                <button
                                    type="button"
                                    onClick={() => setAreFeaturesExpanded((prev) => !prev)}
                                    className="mt-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
                                    aria-expanded={areFeaturesExpanded}
                                >
                                    {areFeaturesExpanded
                                        ? 'Show less'
                                        : `Show ${features.length - FEATURES_PREVIEW_COUNT} more`}
                                </button>
                            )}
                        </div>
                    )}

                    <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
                        <FaClock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>Duration: {duration}</span>
                    </div>

                    <div className="mt-auto flex gap-3 border-t border-neutral-100 pt-4">
                        <motion.a
                            href={projectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg ${
                                gitLink ? 'flex-1' : 'w-full'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            aria-label={`View ${projectDetail} live preview`}
                        >
                            <FaExternalLinkAlt className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            Preview
                        </motion.a>
                        {gitLink && (
                            <motion.a
                                href={gitLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-800 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-neutral-900"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label={`View ${projectDetail} source code on GitHub`}
                            >
                                <FaGithub className="h-4 w-4 shrink-0" aria-hidden="true" />
                                Code
                            </motion.a>
                        )}
                    </div>
                </div>
            </motion.div>
        </article>
    )
}

export default ProjectDetails
