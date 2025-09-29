import React from 'react'
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'
import {assets,aboutInfo} from '../assets/assets'

const About = () => {
    return (
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease: 'easeOut'}}
        viewport={{once:true}}
        id='about'
        className='pt-36 md:pt-20 pb-20 bg-dark-10'
        >
            <div className='container mx-auto px-6'>
                {/* Heading */}
                <h2 className='text-3xl font-bold text-center mb-4'>
                    About <span className='text-pink'>Me</span>
                </h2>
                <p className='text-dark-500 text-center max-w-2xl mx-auto mb-16'>
                    Get to know more about me and my background.
                </p>

                {/* Image + my journey */}
                <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
                    {/* Image */}
                    <div className='lg:w-1/3 md:w-1/2 rounded-2xl overflow-hidden border-2 border-pink/20 shadow-md shadow-pink/20'>                    
                        <motion.img
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:0.9, ease: 'easeOut'}}
                        viewport={{once:false, amount:0.2}}
                        src = {assets.aboutImg} alt='Profile' 
                        className='w-full h-full object-cover max-w-[500px] max-h-[500px]'/>
                    </div>

                    {/* Text content */}
                    <motion.div 
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.9, ease: 'easeOut'}}
                    viewport={{once:false, amount:0.2}}
                    className='md:w-1/2'>

                        <div className='rounded-2xl p-4'>
                            <h3 className='text-xl font-semibold mb-3'>My Journey</h3>
                            <p className='text-dark-400 mb-4 text-sm leading-relaxed'>I'm a passionate computer science undergraduate who likes to 
                                explore different technologies and create digital solutions for 
                                businesses around the world. My journey started with 
                                basic HTML/CSS websites and has evolved into building 
                                complex web applications with modern frameworks.</p>
                                <p className='text-dark-400 mb-4 text-sm leading-relaxed'>
                                    I enjoy working on projects that challenge me to learn new skills and push my boundaries. 
                                    I'm always eager to collaborate with others and contribute to innovative solutions.
                                </p>

                                {/* Cards */}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'> 
                                    {
                                        aboutInfo.map((data, index) => (
                                            <div key={index} className='bg-dark-300 rounded-xl p-4 transition-transform duration-300
                                            hover:-translate-y-2 cursor-pointer'>
                                                <div className='text-pink text-2xl mb-2'>
                                                    <data.icon />
                                                </div>
                                                <h3 className='text-lg font-semibold mb-2'>{data.title}</h3>
                                                <p className='text-dark-400 text-xs leading-relaxed'>{data.description}</p>
                                            </div>
                                        ))
                                    }                               
                                </div>
                                
                        </div>

                    </motion.div>
                </div>

            </div>
            
        </motion.div>
    )
}

export default About