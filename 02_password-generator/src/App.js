
import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length,setLength]=useState(8);
  const [numAllow,setNumAllow]=useState(false);
  const [charAllow,setCharAllow]=useState(false);
  const [password,setPassword]=useState('');

  const passwordRef=useRef(null);

  const generatepassword=useCallback(()=>{
    let pass='';
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllow) str+="1234567890";
    if(charAllow) str+="~!@#$%^&*()_+"

    for(let i=0;i<length;i++){
      const val=Math.random();
      console.log(val);
      let ind=Math.floor(val*str.length);
      pass+=str.charAt(ind);
      setPassword(pass);
    }

  },[length,numAllow,charAllow]);

  useEffect(()=>{
    generatepassword()
    
  },[length,numAllow,charAllow]);

  const refer=()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }

  
  return (
    <div className='   bg-gray-300 w-full h-screen flex justify-center items-center'>
      <div className='bg-cyan-400  h-fit p-4 rounded-md sm:mx-2'>
        <h1 className='text-center text-3xl py-10 font-bold text-black'>Password Generator</h1>
        <div className='shadow flex justify-center rounded-md max-w-md mx-auto'>
            <input type='text' placeholder='Password' value={password} readOnly  
              className='outline-none w-full sm:w-30 px-1 rounded-l-md ' ref={passwordRef}></input>
            <button className='text-white bg-blue-600 px-2 py-1 rounded-r-md'
              onClick={refer} >Copy</button>  
        </div>
        <div className='flex justify-start gap-10 max-w-md mx-auto my-5 sm:gap-5'>
          <div className='flex justify-start gap-1 max-w-md mx-auto my-5'>
            <input type='range' className=' cursor-pointer accent-blue-700' min={8} max={100} value={length} onChange={(e)=>setLength(e.target.value)} ></input>
            <label htmlFor='range' >Length:{length}</label>
          </div>
          <div className='flex justify-start gap-1 max-w-md mx-auto my-5'>
          <input type='checkbox' className=' cursor-pointer accent-blue-600'  onChange={(e)=>setNumAllow((bool)=>!bool)} ></input>
            <label htmlFor='num' >Number</label>
          </div>
          <div className='flex justify-start gap-1 max-w-md mx-auto my-5'>
          <input type='checkbox' className=' cursor-pointer accent-blue-600'  onChange={(e)=>setCharAllow((bool)=>!bool)} ></input>
            <label htmlFor='char'>Character</label>
          </div>
        
      </div>
      </div>
      
    </div>
  );
}

export default App;
