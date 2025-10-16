import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstsec from './Homepages/Firstsec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
   <Firstsec/>
      </div>
    </>
  )
}

export default App
