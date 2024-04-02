import React from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/authContext'
import Banner from '../components/Banner'
function Home() {
    const {user} = useAuth()
    console.log(user, 'this is user')
  return (
    <>
    <Navbar/>
    <Banner/>
    </>

  )
}

export default Home
