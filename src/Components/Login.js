import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utilis/validate'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from '../utilis/firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../Slices/UserSlice';


const Login = () => {
const navigate = useNavigate() 
const [isSignIn, setSignUser]= useState(true)
const [validateMsg,setValidateMsg]=useState(null)
const name=useRef(null)
const email=useRef(null)
const password=useRef(null)
const dispatch = useDispatch()
// here we are handling validation that wheather user is signed up or not
const handleValidation=()=>{
  
const message=checkValidData(email.current.value,password.current.value)
if(message)
  {
    setValidateMsg(message)
    return
  }
else if(!isSignIn)
{
   createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      setValidateMsg(null)
      updateProfile(user, {
        displayName:name.current.value ,photoURL:null
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName, photoURL}=auth.currentUser
        dispatch(addUser({uid:uid,emai:email,dispalyName:displayName,photoURL:photoURL}))
      
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setValidateMsg(errorCode + errorMessage)
      // ..
    });
  }
else
  {
  signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
     
    setValidateMsg(null)
     
    // ...
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidateMsg(errorCode + errorMessage)
  });

  }
  
  

}

function toggleSignUser()
  {
  setSignUser(!isSignIn)
  }
    return (
    <div>
  <Header/>
    <div>
    <img className='absolute' src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg' alt='Netflix-background-image'></img> 
    <form onSubmit={(e)=>{
      e.preventDefault()
    }} className='text-white absolute bg-black my-36 p-12 mx-auto right-0 left-0 w-3/12 opacity-95'>
    <h1 className='font-bold text-3xl py-4 '>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
    {
     !isSignIn && <input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />    
    }
    <input ref={email} type='text' placeholder='Email or Phone number' className='p-4 my-4 w-full bg-gray-700' />    
    <input ref={password}  type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'  /> 
    {
      validateMsg!=null && <h2 className='font-bold text-red-600'>{validateMsg}</h2>
    }
    <button  className='bg-red-700 p-2 my-6 w-full rounded-lg' onClick={handleValidation} >{isSignIn ? 'Sign In' : 'Sign Up'}</button>
    <h1 className='my-8 cursor-pointer'onClick={()=>{
        toggleSignUser() 
    }} >{isSignIn?'New to Netflix? Sign Up Now':'Already Registerd? Sign In Now'}</h1>    
    </form> 
    </div>
    </div>
  
)
}

export default Login