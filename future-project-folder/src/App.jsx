import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Fetch } from './FetchComponent/FetchComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Fetch />
    </div>
  )
}

export default App
