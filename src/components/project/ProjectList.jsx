import React from 'react'
import ProjectDetails from './ProjectDetails'

const ProjectList = ({ projects }) => {
    return (
        <div className="container mx-auto px-4 lg:px-20 sm:grid grid-cols-2 gap-10 mt-10 mb-16">
            {projects?.map((project) => (
                <ProjectDetails key={project.id} {...project} />
                /* <ProjectDetails key={project.id} project={project} />  */
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