import React from 'react';

const GoogleButton = (/*{ onClick }*/) => {
  const handleGoogleLogin = () => {
    var profile = googleUser.getBasicProfile();
    console.log(profile.getName());
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

// 71727447822-hqirilmtmo874ghlt9i8eoefhtm73220.apps.googleusercontent.com 
// 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