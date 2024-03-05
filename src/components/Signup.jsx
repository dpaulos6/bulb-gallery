import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Signup = () => {
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    setTimeout(() => {
      if (e.target.name === "username") {
        verifyUsername(e.target.value);
      }
      if (e.target.name === "email") {
        verifyEmail(e.target.value);
      }
    }, 250);
  };

  async function verifyUsername(value) {
    try {
      const response = await fetch("/api/getUsername.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: value,
        }),
      });

      if (response.status === 200) {
        setInvalidUsername(true);
        let registerButton = document.getElementById("registerButton");
        registerButton.disabled = true;
        registerButton.className =
          "text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-customDarkBg3 hover:bg-customDarkBg3Hover border-customGrayBorder bg-transition px-6 pt-2 pb-2 text-md flex";
      } else {
        setInvalidUsername(false);
        let registerButton = document.getElementById("registerButton");
        registerButton.disabled = true;
        registerButton.className =
          "text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-primary-800 hover:bg-primary-700 border-primary-600 bg-transition px-6 pt-2 pb-2 text-md flex";
      }
    } catch (error) {
      console.log(error);
      setInvalidUsername(false);
      let registerButton = document.getElementById("registerButton");
      registerButton.disabled = true;
      registerButton.className =
        "text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-primary-800 hover:bg-primary-700 border-primary-600 bg-transition px-6 pt-2 pb-2 text-md flex";
    }
  }

  async function verifyEmail(value) {
    try {
      const response = await fetch("/api/getEmail.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: value,
        }),
      });

      if (response.status === 200) {
        setInvalidEmail(true);
        let registerButton = document.getElementById("registerButton");
        registerButton.disabled = true;
        registerButton.className =
          "text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-customDarkBg3 hover:bg-customDarkBg3Hover border-customGrayBorder bg-transition px-6 pt-2 pb-2 text-md flex";
      } else {
        setInvalidEmail(false);
        let registerButton = document.getElementById("registerButton");
        registerButton.disabled = true;
        registerButton.className =
          "text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-primary-800 hover:bg-primary-700 border-primary-600 bg-transition px-6 pt-2 pb-2 text-md flex";
      }
    } catch (error) {
      console.log(error);
      setInvalidEmail(false);
      let registerButton = document.getElementById("registerButton");
      registerButton.disabled = true;
      registerButton.className =
        "text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-primary-800 hover:bg-primary-700 border-primary-600 bg-transition px-6 pt-2 pb-2 text-md flex";
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegisterSuccess(false);
    setRegisterError(false);
    setPasswordMismatch(false);

    if (formData.password === formData.rePassword) {
      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            name: formData.name + " " + formData.surname,
            email: formData.email,
            password: formData.password,
          }),
        });

        if (response.ok) {
          setRegisterSuccess(true);

          let registerButton = document.getElementById("registerButton");
          registerButton.disabled = true;
          registerButton.innerText = "Registering...";
          registerButton.className =
            "text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-customDarkBg3 hover:bg-customDarkBg3Hover border-customGrayBorder bg-transition px-6 pt-2 pb-2 text-md flex";

          setTimeout(() => {
            window.location.href = "/login";
          }, 2500);
        } else {
          setRegisterError(true);
        }
      } catch (error) {
        setRegisterError(true);
      }
    } else {
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
        <span className="flex justify-center text-4xl text-white pb-4">
          Register
        </span>

        {registerSuccess ? (
          <div
            className="flex flex-col w-full text-center px-4 py-3 mb-4 rounded relative"
            role="alert"
          >
            <div className="mx-auto inline-flex">
              <span className="text-lg text-green-400">
                User registration successful!
              </span>
            </div>
            <div className="mx-auto">
              <a href="/account_recovery" className="text-[#aaa] sm:inline">
                Redirecting...
              </a>
            </div>
          </div>
        ) : null}

        {registerError ? (
          <div
            className="flex flex-col w-full text-center px-4 py-3 mb-4 rounded relative"
            role="alert"
          >
            <div className="mx-auto inline-flex">
              <span className="text-lg text-red-500">
                Something went wrong!
              </span>
            </div>
            <div className="mx-auto">
              <span className="block text-[#aaa] sm:inline">
                If the error persists, contact support.
              </span>
            </div>
          </div>
        ) : null}

        {passwordMismatch ? (
          <div
            className="inline-flex w-full text-center px-4 py-3 mb-4 rounded relative"
            role="alert"
          >
            <div className="mx-auto">
              <span className="text-lg text-red-500">
                Passwords do not match!
              </span>
            </div>
          </div>
        ) : null}

        {invalidUsername ? (
          <div
            className="inline-flex w-full text-center px-4 py-3 mb-4 rounded relative"
            role="alert"
          >
            <div className="mx-auto">
              <span className="text-lg text-red-500">
                Username is already in use!
              </span>
            </div>
          </div>
        ) : null}

        {invalidEmail ? (
          <div
            className="flex flex-col w-full text-center px-4 py-3 mb-4 rounded relative"
            role="alert"
          >
            <div className="mx-auto inline-flex">
              <span className="text-lg text-red-500">
                Email is already in use!
              </span>
            </div>
            <div className="mx-auto">
              <a
                href="/account_recovery"
                className="block text-blue-400 sm:inline"
              >
                Login
              </a>
            </div>
          </div>
        ) : null}

        <form
          id="loginForm"
          className="w-96 space-y-4 mt-4 px-6 mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="username">
              Username:
            </label>
            <input
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <div className="flex flex-row gap-2">
              <div className="flex flex-col">
                <label className="text-white text-lg" htmlFor="name">
                  Name:
                </label>
                <input
                  className="text-white w-full custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white text-lg" htmlFor="surname">
                  Surname:
                </label>
                <input
                  className="text-white w-full custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
                  name="surname"
                  type="text"
                  value={formData.surname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <label className="text-white text-lg" htmlFor="email">
              Email:
            </label>
            <input
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <label className="text-white text-lg" htmlFor="password">
              Password:
            </label>
            <input
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label className="text-white text-lg" htmlFor="re-password">
              Confirm password:
            </label>
            <input
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="rePassword"
              type="password"
              value={formData.rePassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-row w-full gap-6">
            <button
              id="registerButton"
              className="text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-primary-800 hover:bg-primary-700 border-primary-600 bg-transition px-6 pt-2 pb-2 text-md flex"
              type="submit"
            >
              Register
            </button>
          </div>
          <div className="flex flex-row w-full justify-center">
            <span className="inline-flex gap-1">
              <p className="text-white">Already have an account?</p>
              <a className="text-primary-500" href="/login">
                Login
              </a>
            </span>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
