import React from 'react'

const Education = () => {
    return (
        <div className='lg:grid grid-cols-2 gap-8 px-12 mt-8'>
            <div>
                <h3 className="text-xl font-bold mb-8 text-primary">Experience</h3>
                <div className='flex max-md:hidden items-center gap-4 text-sm '>
                    <p className="px-3 py-1 border-2 rounded-full border-[#54CA95] ">Feb 2022 - Aug 2023</p>
                    <p className="text-[#54CA95] font-semibold text-base">Srijan / A Material+ Company</p>
                </div>
                <div className="text-lg text-gray-600 font-semibold border-l-[1px] border-b-[1px] mt-4 pl-5 pb-5 border-[#edebeb86]">
                    <p>Developer L1, <span className='text-xs text-gray-500 font-medium'>(Sept 2022 - Aug 2023)</span></p>
                    <p>JavaScript Developer <span className='text-xs text-gray-500 font-medium'>(Feb 2022 - Aug 2022)</span></p>
                    {/* <p>Followed my passion for technology and shaping my skills in computer science through comprehensive academic programs and practical learning experiences</p> */}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-8 text-primary">Education</h3>
                <div className='flex max-md:hidden items-center gap-4 text-sm '>
                    <p className="px-3 py-1 border-2 rounded-full border-[#54CA95] ">2018 - 2022</p>
                    <p className="text-[#54CA95] font-semibold text-base">Lovely Professional University, Punjab</p>
                </div>
                <div className="border-l-[1px] border-b-[1px] mt-4 pl-5 pb-5 border-[#edebeb86]">
                    <h2 className="text-lg text-gray-600 font-semibold">B.Tech (Computer Science And Engineering)</h2>
                    {/* <p className="text-sm mt-1">Followed my passion for technology and shaping my skills in computer science through comprehensive academic programs and practical learning experiences</p> */}
                </div>
            </div>

        </div>
    )
}

export default Education
