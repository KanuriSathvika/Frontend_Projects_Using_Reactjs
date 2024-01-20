import React,{useId} from 'react'

function InputBox({label,amount,onAmountchange,onCurencychange,
  currencyoptions=[],selectcurrency="usd",amountDisabled=false,currencyDisabled=false,className=""}) {

  const id=useId();
  return (
    <div className={`  bg-white rounded-md shadow-md text-sm flex p-3  justify-between  ${className}`}>
        <div className='w-1/2 '>
            <label htmlFor={id} className='text-black/40 inline-block  font-medium text-base mb-2'>{label}</label>
            <input id={id} className='outline-none bg-gray-100  bg-transparent rounded-sm py-1 ' placeholder='Amount' value={amount}
              onChange={(e)=>{onAmountchange && onAmountchange(Number(e.target.value))}}></input>
        </div>
        <div className='w-1/2 flex flex-wrap justify-end items-end flex-col ' >
            <p className='text-black/40  font-medium text-base mb-2'>Currency Type</p>
            <select name='' value={selectcurrency} 
              onChange={(e)=>{onCurencychange && onCurencychange(e.target.value)}}
              disabled={currencyDisabled} 
              className='bg-gray-100 py-1 rounded-sm outline-none '
              >
                {currencyoptions.map((currency)=>(
                  <option key={currency} value={currency}>{currency}
                    </option>
                ))}
              </select>
        </div>

    </div>
  )
}

export default InputBox;