import React from 'react'

function About() {
  return (
    <div className='w-full py-16'>
      <div className='px-6 m-auto md:px-10  container text-gray-600'>
        <div className=' space-y-6 md:space-y-0 md:flex lg:items-center md:justify-center gap-12 px-10  md:px-20'>
          <div className=' lg:w-5/12 '>
            <img className=' w-11/12' src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" />
          </div>

          <div className='md:7/12 lg:w-5/12'>
            <h2 className='text-xl md:text-4xl lg:text-4xl font-bold text-black'>
              React development is carried out by passionate developers
            </h2>
            <p className='py-4  text-base'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
              accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
              aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p>
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
              Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About