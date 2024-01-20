
import { useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount,setAmount]=useState(0);
  const [convertAmount,setConvertAmount]=useState(0);
  const [from ,setFrom]=useState('usd');
  const [to,setTo]=useState('inr');

  const currencyInfo= useCurrencyInfo(from);
  const options= Object.keys(currencyInfo);

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertAmount(amount);
    setAmount(convertAmount)

  }

  const convert=()=>{
    setConvertAmount(amount*currencyInfo[to])
  }

  return (
    <div className='w-full h-screen bg-slate-400 flex justify-center items-center '>
      <div >
        <div className='rounded-md shodow-md bg-white/30 backdrop-blur-sm '>
          <form onSubmit={(e)=>
            {e.preventDefault()
            convert()}
          } className='p-3  '>
            <div>
              <InputBox
                label="From"
                amount={amount} 
                currencyoptions={options}
                selectcurrency={from}
                onCurencychange={(currency)=> setFrom(currency)}
                onAmountchange={(amount)=>setAmount(amount)}
                className='mb-1'
              />
            </div>
            <div className='w-full'>
              <button onClick={swap} 
              
              className='bg-blue-500 rounded-md shadow-md px-2  py-1 absolute  left-1/2  -translate-x-1/2 -translate-y-1/2  border-2 border-white text-white font-medium'>Swap</button>
            </div>
            <div>
              <InputBox
                  label="To"
                  currencyoptions={options}
                  amount={convertAmount}
                  amountDisabled
                  onCurencychange={(currency)=>setTo(currency)}
                  selectcurrency={to}
                  className='mt-1'
                />
            </div>
            <button type="submit" className='bg-blue-500 rounded-md shadow-md px-2  py-1 text-center w-full my-2 text-white font-bold'>Convert</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
