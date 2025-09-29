import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import {assets} from '../assets/assets'

const Hero = () => {
    return (

        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, ease: 'easeOut'}}
        viewport={{once:true}}
        id='home'
        className='h-screen max-h-[768px] flex items-center pt-56 md:pt-20 pb-16 bg-gradient-to-r from-[#030001] to-[#12040b]'>
        
            <div className='container mx-auto px-8 md:px-6 flex flex-col md:flex-row items-center justify-between'>
                {/* Left Side - Text Content */}
                <div className='md:w-1/2 mb-10 md:mb-0 order-2 md:order-1'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Hi, I'm <span className='text-pink'>Kithmini</span>
                    </h1>
                    <p className='text-dark-400 mb-4'>
                        I'm interested in,
                    </p>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-6
                    typewriter '>
                        Full Stack Developing
                    </h2>
                    <p className='text-lg text-dark-400 mb-6'>
                        I strive to create stunning web experiences with modern technologies
                        and innovative design.
                    </p>
                    <div className='flex space-x-4 '>
                        <a href='/cv/KithminiJayaweeraCV.pdf' download="Kithmini-Jayaweera-CV.pdf" className='px-6 py-3 bg-pink rounded-lg 
                        font-medium hover:bg-[#fa4886] transition duration-300'>Download CV</a>
                        <a href='#contact' className='px-6 py-3 border border-pink rounded-lg
                        font-medium hover:bg-pink/20 transition decoration-pink-500'>Contact Me</a>
                    </div>
                </div>

                {/* Right Side - Profile Picture */}
                <div className='md:w-1/2 flex justify-center md:justify-end order-1 md:order-2 my-10 md:mt-0 '>
                    <motion.div
                    animate={{y:[0, -20, 0]}}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut'
                    }}
                    className='relative w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-r from-pink to-[#fc88b1] shadow-[0_0_15px_rgba(252,182,207,0.4)] 
                    rounded-full animate-pulse-slow animate-float'>
                        <div>
                            <div className='absolute inset-[2px] rounded-full bg-[#0d0005]'>
                                <img src={assets.profileImg} alt="Profile" className='w-full h-full object-cover rounded-full' />
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero