import { useState } from 'react'
import './App.css'
import {Route , Routes} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
   <Route path='/' element={<Home/>} ></Route>
   <Route path='/login' element={<Login/>} ></Route>
   <Route path='/signup' element={<SignUp/>} ></Route>
    </Routes>
    </>
  )
}

export default App
