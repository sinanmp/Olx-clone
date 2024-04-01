import React from 'react'

function Login() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
    <div className="border p-8 rounded-md fixed shadow-md">
    <svg className='mx-auto w-32 h-28 mt-[-20px] mb-4' width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd"><path  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
      <form>
        <label htmlFor="email" className="block mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full border py-2 px-3 mb-4 rounded-md focus:outline-none focus:border-blue-400"
          placeholder="Enter your email"
        />
        <label htmlFor="password" className="block mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="w-full border py-2 px-3 mb-4 rounded-md focus:outline-none focus:border-blue-400"
          placeholder="Enter your password"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
      </form>
      <p className="text-center mt-4">Don't have an account? <a href="#" className="text-blue-500">Signup</a></p>
    </div>
  </div>
  )
}

export default Login
