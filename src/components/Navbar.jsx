import React, { useState } from 'react'
import { FaSearch ,FaPlus } from 'react-icons/fa';
import { IoChevronDownOutline ,IoChevronUpOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import '../index.css'
import { Link } from 'react-router-dom';
function navbar() {
  const [search ,setSearch] = useState('')
  const navigate = useNavigate()
  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }
   return (
    <nav className='min-w-[fit-content]'>
        <div className='flex items-center gap-4 py-3 px-4 bg-[rgba(0, 47, 52, 0.03)] bg-slate-300'>
          <div>
            <svg onClick={()=>navigate('/')} className='md:w-12 md:h-12 w-20 h-20 cursor-pointer' width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" ><path  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
          </div>
          <div className='relative w-auto h-auto hidden lg:flex'>
            <FaSearch size={'15px'} opacity={4} className="ml-2 absolute top-[50%] translate-y-[-50%]" />
            <input className='md:h-12 md:w-64 h-20 w-72 px-8 border-2 rounded value border-black text-start' placeholder="" value="India" fdprocessedid="0b4aec"/>
          </div>
          <div className='flex'>
            <input className='w-[30vw] md:w-[45vw] h-12 border-2 rounded-l-[4px] border-black text-start px-2' onChange={handleSearch} type="text" placeholder="Find Cars, Mobile Phones and more..." data-aut-id="searchBox" value={search} />
            <button className='bg-[#002f34] w-12 h-12 flex justify-center items-center rounded-r-[4px]'>
              <FaSearch size={24} color="white" />
            </button>
          </div>
          <div className='flex items-center'>
            <p className='font-[700] text-[18px] md:text-[14px]'>ENGLISH</p>
            <IoChevronDownOutline className='size-8 font-normal' size={14} color="black" />
          </div>
          <div className='flex justify-end items-center gap-5 w-[100%]'>
            <div>
              <p onClick={()=> navigate('/login')} className='font-semibold cursor-pointer text-xl md:text-lg underline'>Login</p>
            </div>
            <div className=''>
              <button className='sellbutton rounded-3xl px-2 border-black font-semibold h-12 w-24 flex items-center gap-1'><FaPlus className='relative left-1' size={15}/> SELL</button>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default navbar
