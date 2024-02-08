import React from 'react'

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
    return (
        <div className="border mb-6 lg:mb-0 bg-[#54CA95] rounded-lg p-6 text-white relative z-10">
            <div className="flex flex-wrap gap-4 items-center">

                {/* project images */}
                <div className="flex justify-between w-full h-52  md:h-64 lg:h-72 relative">

                    <div className='w-[54%] h-full'><img className='w-full h-full rounded-lg transition-transform transform hover:scale-105 duration-300' src={images.image1} /></div>

                    <div className='flex flex-col justify-between w-[44%] h-full '>
                        <div className='w-full h-[48.5%]'><img className='w-full h-full  rounded-lg transition-transform transform hover:scale-105 duration-300' src={images.image2} /></div>
                        <div className='w-full h-[48.5%]'><img className='w-full h-full  rounded-lg transition-transform transform hover:scale-105 duration-300' src={images.image3} /></div>
                    </div>

                </div>

                {/* project description */}
                <div className='w-full flex flex-col justify-between'>
                    <div className='flex flex-col gap-3'>
                        <h2 className='font-bold text-2xl'>{projectDetail}</h2>
                        <div className="flex flex-wrap gap-2">
                            {technologies?.map((technology, index) => (
                                <div key={index} className="rounded-full px-3 py-1 text-xs bg-[#333] text-gray-50">
                                    {technology}
                                </div>
                            ))}
                        </div>
                        <p className="text-xs tracking-wide leading-relaxed text-gray-50">{functionality}</p>
                        <ul className="text-xs tracking-wide list-disc list-inside text-gray-50 leading-relaxed">
                            {features?.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <p className='text-xs font-medium'>Duration: <span className='text-gray-800'> {duration}</span></p>
                    </div>
                    <div className="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">

                        <a className="flex items-center justify-center text-center relative font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75" href={projectLink} target="_blank">Preview</a>
                        <a className="flex items-center justify-center text-center relative font-bold text-sm bg-[#333] text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75" href={gitLink} target="_blank">Go To Repo</a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProjectDetails
