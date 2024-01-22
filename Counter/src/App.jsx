import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let incCount = () =>{
    if (count < 20) {
      setCount(count + 1)
    }
  }
  let decCount = () =>{
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <>
      <h1>Counter Project 1 </h1>
      <h1>{count}</h1>
      <button onClick={ incCount}>Increase</button>
      <br/>
      <br />
      <button onClick={decCount}>Decrease</button>
    </>
  )
}

export default App
