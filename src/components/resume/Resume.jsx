import React from 'react'
import Skills from './Skills';
import Education from './Education';

const Resume = () => {


    const frontendSkills = [
        { 'React': '75%' },
        { 'Javascript': '70%' },
        { 'HTML': '90%' },
        { 'CSS': '80%' },
        { 'Tailwind CSS': '85%' },
        { 'Responsive UI': '85%' },
    ];

    const otherSkills = [
        { 'C++': '65%' },
        { 'Problem Solving': '60%' }
    ]

    return (
        <div>
            <section id="resume">
                <div className='py-2 lg:py-16' >
                    {/* heading */}
                    <div className='bg-[#FCFCFC] border-t-2 border-b-2'>
                        <h1 className='text-4xl font-bold py-12 pl-12'><span className="text-[#54CA95]">R</span>esume</h1>
                    </div>

                    {/* Skills */}
                    <div className="container mx-auto">
                        <div className="lg:grid grid-cols-2 gap-8 px-12 mt-8">
                            {/* frontend skills */}
                            <Skills data={frontendSkills} heading="Frontend Skills" />

                            {/* Backend skills */}
                            <Skills data={otherSkills} heading="Additional Skills" />
                        </div>
                    </div>

                    {/* Education and Courses */}
                    <div className="container mx-auto">
                        <Education />
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Resume



/*

1. What is Object ?

object is a data structure that stores data and information in the form of key-value pairs.
The key-value pairs in an object allow you to organize and access data in a structured way

an object is a collection of properties, where each property has a key 
(also known as a property name) and a value. The key is a string or symbol, and the value can
be any data type, including other objects.


2. what is Object.entries?

it is used to get an array of key-value pairs from the skill object. It returns an
array where each element is an array containing two elements: the key (name of the skill) and
the value (percentage). The inner map function is then used to iterate over these key-value pairs.

[name, percentage]: Represents the destructured array containing the key (name) and value 
(percentage) of each skill.

The combination of map and Object.entries is used to iterate over the skills array and then 
iterate over the key-value pairs within each skill object. This allows you to dynamically
generate React components for each skill and its associated data.


3. What is key?

In the example provided, the index is used as a key when mapping over the frontendSkills array.
The key is a special attribute that helps React identify which items have changed, been added,
or been removed. When rendering a list of elements using the map function, React uses these keys
to optimize the rendering process.

Each React element in an array should have a unique key. Using the array index as a key is a 
common practice when you don't have a unique identifier for each item in the array. However,
it's important to note that using the array index as a key is not always the best choice,
especially if the order of the items can change or if items can be added or removed dynamically.

When possible, it's preferable to use a unique identifier associated with each item as the key.
For example, if your skills had unique IDs, you might structure your array like this:

suggested array -> 

eg.
const frontendSkills = [
  { id: 1, name: 'React', percentage: '70%' },
  { id: 2, name: 'Javascript', percentage: '65%' },
  // ... other skills
];
*/