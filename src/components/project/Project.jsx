import React from 'react'
import ProjectList from './ProjectList'
import projectsData from './ProjectData'

// import movix1 from '../../images/movix1.png'
// import movix2 from '../../images/movix2.png'
// import movix3 from '../../images/movix3.png'
// import shoppinCart1 from '../../images/shoppingCart1.png'
// import shoppinCart2 from '../../images/shoppingCart2.png'
// import shoppinCart3 from '../../images/shoppingCart3.png'

const Project = () => {
    return (
        <div>
            <section id='projects'>
                <div>
                    {/* heading */}
                    <div className='bg-[#FCFCFC] border-t-2 border-b-2 '>
                        <h1 className='text-4xl font-bold py-12 pl-12'><span className="text-[#54CA95]">P</span>rojects</h1>
                    </div>

                    {/* Projects List */}
                    <ProjectList projects={projectsData} />
                </div>
            </section>
        </div>
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