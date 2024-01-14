import { motion } from "framer-motion";
import { BulbLogo } from "../assets/logos/BulbLogo";

export const Signup = () => {
  // const [formData, setFormData] = useState({
  //   username: '',
  //   fname: '',
  //   lname: '',
  //   email: '',
  //   password: '',
  //   rePassword: '',
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch('/api/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       // User registration successful, you can redirect or show a success message
  //       console.log('User registered successfully');
  //     } else {
  //       // Handle registration failure, show error message or handle as needed
  //       console.error('User registration failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during user registration:', error);
  //   }
  // };

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
            {/* <div className="text-white mr-4 scale-150 text-6xl">
              <BulbLogo />
            </div> */}
            <div className="text-white font-['Righteous'] text-4xl">
              bulb
            </div>
          </div>
        </a>
        <span className="flex justify-center text-4xl text-white py-8">Register</span>
        <form id="loginForm" className="w-96 space-y-4 mx-auto">
          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="username">Username:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="username"
              type="text"
              // value={formData.username}
              // onChange={handleChange}
            />
            <div className="flex flex-row gap-2">
              <div className="flex flex-col">
                <label className="text-white text-lg" htmlFor="username">Name:</label>
                <input 
                  className="text-white w-full custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
                  name="fname"
                  type="text"
                  // value={formData.name}
                  // onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-white text-lg" htmlFor="username">Surname:</label>
                <input 
                  className="text-white w-full custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
                  name="lname"
                  type="text"
                  // value={formData.surname}
                  // onChange={handleChange}
                />
              </div>
            </div>
            <label className="text-white text-lg" htmlFor="username">Email:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="email"
              type="email"
              // value={formData.email}
              // onChange={handleChange}
            />
            <label className="text-white text-lg" htmlFor="username">Password:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="password"
              type="password"
              // value={formData.password}
              // onChange={handleChange}
            />
            <label className="text-white text-lg" htmlFor="password">Confirm password:</label>
            <input 
              className="text-white custom-border-gray rounded-xl mt-2 mb-4 focus:outline-none focus:border-customPrimaryBorder bg-customDarkBg2 hover:bg-customDarkBg3 border-gray-700 transition px-6 pt-2 pb-2 text-md flex"
              name="re-password"
              type="password"
              // value={formData.rePassword}
              // onChange={handleChange}
            />
          </div>
          <div className="flex flex-row w-full gap-6">
            <button
              className="text-white w-full justify-center border cursor-pointer rounded-xl focus:outline-none bg-primary-800 hover:bg-primary-700 border-primary-600 bg-transition px-6 pt-2 pb-2 text-md flex"
              type="button"
              // onClick={handleSubmit}
            >
              Register
            </button>
            <a 
              className="text-white w-full justify-center custom-border-gray cursor-pointer rounded-xl focus:outline-none bg-customDarkBg3 hover:bg-customDarkBg3Hover bg-transition px-6 pt-2 pb-2 text-md flex"
              href="/login"
              target="_self"
            >
              Login
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  );
};
