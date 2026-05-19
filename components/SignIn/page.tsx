'use client';

import React, { useState } from 'react';
import { LoginPopup } from './LoginPopup';

const Index = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleOpenSignup = () => {
    setShowSignupPopup(true);
    setShowLoginPopup(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {showPopup ? (
        <LoginPopup onClose={handleClosePopup} onSwitchToSignUp={handleOpenSignup} />
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
          <p className="text-xl text-gray-600 mb-8">You have successfully integrated the login popup!</p>
          <button
            onClick={handleOpenPopup}
            className="px-6 py-3 bg-[#FFCA00] text-[#1c1c1c] font-bold rounded-[60px] cursor-pointer hover:opacity-90 transition-opacity"
          >
            Show Login Popup
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
