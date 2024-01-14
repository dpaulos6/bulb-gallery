import { motion } from "framer-motion";
import { BulbLogo } from "../assets/logos/BulbLogo";

export const Signin = () => {
  async function submitForm() {
    const form = document.getElementById('loginForm');
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/testing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Serverless function response:', result);
      } else {
        console.error('Failed to call serverless function:', response.statusText);
      }
    } catch (error) {
      console.error('Error calling serverless function:', error.message);
    }
  }

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
            <div className="text-white mr-4 scale-150 text-6xl">
              <BulbLogo />
            </div>
            <div className="text-white font-['Inter'] font-bold text-5xl">
              Bulb
            </div>
          </div>
        </a>
        <span className="flex justify-center text-4xl text-white py-8">Login</span>
        <form id="loginForm" className="w-96 space-y-4 mx-auto">
          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="username">Username:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="username"
              type="text"
            />
            <label className="text-white text-lg" htmlFor="password">Password:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="password"
              type="password"
            />
          </div>
          <div className="flex flex-row w-full gap-6">
            <button
              className="text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-primary-800 hover:bg-primary-700 border-primary-600 bg-transition px-6 pt-2 pb-2 text-md flex"
              type="button"
              // onClick={submitForm}
            >
              Login
            </button>
            <a 
              className="text-white w-full justify-center custom-border-gray cursor-pointer rounded-xl focus:outline-none bg-customDarkBg3 hover:bg-customDarkBg3Hover bg-transition px-6 pt-2 pb-2 text-md flex"
              href="/register"
              target="_self"
              value="Register"
            >
              Register
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
