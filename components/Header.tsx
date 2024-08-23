import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='header'>
        <Link href="/" className='md:flex-1'>
        <Image src="/assets/icons/logo.svg" alt="logo with name" width={120} height={32} className='hidden md:block'/>
        <Image src="/assets/icons/logo.svg" alt="logo with name" width={120} height={32} className='hidden md:block'/>
        </Link>
      
    </div>
  )
}

export default Header
