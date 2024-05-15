import React, { useState } from 'react'
import './Widget.scss'
import DonationButton from '../DonationButtons/DonationButton'
import { BASEURL } from '../URL/BaseURL'

const Widget = ({productId,planId,buttonSettings, submitBtnColor, currencyCode, cart, submitBtnText}) => {
  const [amount, setAmount]=useState("")
  const [errMsg, setErrMsg]=useState("")
  function onClick(value){
    setErrMsg("")
    setAmount(value)
  }
  function handleInput(value){
    setErrMsg("")
    setAmount(value)
    if (value<buttonSettings.minimum_amount) {
      setErrMsg(`Minimum amount is ${buttonSettings.minimum_amount}`)
    }
    else if(value>100000){
      setError('Invalid amount!')
    }
  }

  function handleSubmit(){
    if (amount!=''&&amount>buttonSettings.minimum_amount) {
      const url= new URL(`${BASEURL}${planId}/product/${productId}?charge_quantity=${amount}&currency=${currencyCode}&hide_currency=true&cart=${cart}`);
      window.location.href=url;
    }
    else if(amount==''){
      setErrMsg('Select an amount')
    }
  }
  return (
    <div className='donation-widget'>
      <div className='widget-section'>
        <div className='widget-heading'>
          <img src='//143223961.fs1.hubspotusercontent-eu1.net/hubfs/143223961/raw_assets/public/Assets/Fellowship-icons/Donation-lock-icon.svg' />
          
          <h6>Secure Donation</h6>
        </div>
        <p className='choose-content'>Choose an amount</p>
        <div className='donations-amount'>
          {buttonSettings?.button_properties.map((items)=><DonationButton key={items.button_value} buttonName={items.button_name} buttonValue={items.button_value} amount={amount} onClick={onClick}/>)}
        </div>
        <input
        style={errMsg ? { border: '1px solid #CA2B2B' } : {}}
          type="number"
          placeholder="Custom Amount"
          value={amount}
          onChange={(e)=>handleInput(e.target.value)}
        />
        <p style={!errMsg ? { visibility: 'hidden' } : {}} className='error-msg'>{errMsg}</p>
      </div>
      <button style={{backgroundColor:submitBtnColor}} className='donate-month' onClick={()=>handleSubmit()}>
        <p>Donate Monthly</p>
      </button>
    </div>
  )
}

export default Widget