
import { useState } from 'react';

function App() {
  const [color,setColor]=useState('rgb(31 41 55)')
  return (

    <div className='  w-full h-screen duration-500 ' style={{backgroundColor:color}}>
      <div className='flex flex-wrap justify-center py-3 font-bold '>
        <div className='shadow-lg rounded-3xl   flex justify-center gap-10  flex-wrap py-3 px-3 bg-white'>
          <button onClick={()=>setColor('blue')} className='transition delay-150 ease-in shadow-lg rounded-3xl w-20 px-3 py-2 bg-blue-600 active:translate-y-1 active:scale-75'>Blue</button>
          <button onClick={()=>setColor('red')} className='transition delay-150 ease-in shadow-lg rounded-3xl px-3 w-20 py-2 bg-red-600 active:translate-y-1 active:scale-75'>Red</button>
          <button onClick={()=>setColor('yellow')} className='transition delay-150 ease-in shadow-lg rounded-3xl px-3 w-20 py-2 bg-yellow-400 active:translate-y-1 active:scale-75'>Yellow</button>
          <button onClick={()=>setColor('green')} className='transition delay-150 ease-in shadow-lg rounded-3xl px-3 w-20 py-2 bg-green-600 active:translate-y-1 active:scale-75'>Green</button>
          <button onClick={()=>setColor('#F9629F')} className='transition delay-150 ease-in shadow-lg rounded-3xl px-3 w-20 py-2 bg-pink-400 active:translate-y-1 active:scale-75'>Pink</button>
          <button onClick={()=>setColor('#7F00FF')} className='transition delay-150 ease-in shadow-lg rounded-3xl px-3 w-20 py-2 bg-violet-500 active:translate-y-1 active:scale-75'>Violet</button>
          <button onClick={()=>setColor('rgb(249 115 22)')} className='transition delay-150 ease-in shadow-lg rounded-3xl px-3 w-20 py-2 bg-orange-500 active:translate-y-1 active:scale-75'>orange</button>
        </div>
      </div>
      
      
    </div>
    
  );
}

export default App;
