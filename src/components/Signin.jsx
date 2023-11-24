import { motion } from "framer-motion";

export const Signin = () => {
  return (
    <section className="flex w-screen h-screen">
      <motion.div
          className="mx-auto my-auto h-auto w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <span className="flex justify-center text-4xl text-white py-8">Login</span>
          <form className="w-96 space-y-4" action="" method="post">
            <div className="flex flex-col">
              <label className="text-white text-lg" for="username">Username:</label>
              <input 
                className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 border-transition px-6 pt-2 pb-2 text-md flex"
                name="username"
                type="text"
              />
              <label className="text-white text-lg" for="username">Password:</label>
              <input 
                className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 border-transition px-6 pt-2 pb-2 text-md flex"
                name="password"
                type="password"
              />
            </div>
            <div className="flex flex-row w-full gap-4">
              <input
                className="text-white w-full justify-center custom-border-gray cursor-pointer rounded-xl focus:outline-none bg-primary-600 hover:bg-primary-500 bg-transition px-6 pt-2 pb-2 text-md flex"
                type="submit"
                value="Login"
              />
              <a 
                className="text-white w-full justify-center custom-border-gray cursor-pointer rounded-xl focus:outline-none bg-primary-900 hover:bg-primary-800 bg-transition px-6 pt-2 pb-2 text-md flex"
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
