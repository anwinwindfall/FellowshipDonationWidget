import React from 'react'
import DonationButtonGroupGeneral from '../DonationButtons/DonationButtonGroupGeneral'
import './Widget.scss'

const Widget = () => {
  return (
    <div className='donation-widget'>
      <div className='widget-section'>
        <div className='widget-heading'>
          <img src='//143223961.fs1.hubspotusercontent-eu1.net/hubfs/143223961/raw_assets/public/Assets/Fellowship-icons/Donation-lock-icon.svg' />
          
          <h6>Secure Donation</h6>
        </div>
        <p className='choose-content'>Choose an amount</p>
        <div className='donations-amount'>
          <DonationButtonGroupGeneral />
          <DonationButtonGroupGeneral />
          <DonationButtonGroupGeneral />
          <DonationButtonGroupGeneral />
          <DonationButtonGroupGeneral />
          <DonationButtonGroupGeneral />
        </div>
        <input
          type="text"
          placeholder="Custom Amount"
        />
        <p className='error-msg'>Invalid amount!</p>
      </div>

      <button className='donate-month'>
        <p>Donate Monthly</p>
      </button>
    </div>
  )
}

export default Widget