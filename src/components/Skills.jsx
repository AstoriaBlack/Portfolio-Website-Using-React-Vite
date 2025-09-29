import React from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
import { skills } from '../assets/assets'


const Skills = () => {
    return (
        <motion.div
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, ease: 'easeOut'}}
            viewport={{once:false, amount:0.2}}
            id='skills'
            className='py-20'>
                <div className='container mx-auto px-6'>
                    <h2 className='text-3xl font-bold text-center mb-4'>
                        My <span className='text-pink'>Skills</span>
                    </h2>
                    <p className='text-dark-500 text-center max-w-2xl mx-auto mb-16'> 
                        Technologies I had worked with and wanting to get more familiar.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
                    max-w-5xl mx-auto'>
                        {
                            skills.map((skill, index)=>(
                                <div key={index} className='bg-dark-300 rounded-2xl p-6
                                hover:-translate-y-2 transition duration-300 cursor-pointer'> 
                                <div className='flex items-center mb-4'>
                                    <skill.icon className='w-12 h-12 text-pink mr-6'/>
                                    <h3 className='text-xl font-semibold'>{skill.title}</h3>
                                </div>
                                <p>{skill.description}</p>
                                <div className='mt-4 flex flex-wrap gap-2'>
                                    {skill.tags.map((tech) => (
                                        <span key={tech} className='px-3 py-1
                                        bg-dark-350 rounded-full text-sm'>{tech}</span>
                                    ))}
                                </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
        
        </motion.div>
    )
}

export default Skills