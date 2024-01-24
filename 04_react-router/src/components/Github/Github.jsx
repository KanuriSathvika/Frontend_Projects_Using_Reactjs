import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';



function Github() {

    const data=useLoaderData()

//   const [data,setData]=React.useState([]);
//   useEffect(()=>{
//     fetch('https://api.github.com/users/sriharsha8991')
//     .then((response)=>response.json())
//     .then((data)=>{
//         console.log(data)
//         setData(data)
//     })
//   },[])  

  return (
    <div>
        <div className='text-center m-4 bg-gray-700 text-white p-4 text-3xl'>
            <h1>Gihub Users:{data.followers} </h1>
            <p>Login: {data.login}</p>
        </div>
    </div>
  )
}

export default Github;

export const githubInfoloader=async()=>{
    const response=await fetch('https://api.github.com/users/sriharsha8991')
    return response.json()
}