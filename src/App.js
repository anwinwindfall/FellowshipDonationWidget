import React from 'react';
import './App.scss';
import Widget from './components/Widget/Widget';
import Content from './components/Content/Content';

function App({ moduleData }) {
  
  
  return (
    <div className="swf-donation-container">
      <Content content={moduleData.content}/>
      <Widget productId={moduleData.product_id} planId={moduleData.plan_id} buttonSettings={moduleData.button_settings} submitBtnColor={moduleData.donate_button_color.css} currencyCode={moduleData.currency_code} cart={moduleData.cart_url} submitBtnText={moduleData.submit_button_text}/>
    </div>
  );
}   

export default App;
