import React from 'react'
import Skills, { SkillTags } from './Skills';
import Education from './Education';
import { motion } from 'framer-motion';

const Resume = () => {
    const coreSkills = [
        { name: 'React.js', percentage: 90 },
        { name: 'JavaScript', percentage: 88 },
        { name: 'TypeScript', percentage: 80 },
        { name: 'Redux', percentage: 88 },
        { name: 'HTML & CSS', percentage: 90 },
        { name: 'Tailwind CSS', percentage: 85 },
        { name: 'DSA', percentage: 75 },
    ];

    const architectureSkills = [
        { name: 'REST APIs', percentage: 85 },
        { name: 'GraphQL', percentage: 75 },
        { name: 'System Design (HLD/LLD)', percentage: 72 },
        { name: 'Scalable Architecture', percentage: 78 },
        { name: 'Performance Optimization', percentage: 82 },
        { name: 'Testing & Debugging', percentage: 80 },
        { name: 'Git & Version Control', percentage: 85 },
    ];

    const engineeringPractices = [
        'Cross-Browser Development',
        'Agile Methodologies',
        'Software Development Life-cycle',
        'Cross-Functional Collaboration',
        'Vite',
        'AWS Workflows',
        'API Integration',
        'Responsive UI Development',
    ];

    return (
        <section id="resume" className="py-16 lg:py-24 bg-neutral-50">
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">R</span>esume
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
                </motion.div>

                {/* Skills Section */}
                <div className="mb-16">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Skills data={coreSkills} heading="Core Technologies" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Skills data={architectureSkills} heading="APIs & Architecture" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-8"
                    >
                        <SkillTags tags={engineeringPractices} heading="Engineering Practices" />
                    </motion.div>
                </div>

                {/* Education and Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Education />
                </motion.div>
            </div>
        </section>
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