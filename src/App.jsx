import { useState } from 'react'
import './App.css'

function App() {
 
  let  [counter, setCounter] = useState(0);
// let counter = 5;

const addValue = () => {
// counter = counter + 1;
 
setCounter(counter + 1);
// console.log("clicked", counter);
}

const removeValue = () => {
  // counter = counter - 1;
  setCounter(counter - 1);
  // console.log("clicked", counter);
  }

  return (
    <>
      <h1>Counter App Practise Using  React Vite</h1>
      <p>created this mini counter app just to practise hooks</p>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      
      <br />
      <br />
   
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
