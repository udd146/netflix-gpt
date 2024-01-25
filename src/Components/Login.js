import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  
const [isSignIn, setSignUser]= useState(true)
function toggleSignUser()
  {
  setSignUser(!isSignIn)
  }
    return (
    <div>
  <Header/>
    <div>
    <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg' alt='Netflix-background-image'></img> 
    <form className='text-white absolute bg-black my-36 p-12 mx-auto right-0 left-0 w-3/12 opacity-95'>
    <h1 className='font-bold text-3xl py-4 '>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
    {
     !isSignIn && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />    
    }
    <input type='text' placeholder='Email or Phone number' className='p-4 my-4 w-full bg-gray-700' />    
    <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'  /> 
    <button className='bg-red-700 p-2 my-6 w-full rounded-lg'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
    <h1 className='my-8 cursor-pointer'onClick={()=>{
        toggleSignUser() 
    }} >{isSignIn?'New to Netflix? Sign Up Now':'Already Registerd? Sign In Now'}</h1>    
    </form> 
    </div>
    </div>
  
)
}

export default Login