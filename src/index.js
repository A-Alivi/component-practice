import React from 'react';
import ReactDOM from 'react-dom/client';
import Quote from './component/Quote';

import Button from './component/Button';

// const data = {
//   Quote: "Don't follow success, follow Excellence eventually success will follow you.",
//   name: "Professor Phunsuk Wangdu"
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Quote quote="Don't follow success, follow Excellence, eventually success will follow you." name="Professor Phunsuk Wangdu"/>
   <Button name="Click Me"/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

