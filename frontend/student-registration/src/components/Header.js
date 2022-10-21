import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='fixed z-20 w-full h-20 flex items-center justify-center
                    bg-gray-500 text-white  uppercase tracking-widest select-none
                    text-2xl font-bold'>
        <Link to='/' onClick={()=>window.location.reload()}>Student Management System </Link>
        </div>
  )
}

export default Header