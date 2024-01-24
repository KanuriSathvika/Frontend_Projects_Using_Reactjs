import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='mx-auto max-w-7xl w-full'>
      <aside className='relative  text-black sm:mx-16  mx-2 sm:py-20 overflow-hidden'>
        <div className='  relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8'>
          <div className='max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto'>
            <h2 className='font-bold text-2xl sm:text-5xl'>Download Now 
              <span className='sm:block text-4xl hidden'>Lorem Ipsum</span>
            </h2>

            <Link className='bg-orange-700 inline-flex items-center py-3 px-2 sm:px-4 rounded-md text-white texl-md sm:text-xl'
              to='/'>
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
               &nbsp;  Download now
            </Link>
          </div>
        </div>
        <div className='absolute sm:my-20 inset-0 w-full sm:pt-1 pt-12 h-full'>
          <img className=' w-96' src='https://i.ibb.co/5BCcDYB/Remote2.png'/>
        </div>
      </aside>

      <div className='grid place-items-center'>
        <img className='w-96' src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="" />
      </div>
      <h1 className='text-center py-8 text-xl sm:text-5xl font-bold'>Lorem Ispum Yojo</h1>
    </div>
  )
}

export default Home