import React from 'react'

const Footer = () => {
    return   (
        <div className='py-4 bg-gradient-to-r from-[#12040b] via-[#030001] to-[#12040b]'>
            <div className='container mx-auto px-6 text-center'>
                <p className='text-dark-400 '>&copy; {new Date().getFullYear()} Kithmini Jayaweera. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer