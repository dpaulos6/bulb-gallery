import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaUser } from 'react-icons/fa'

const navbarLinks = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  { label: "Gallery", href: "#gallery", ariaLabel: "Gallery" },
]

const userOptions = [
  { label: "Dashboard", href: "/dashboard", ariaLabel: "Home" },
  { label: "Profile", href: "/profile", ariaLabel: "Gallery" },
  { label: "Settings", href: "/settings", ariaLabel: "Gallery" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  }

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl select-none">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          className="min-w-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a className="navbar-link" href="/" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0 cursor-pointer">
              <div className="text-white font-['Righteous'] text-4xl">
                bulb
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pb-2">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="navbar-link"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="flex flex-row gap-4 min-w-[100px] justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          {(() => { 
            if(localStorage.getItem('isLoggedIn') === 'true') { 
              return (
                <>
                  <a
                    href="/profile"
                    target="_self"
                    className="text-white custom-border-gray hover-primary rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3 p-3 text-md flex focus:outline-none focus-within:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </a>
                  <button 
                    className="text-white custom-border-gray hover-primary rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 px-6 pt-2 pb-2 text-md flex"
                    onClick={() => logout()}
                  >
                    Logout
                  </button>
                </>
              )
            } else {
              return (
                <a
                  href="/login"
                  target="_self"
                  className="text-white custom-border-gray hover-primary rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3 p-3 text-md flex focus:outline-none focus-within:outline-none"
                >
                  <span className="pt-px">Login</span>
                </a>
              )
            }
          })()}
        </motion.div>
        <div
          className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>

      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10"
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="navbar-link"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <button 
                className="text-white custom-border-gray hover-primary rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 px-6 pt-2 pb-2 text-md flex"
                onClick={() => loginWithRedirect()}
              >
                Log in
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
