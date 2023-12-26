import React from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleprovider } from '../../firebase_config/firebase';
import { useState } from 'react';  


const singInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleprovider)
  } catch (error) {
    console.log(error)
  }
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