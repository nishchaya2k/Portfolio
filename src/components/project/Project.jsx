import React from 'react'
import ProjectList from './ProjectList'
import projectsData from './ProjectData'
import { motion } from 'framer-motion'

const Project = () => {
    return (
        <section id='projects' className="py-16 lg:py-24 bg-white">
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">P</span>rojects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-neutral-600 text-lg max-w-2xl mx-auto">
                        A collection of projects showcasing my skills and experience in web development
                    </p>
                </motion.div>

                {/* Projects List */}
                <ProjectList projects={projectsData} />
            </div>
        </section>
    )
}

export default Project


/*
1. object-fit Property:

It specifies how the content of the replaced element should be resized to fit its container.
It has values like fill, contain, cover, none, and more.

2. object-cover:

It is a value for the object-fit property.
It scales the content (such as an image) to maintain its aspect ratio while completely covering
the container box.

3. flex-1 is a shorthand property for setting the flex-grow, flex-shrink, and flex-basis 
    properties of a flex item.

flex-grow: It defines the ability for a flex item to grow if necessary. It specifies the factor
by which the flex item will grow relative to the other flex items in the flex container. A value 
of 1 means the item will grow to fill the available space.

flex-shrink: It defines the ability for a flex item to shrink if necessary. It specifies the 
factor by which the flex item will shrink relative to the other flex items in the flex container.
A value of 1 means the item will shrink to fit the available space.

flex-basis: It defines the default size of a flex item before any available space is distributed.
If set to 0, the item will be sized according to its content.
*/