import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const queryParameters = new URLSearchParams(window.location.search)
  const n_seguimiento = queryParameters.get("n_seguimiento")

  return (
    <div className="App">

      <h1>OS: {n_seguimiento}</h1>

     
    </div>
  )
}

export default App
