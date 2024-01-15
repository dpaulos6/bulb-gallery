import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { BulbLogo } from "../assets/logos/BulbLogo";

import { encryptData, decryptData } from '../utils/cryptoUtils';

export const Signin = () => {
  const [email, setEmail] = useState(null);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState(null);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(false);
  };  
  
  const [loginError, setLoginError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        window.location.href = '/';
      } else {
        setIsVisible(true);
        setLoginError(true);
      }
    } catch (error) {
      console.error('Unexpected error during login:', error.message);
    }
  };

  return (
    <section className="flex w-screen h-screen select-none">
      <motion.div
        className="mx-auto my-auto h-auto w-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      >
        <a className="flex mb-10 -mt-20" href="/">
          <div className="flex justify-center items-center grow basis-0 cursor-pointer duration-150">
            <div className="text-white font-['Righteous'] text-4xl">
              bulb
            </div>
          </div>
        </a>
        <span className="flex justify-center text-4xl text-white pt-8 pb-4">Login</span>
        {loginError ? (
          <>
            {isVisible && (
              <div className="inline-flex w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded relative" role="alert">
                <div className='mx-auto'>
                  <strong className="font-bold mr-1">Login Failed!</strong>
                  <span className="block sm:inline">Invalid credentials.</span>
                </div>
                <span className='justify-end'>
                  <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={handleClose}>
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                  </svg>
                </span>
              </div>
            )}
          </>
        ) : (<></>)}
        
        <form id="loginForm" className="w-96 space-y-4 mx-auto mt-4">
          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="email">Email:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="email"
              type="text"
              required
              onChange={handleEmailChange}
            />
            <label className="text-white text-lg" htmlFor="password">Password:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="password"
              type="password"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex flex-row w-full">
            <button
              className="text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-primary-800 hover:bg-primary-700 border-primary-600 bg-transition px-6 pt-2 pb-2 text-md flex"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="flex flex-row w-full justify-center">
            <span className='inline-flex gap-1'>
              <p className='text-white'>Don't have an account yet?</p>
              <a className='text-primary-500' href='/register'>Create one</a>
            </span>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
