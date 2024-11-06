import { useState } from 'react'

import './App.css'
import Header from './Components/header'
import LandingPage from './modules/landingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <LandingPage/>
    </>
  )
}

export default App
