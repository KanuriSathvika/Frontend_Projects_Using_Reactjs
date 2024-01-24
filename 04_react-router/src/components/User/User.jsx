import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {useid}=useParams();
  return (
    <div>
        <div className='bg-orange-600 text-center font-bold text-2xl text-white py-6'>
            User:{useid}
        </div>
    </div>
  )
}

export default User