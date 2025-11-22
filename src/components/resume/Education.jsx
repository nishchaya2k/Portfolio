import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const Education = () => {
    const experiences = [
        {
            period: "September 2024 - Present",
            company: "iDesign.Market",
            role: "Frontend Developer",
            description: null
        },
        {
            period: "March 2024 - June 2024",
            company: "Tipzy - SST Pvt Ltd",
            role: "Frontend Developer Intern",
            description: null
        },
        {
            period: "Feb 2022 - Dec 2023",
            company: "Srijan / A Material+ Company",
            roles: [
                { title: "Developer L1", period: "Sept 2022 - Dec 2023" },
                { title: "JavaScript Developer", period: "Feb 2022 - Aug 2022" }
            ]
        }
    ]

    return (
        <div className='grid lg:grid-cols-2 gap-8 lg:gap-12'>
            {/* Experience */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100"
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                        <FaBriefcase className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Experience</h3>
                    <span className="text-sm text-neutral-500 font-medium">(2+ yrs)</span>
                </div>

                <div className="space-y-6 relative pl-6 border-l-2 border-neutral-200">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white shadow-md"></div>
                            
                            <div className="mb-2">
                                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full mb-2">
                                    {exp.period}
                                </span>
                                <h4 className="text-lg font-bold text-primary-600 mb-1">{exp.company}</h4>
                                {exp.role ? (
                                    <p className="text-base font-semibold text-neutral-700">{exp.role}</p>
                                ) : (
                                    <div className="space-y-1">
                                        {exp.roles.map((role, idx) => (
                                            <p key={idx} className="text-base font-semibold text-neutral-700">
                                                {role.title}
                                                <span className="text-xs text-neutral-500 font-normal ml-2">({role.period})</span>
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Education */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-neutral-100"
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                        <FaGraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900">Education</h3>
                </div>

                <div className="relative pl-6 border-l-2 border-neutral-200">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 border-4 border-white shadow-md"></div>
                        
                        <div>
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-600 bg-accent-50 rounded-full mb-2">
                                2018 - 2022
                            </span>
                            <h4 className="text-lg font-bold text-accent-600 mb-1">
                                Lovely Professional University, Punjab
                            </h4>
                            <p className="text-base font-semibold text-neutral-700">
                                B.Tech (Computer Science And Engineering)
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Education
