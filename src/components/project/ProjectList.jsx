import React from 'react'
import ProjectDetails from './ProjectDetails'
import { motion } from 'framer-motion'

const ProjectList = ({ projects }) => {
    return (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {projects?.map((project, index) => (
                <motion.div
                    key={project.id}
                    className="h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <ProjectDetails {...project} />
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectList


/*  
<ProjectDetails key={project.id} project={project} /> 
< ProjectDetails key = { project.id } {...project } />

both are correct ways to send data to component, but different implications based on how the
data is structured.


-->  < ProjectDetails key = { project.id } {...project } />
1. This approach spreads the properties of the project object as individual props to the
ProjectDetails component.

2. It's useful when the structure of the project object aligns well with the expected props of
the ProjectDetails component. For example, if project has properties like id, images,
projectDetail, etc., and ProjectDetails expects these as separate props.

-->  < ProjectDetails key = { project.id } project={project} />
1. In this approach, the entire project object is passed as a single prop named project.







*/