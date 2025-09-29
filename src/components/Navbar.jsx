// eslint-disable-next-line no-unused-vars
import { nav } from 'framer-motion/client'
import React from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'


const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');

    // Active section detection logic
    React.useEffect(() => {
        const sections = document.querySelectorAll('section, div[id]');
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px', // Adjust these values to fine-tune when section becomes active
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            if (section.id) {
                observer.observe(section);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
    
    <nav className={`fixed w-full z-50 backdrop-blur-md py-2 md:py-4 px-8 ${
        showMenu ? '' : 'bg-gradient-to-r from-[#030001] to-[#12040b]'
    }`}>
    
        <div className = 'container mx-auto flex justify-between items-center'>
    
            <div>
                <a href="#home" className='text-2xl font-bold text-white'>
                    K
                    <span className='text-pink'>Jayaweera</span>
                    <div className='w-4 h-4 bg-pink rounded-full'></div>
                </a>
    
            </div>
    
            <div className='hidden md:flex space-x-10'>
                <a href="#home" className={`relative transition duration-300 group ${
                    activeSection === 'home' ? 'text-pink' : 'text-white/80 hover:text-pink'
                }`}>
                    <span>Home</span>
                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-pink transition-all duration-300 ${
                        activeSection === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>

                <a href="#about" className={`relative transition duration-300 group ${
                    activeSection === 'about' ? 'text-pink' : 'text-white/80 hover:text-pink'
                }`}>
                    <span>About</span>
                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-pink transition-all duration-300 ${
                        activeSection === 'about' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>

                <a href="#skills" className={`relative transition duration-300 group ${
                    activeSection === 'skills' ? 'text-pink' : 'text-white/80 hover:text-pink'
                }`}>
                    <span>Skills</span>
                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-pink transition-all duration-300 ${
                        activeSection === 'skills' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>

                <a href="#projects" className={`relative transition duration-300 group ${
                    activeSection === 'projects' ? 'text-pink' : 'text-white/80 hover:text-pink'
                }`}>
                    <span>Projects</span>
                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-pink transition-all duration-300 ${
                        activeSection === 'projects' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>

                <a href="#contact" className={`relative transition duration-300 group ${
                    activeSection === 'contact' ? 'text-pink' : 'text-white/80 hover:text-pink'
                }`}>
                    <span>Contact</span>
                    <span className={`absolute left-0 -bottom-1 h-0.5 bg-pink transition-all duration-300 ${
                        activeSection === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
            </div>

            {/* Mobile button */}
    
            <div className='md:hidden'>
                {
                    showMenu ? 
                    <FaXmark onClick={()=>setShowMenu(!showMenu)}
                    className='text-2xl cursor-pointer' />
                    :
                    <FaBars onClick={()=>setShowMenu(!showMenu)}
                    className='text-2xl cursor-pointer' />
                }
                                
            </div>

        </div>

        {/* Mobile menu */}

        {
            showMenu && (
                <div className='md:hidden mt-4 bg-dark-300 h-screen rounded-lg 
                p-4 flex flex-col space-y-4 w-2/3 ml-auto text-right'>
                    <a onClick={()=>setShowMenu(!showMenu)} href="#home" className={`relative transition duration-300 group ${
                        activeSection === 'home' ? 'text-pink' : 'text-white/80 hover:text-pink'
                    }`}>
                        <span>Home</span>
                        <span className={`absolute right-0 -bottom-1 h-0.5 bg-pink transition-all duration-300 ${
                            activeSection === 'home' ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                        }`}></span>
                    </a>

                    <a onClick={()=>setShowMenu(!showMenu)} href="#about" className={`relative transition duration-300 group ${
                        activeSection === 'about' ? 'text-pink' : 'text-white/80 hover:text-pink'
                    }`}>
                        <span>About</span>
                        <span className={`absolute right-0 -bottom-1 h-0.5 bg-pink transition-all duration-300 ${
                            activeSection === 'about' ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                        }`}></span>
                    </a>

                    <a onClick={()=>setShowMenu(!showMenu)} href="#skills" className={`relative transition duration-300 group ${
                        activeSection === 'skills' ? 'text-pink' : 'text-white/80 hover:text-pink'
                    }`}>
                        <span>Skills</span>
                        <span className={`absolute right-0 -bottom-1 h-0.5 bg-pink transition-all duration-300 ${
                            activeSection === 'skills' ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                        }`}></span>
                    </a>

                    <a onClick={()=>setShowMenu(!showMenu)} href="#projects" className={`relative transition duration-300 group ${
                        activeSection === 'projects' ? 'text-pink' : 'text-white/80 hover:text-pink'
                    }`}>
                        <span>Projects</span>
                        <span className={`absolute right-0 -bottom-1 h-0.5 bg-pink transition-all duration-300 ${
                            activeSection === 'projects' ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                        }`}></span>
                    </a>

                    <a onClick={()=>setShowMenu(!showMenu)} href="#contact" className={`relative transition duration-300 group ${
                        activeSection === 'contact' ? 'text-pink' : 'text-white/80 hover:text-pink'
                    }`}>
                        <span>Contact</span>
                        <span className={`absolute right-0 -bottom-1 h-0.5 bg-pink transition-all duration-300 ${
                            activeSection === 'contact' ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                        }`}></span>
                    </a>
                </div>
            )
        }
        
    </nav>    

    )
}

export default Navbar