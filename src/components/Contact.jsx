import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone } from 'react-icons/fa6'

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get form data
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        
        // Create mailto link
        const subject = `Portfolio Contact from ${name}`;
        const body = `Hi Kithmini,

${message}

Best regards,
${name}
Email: ${email}`;
        
        const mailtoLink = `mailto:kithminijayaweera04@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open email client
        window.location.href = mailtoLink;
    };

    return (
        <motion.div
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, ease: 'easeOut'}}
            viewport={{once:false, amount:0.2}}
            id='contact'
            className='py-20'>

                <div className='container mx-auto px-6'>
                    <h2 className='text-3xl font-bold text-center mb-4'>
                        Get In <span className='text-pink'>Touch</span>
                    </h2>
                    <p className='text-dark-500 text-center max-w-2xl mx-auto mb-16'> 
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto lg:items-start'>
                        {/* Contact Form */}
                        <div>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label htmlFor='name' className='block
                                    text-dark-400 mb-2'>Your Name</label>
                                    
                                    <input type='text' id='name' name='name' required
                                    className='w-full bg-dark-300 border border-dark-350 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink' />
                                </div>

                                <div>
                                    <label htmlFor='email' className='block
                                    text-dark-400 mb-2'>Email Address</label>

                                    <input type='email' id='email' name='email' required
                                    className='w-full bg-dark-300 border border-dark-350 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink' />
                                </div>

                                <div>
                                    <label htmlFor='message' className='block
                                    text-dark-400 mb-2'>Your Message</label>

                                    <textarea id='message' name='message' rows='4' required
                                    className='w-full bg-dark-300 border border-dark-350 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink'></textarea>
                                </div>

                                <button type='submit' className='w-full px-6 py-3 bg-pink rounded-lg
                                font-medium hover:bg-[#fa4886] transition duration-300 cursor-pointer'>
                                    Send Email
                                </button>    
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className='space-y-8 lg:pl-12 lg:mt-8'>
                            <div className='flex items-start'>
                                <div className='text-pink text-2xl mr-4'>
                                    <FaMapMarkedAlt />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                    <p className='text-dark-500'>Matara, Sri Lanka</p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <div className='text-pink text-2xl mr-4'>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                    <p className='text-dark-500'>kithminijayaweera04@email.com</p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <div className='text-pink text-2xl mr-4'>
                                    <FaPhone />
                                </div>
                                <div>
                                    <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                    <p className='text-dark-500'>+94 78 671 9972</p>
                                </div>
                            </div>

                            <div className='pt-4'>
                                <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>

                                <div className='flex space-x-4'>
                                    <a href='https://github.com/AstoriaBlack' className='w-12 h-12 rounded-full bg-dark-300
                                    flex items-center justify-center text-pink hover:bg-pink hover:text-white
                                    transition duration-300'>
                                        <FaGithub />
                                    </a>

                                    <a href='https://www.linkedin.com/in/kithmini-jayaweera-967894228/' className='w-12 h-12 rounded-full bg-dark-300
                                    flex items-center justify-center text-pink hover:bg-pink hover:text-white
                                    transition duration-300'>
                                        <FaLinkedin />
                                    </a>

                                    <a href='https://www.instagram.com/kithz_jay/' className='w-12 h-12 rounded-full bg-dark-300
                                    flex items-center justify-center text-pink hover:bg-pink hover:text-white
                                    transition duration-300'>
                                        <FaInstagram />
                                    </a>

                                    <a href='https://web.facebook.com/profile.php?id=61555561560846' className='w-12 h-12 rounded-full bg-dark-300
                                    flex items-center justify-center text-pink hover:bg-pink hover:text-white
                                    transition duration-300'>
                                        <FaFacebook />
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </motion.div>
    )
}

export default Contact