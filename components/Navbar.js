import React from 'react'
import Link from 'next/link'

const Navbar = () =>
{
    return (
        <div className='bg-[#2d4b81] py-2 select-none'>
            <div className='mx-12'>
                <Link href='/' className='text-3xl font-semibold italic text-white'>GAMESTORE</Link>
            </div>
        </div>
    )
}

export default Navbar