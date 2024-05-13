import React from 'react';
import './App.scss';
import Widget from './components/Widget/Widget';

function App({ moduleData }) {
  
  
  return (
    <div className="swf-donation">
      {console.log(moduleData)}
      {/* <p>Test 2.2</p> */}
      <Widget/>
    </div>
  );
}   

export default App;
