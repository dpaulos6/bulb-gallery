import { useState } from "react";
import { motion } from "framer-motion";

export const Signup = () => {
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [isPasswordMismatchVisible, setIsPasswordMismatchVisible] = useState(true);
  const handlePasswordMismatchClose = () => {
    setIsPasswordMismatchVisible(false);
  }; 

  const [registerError, setRegisterError] = useState(false);
  const [isRegisterErrorVisible, setIsRegisterErrorVisible] = useState(true);
  const handleRegisterErrorClose = () => {
    setIsRegisterErrorVisible(false);
  };

  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [isRegisterSuccessVisible, setIsRegisterSuccessVisible] = useState(true);
  const handleRegisterSuccessClose = () => {
    setIsRegisterSuccessVisible(false);
  };

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    surname: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if(formData.password === formData.rePassword) {
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            name: formData.name + " " + formData.surname,
            email: formData.email,
            password: formData.password,
          }),
        });
  
        if (response.ok) {
          setIsRegisterSuccessVisible(true);
          setRegisterSuccess(true);
          setTimeout(() => {
            window.location.href = '/login';
          }, 2500);
        } else {
          setIsRegisterErrorVisible(true);
          setRegisterError(true);
        }
      } catch (error) {
        setIsRegisterErrorVisible(true);
        setRegisterError(true);
      }
    } else {
      setIsPasswordMismatchVisible(true);
      setPasswordMismatch(true);
    }
  };
  

  return (
    <section className="flex w-screen h-screen">
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
        <span className="flex justify-center text-4xl text-white pt-8 pb-4">Register</span>
        {registerError ? (
          <>
            {isRegisterErrorVisible && (
              <div className="inline-flex w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded relative" role="alert">
                <div className='mx-auto'>
                  <strong className="font-bold mr-1">User registration failed!</strong>
                  <span className="block sm:inline">Something went wrong.</span>
                </div>
                <span className='justify-end'>
                  <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={handleRegisterErrorClose}>
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                  </svg>
                </span>
              </div>
            )}
          </>
        ) : (<></>)}

        {passwordMismatch ? (
          <>
            {isPasswordMismatchVisible && (
              <div className="inline-flex w-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded relative" role="alert">
                <div className='mx-auto'>
                  <strong className="font-bold mr-1">User registration failed!</strong>
                  <span className="block sm:inline">Passwords mismatch.</span>
                </div>
                <span className='justify-end'>
                  <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={handlePasswordMismatchClose}>
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                  </svg>
                </span>
              </div>
            )}
          </>
        ) : (<></>)}

        {registerSuccess ? (
          <>
            {isRegisterSuccessVisible && (
              <div className="inline-flex w-full bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded relative" role="alert">
                <div className='mx-auto'>
                  <strong className="font-bold mr-1">User registration succeeded!</strong>
                  <span className="block sm:inline">Redirecting...</span>
                </div>
                <span className='justify-end'>
                  <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" onClick={handleRegisterSuccessClose}>
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                  </svg>
                </span>
              </div>
            )}
          </>
        ) : (<></>)}
        
        <form id="loginForm" className="w-96 space-y-4 mx-auto">
          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="username">Username:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
            />
            <div className="flex flex-row gap-2">
              <div className="flex flex-col">
                <label className="text-white text-lg" htmlFor="name">Name:</label>
                <input 
                  className="text-white w-full custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white text-lg" htmlFor="surname">Surname:</label>
                <input 
                  className="text-white w-full custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
                  name="surname"
                  type="text"
                  value={formData.surname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label className="text-white text-lg" htmlFor="email">Email:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label className="text-white text-lg" htmlFor="password">Password:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label className="text-white text-lg" htmlFor="re-password">Confirm password:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="rePassword"
              type="password"
              value={formData.rePassword}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row w-full gap-6">
            <button
              className="text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-primary-800 hover:bg-primary-700 border-primary-600 bg-transition px-6 pt-2 pb-2 text-md flex"
              type="button"
              onClick={handleSubmit}
            >
              Register
            </button>
          </div>
          <div className="flex flex-row w-full justify-center">
            <span className='inline-flex gap-1'>
              <p className='text-white'>Already have an account?</p>
              <a className='text-primary-500' href='/register'>Login</a>
            </span>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
