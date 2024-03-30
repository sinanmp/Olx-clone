import React from 'react'
import { FaSearch ,FaPlus } from 'react-icons/fa';
import { IoChevronDownOutline ,IoChevronUpOutline } from 'react-icons/io5';


function navbar() {
  return (
    <nav className='py-6 bg-slate-300 h-16 fixed w-full top-0 left-0 z-30 transition-colors duration-300'>
        <div className='flex relative  bottom-4 gap-5 left-3'>
         <svg className='' width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-w4DG7" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
        
         <div className='hidden sm:flex items-center'>
        <FaSearch size={'15px'} opacity={4} className="ml-2 absolute" />
        <input className='h-12 w-64 pl-8 border-2 rounded value border-black text-start' placeholder="" value="India" fdprocessedid="0b4aec"/>
        </div>

        <div className=' hidden h-auto md:flex'>
       <input className=' md:w-[50vw] h-12 border-2 rounded border-black text-start' type="text" placeholder="Find Cars, Mobile Phones and more..." data-aut-id="searchBox" value=""/>
       <div className="bg-black p-2 rounded-r relative right-2">
         <FaSearch className='relative top-1.5' size={20} color="white" />
        </div>
       </div> 

        <div className='pt-3 flex gap-1'>
            <p className='font-semibold'>ENGLISH</p>
            <IoChevronDownOutline className=' pb-1.5 size-8' size={25} color="black" />
        </div>
        
        <div className=' md:pl-5'>
        <p className='font-semibold text-lg pt-2 underline'>Login</p>
        </div>
       
        <div className='flex pt-1 mr-'>
           <FaPlus className='absolute mt-[12px] ml-1 md:ml-5' size={15}/>
            <button className='border rounded-3xl pl-2 w-20 md:w-28 border-black font-semibold relative left- h-10'>SELL</button>
        </div>

        </div>
    </nav>
  )
}

export default navbar