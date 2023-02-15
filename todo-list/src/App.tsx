import { useState } from 'react'
import './App.css'
import logo from './assets/Logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="header">
        <img className="logo" src={logo} alt="" />
      </div>


    </div>
  )
}

export default App
