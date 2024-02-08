import React from 'react'

const Skills = ({ data, heading }) => {
    return (
        <div>
            <h3 className="text-[21px] font-bold mb-4">{heading}</h3>
            {data.map((skill, index) => (
                <div key={index} >
                    {Object.entries(skill).map(([name, percentage]) => (

                        <div key={name} className='mb-4 w-full'>
                            {console.log('Percentage:', percentage)}
                            <div className="flex justify-between">
                                <h3 className="text-lg font-medium">{name}</h3>
                                <p className="mt-1">{percentage}</p>
                            </div>
                            <div className="h-3 border-2 rounded-full flex items-start justify-start w-full">
                                <div className={`w-[${percentage}] h-[4px] my-auto ml-[2px] rounded-full bg-[#54CA95]`} style={{ width: percentage }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Skills
