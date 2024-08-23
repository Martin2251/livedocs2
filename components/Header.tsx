import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='header'>
        <Link href="/" className='md:flex-1'>
        <Image  />
        </Link>
      
    </div>
  )
}

export default Header
