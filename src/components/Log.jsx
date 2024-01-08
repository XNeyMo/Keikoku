import React from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleprovider } from '../Backend/db/firebase_config/firebase';
import { useState } from 'react';  


const singInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleprovider)
    
    const credential = googleprovider.credentialFromResult(result)
    const token = credential.accessToken
    const user = result.user
    
    console.log(user, token)
    window.location.href = '/dashboard.astro';
      

  } catch (error) {
    console.log(error)
  }
}

function updateProfile(user) {
  const userName = user.display
  const userPic = user.photoURL
  const userMail = user.email

  document.getElementById('userName').textContent = userName 
  document.getElementById('userprofilepicture').src = userPic
  document.getElementById('userMail').textContent = userMail
  

}



const logout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}

const LogInButton = () => {
  return (
    <button onClick={singInWithGoogle} className="bg-lightcolor text-darkcolor font-bold py-4 px-12 text-2xl rounded-[20px] max-w-64">
      Log In
    </button>
  )
}

export default LogInButton