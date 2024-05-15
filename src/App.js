import React from 'react';
import './App.scss';
import Widget from './components/Widget/Widget';

function App({ moduleData }) {
  
  
  return (
    <div className="swf-donation">
      {console.log(moduleData)}
      <Widget productId={moduleData.product_id} planId={moduleData.plan_id} buttonSettings={moduleData.button_settings} submitBtnColor={moduleData.donate_button_color.css} currencyCode={moduleData.currencyCode} cart={moduleData.cart_url} submitBtnText={moduleData.submit_button_text}/>
    </div>
  );
}   

export default App;
