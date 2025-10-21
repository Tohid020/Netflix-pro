import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstsec from './Homepages/Firstsec'
import SecondSec from './Homepages/SecondSec'
import ThirdSec from './Homepages/ThirdSec'
import { Route, Routes } from 'react-router-dom'
import FifthSec from './Homepages/FifthSec'
import FourSec from './Homepages/FourSec'

function App() {
 

  return (
    <>
      <div>
   {/* <Firstsec/> 
    <SecondSec/>
   <ThirdSec/> */}
   <Routes>
<Route path='/' element={
  <>
    <Firstsec/> 
    <SecondSec/>
    <ThirdSec/>
    <FourSec/>
    <FifthSec/>
    
  </>

  
  } />


   </Routes>
      </div>
    </>
  )
}

export default App
