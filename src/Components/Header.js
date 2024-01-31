import React, { useEffect } from 'react'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router'
import { auth } from '../utilis/firebase'
import { signOut } from "firebase/auth";
 import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../Slices/UserSlice';
import { onAuthStateChanged } from "firebase/auth";
const Header = () => {
  
 const navigate =useNavigate()
 const users = useSelector(store => store.Login.user)
  
 const dispatch = useDispatch()
 
 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName, photoURL } = user;
      dispatch(
        addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        })
      );
      navigate("/browse");
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  });
}, []);
 
const SignOutUser = ()=>{
  signOut(auth).then(() => {
  // Sign-out successful.
  
}).catch((error) => {
  // An error happened.
});


 }
  return (
    <div className='absolute justify-between flex w-screen px-8 py-4 bg-gradient-to-b from-black z-10'> 
    <img className='w-48' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Netflix-logo'></img>
    
    {users && (
      <div className='flex'>
     <img className='w-12 p-2 m-4 ' src='https://occ-0-4826-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229' alt='image'></img> 
    <button onClick={
      SignOutUser
    } className='font-thin text-white'>Sign out</button>
    </div>)}
    </div>
   )
}

export default Header