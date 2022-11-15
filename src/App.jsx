import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const queryParameters = new URLSearchParams(window.location.search)
  const os = queryParameters.get("os")

  return (
    <div className="App">

      <h1>{os}</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
