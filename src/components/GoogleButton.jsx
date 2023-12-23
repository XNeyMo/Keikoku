import React from 'react';

const GoogleButton = (/*{ onClick }*/) => {
  const handleGoogleLogin = () => {
    console.log('Iniciar sesión con Google');
    //onClick();
  };

  return (
    <button
      className="tracking-widest bg-interlightcolor px-6 py-1 rounded-2xl font-bold text-lightcolor hover:bg-interdarkcolor duration-500"
      onClick={handleGoogleLogin}
    >
      Log In
    </button>
  );
};

export default GoogleButton;