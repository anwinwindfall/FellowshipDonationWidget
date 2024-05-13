import React from 'react'
import './DonationButton.scss';

const DonationButton = ({buttonName, buttonValue, amount, onClick}) => {
  return (
    <div className={`donation-btn ${buttonValue==amount&&'btn-active'}`} onClick={()=>onClick(buttonValue)}>
      <p className='donation-values'>{buttonName}</p>
    </div>
  )
}

export default DonationButton