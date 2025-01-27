import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ isDarkMode }) => {
    return (
        <div className='mt-10 '>
            <div className='text-center '>
                {/* <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2 ' /> */}
                <p className='text-center font-bold text-3xl font-Ovo cursor-pointer'>Manis <span className='text-3xl text-lime-300 border-2 -ml-2'>h.</span></p>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6 ' />
                    manishkumarms1999@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Manish Kumar. All rights reserved.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a target='_blank' href="https://github.com/manishkumar199">Github</a>
                    </li>
                    <li>
                        <a target='_blank' href="https://github.com/manishkumar199">Linkedin</a>
                    </li>
                    <li>
                        <a target='_blank' href="https://github.com/manishkumar199">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer