import React, { useState, useEffect } from 'react';
import CreateUserInfo from './auth/createUserInfo';
import { motion } from "framer-motion";

export const Signin = () => {
  const [email, setEmail] = useState(null);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState(null);
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const [loginError, setLoginError] = useState(null);
  const [loginErrorCount, setLoginErrorCount] = useState(0);

  const handleLogin = async (event) => {
    event.preventDefault();
    if(loginErrorCount < 3){
      setLoginError(false);
    } else {
      document.getElementById('errorMessage').innerText = ''
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success === true) {
        const token = data.data.session.access_token;
        localStorage.setItem('authToken', token);
        const id = data.data.user.id;
        localStorage.setItem('userId', id);
        window.location.href = '/';
      } else {
        if(loginErrorCount >= 3){
          document.getElementById('errorMessage').innerText = 'Invalid credentials!'
        } else {
          setLoginError(true);
          setLoginErrorCount(v => v + 1)
        }
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
        <span className="flex justify-center text-4xl text-white pt-8 pb-4">Login</span>
        {loginError ? (
          <div className="flex flex-col w-full text-center px-4 py-3 mb-4 rounded relative" role="alert">
            <div className='mx-auto inline-flex'>
              <span id="errorMessage" className="text-lg text-red-500">Invalid credentials!</span>
            </div>
            {loginErrorCount >= 3 ? (
              <div className='mx-auto'>
                <a href='/account_recovery' className="block text-blue-500 sm:inline">Recover your account</a>
              </div>
            ) : (
              <div className='mx-auto'>
                <span className="block text-[#aaa] sm:inline">Please try again.</span>
              </div>
            )}
          </div>
        ) : null}
        
        <form id="loginForm" className="w-96 space-y-4 mx-auto mt-4 mb-8 px-6" onSubmit={handleLogin}>
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
              className="text-white custom-border-gray rounded-xl my-2 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="password"
              type="password"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex flex-row m-0 w-full">
            <button
              className="text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-primary-800 hover:bg-primary-700 border-primary-600 bg-transition px-6 pt-2 pb-2 text-md flex"
              type="submit"
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
