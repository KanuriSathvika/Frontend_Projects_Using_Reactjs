import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='shadow sticky top-0  z-50'>
        <nav className='bg-white border-gray-900 py-2.5 px-4 lg:px-6   '>
            <div className='flex flex-wrap items-center justify-between mx-auto max-w-screen-xl'>
                <Link to='/'>
                    <img 
                      className='mr-3 h-12' 
                      src='https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png' alt='logo'>
                    </img>
                </Link>

                <div className='flex md:order-2 items-center'>
                  <Link
                    className='mr-2 px-4 font-medium  border-orange-700 border-2 py-2 rounded-lg hover:bg-orange-700 hover:text-white'>
                    Log in
                  </Link>
                  <Link
                    className='text-white bg-orange-700 hover:bg-orange-600 focus:ring-2 px-4 py-2 lg:py-2.5 rounded-lg font-medium mr-2'>
                    Get Started
                  </Link>
                </div>

                <div className=' justify-between items-center md:flex  w-full md:w-auto hidden md:order-1 lg:px-4'
                  id=' mobile-menu-2'>
                  <ul className='flex'>
                    <li>
                      <NavLink  to='/'
                        className={({isActive})=>` font-medium py-2  block duration-150 border-gray-300 pl-3 pr-4
                          ${isActive ? "text-orange-700" : "text-gray-700"} lg:hover:bg-transparent hover:text-orange-700 lg:border-0 p-2`}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='/about'
                       className={({isActive})=>` font-medium py-2  block duration-150 border-gray-300 pl-3 pr-4
                          ${isActive ? "text-orange-700" : "text-gray-700"} lg:hover:bg-transparent hover:text-orange-700 lg:border-0 p-2`}>
                        About
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink to='/contact'
                       className={({isActive})=>` font-medium py-2  block duration-150 border-gray-300 pl-3 pr-4
                          ${isActive ? "text-orange-700" : "text-gray-700"} lg:hover:bg-transparent hover:text-orange-700 lg:border-0 p-2`}>
                        Contact
                      </NavLink>
                    </li> */}
                    <li>
                      <NavLink to='/github'
                       className={({isActive})=>` font-medium py-2  block duration-150 border-gray-300 pl-3 pr-4
                          ${isActive ? "text-orange-700" : "text-gray-700"} lg:hover:bg-transparent hover:text-orange-700 lg:border-0 p-2`}>
                        Github
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to='/user'
                       className={({isActive})=>` font-medium py-2  block duration-150 border-gray-300 pl-3 pr-4
                          ${isActive ? "text-orange-700" : "text-gray-700"} lg:hover:bg-transparent hover:text-orange-700 lg:border-0 p-2`}>
                        User
                      </NavLink>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header