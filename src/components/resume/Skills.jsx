import React from 'react'
import { motion } from 'framer-motion'

const Skills = ({ data, heading }) => {
    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100 h-full">
            <h3 className="text-2xl font-bold mb-8 text-neutral-900">{heading}</h3>
            <div className="space-y-6">
                {data.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-base font-semibold text-neutral-800">
                                {skill.name}
                            </span>
                            <span className="text-sm font-medium text-neutral-500">
                                {skill.percentage}%
                            </span>
                        </div>
                        <div className="h-2.5 bg-neutral-100 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export const SkillTags = ({ tags, heading }) => {
    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100">
            <h3 className="text-2xl font-bold mb-6 text-neutral-900">{heading}</h3>
            <div className="flex flex-wrap gap-2.5">
                {tags.map((tag, index) => (
                    <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.04 }}
                        className="px-3.5 py-2 text-sm font-medium bg-primary-50 text-primary-700 rounded-full border border-primary-100"
                    >
                        {tag}
                    </motion.span>
                ))}
            </div>
        </div>
    )
}

export default Skills
