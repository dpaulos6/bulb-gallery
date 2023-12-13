import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  LifebuoyIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaInstagram, FaLinkedinIn, FaGithub, FaUser } from 'react-icons/fa'

import { v4 as uuidv4 } from 'uuid';

import { BulbLogo } from "../assets/logos/BulbLogo";

const navbarLinks = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  { label: "Gallery", href: "#gallery", ariaLabel: "Gallery" },
];

const userOptions = [
  { label: "Dashboard", href: "/dashboard", ariaLabel: "Home" },
  { label: "Profile", href: "/profile", ariaLabel: "Gallery" },
  { label: "Settings", href: "/settings", ariaLabel: "Gallery" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function validateLogin(){
    return 1+2 == 2
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
              {/* <div className="text-white mr-2 text-6xl">
                <BulbLogo />
              </div> */}
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
            if(validateLogin()) { 
              return (
                <Popover className="relative h-full">
                  {({ open }) => (
                    <>
                      <Popover.Button 
                        className={classNames(
                          open ? 'bg-primary-800 border-primary-500' : '',
                          "text-white custom-border-gray hover-primary rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3 p-3 text-md flex focus:outline-none focus-within:outline-none"
                        )}
                      >
                        <FaUser
                          className={classNames(
                            open ? 'text-white' : '',
                            'h-auto w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-fit max-w-xs -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid bg-customDarkBg3 gap-6 px-5 py-6 sm:p-8">
                              {/* <h3 className="text-base text-center font-medium text-gray-700">My Projects</h3> */}
                              {userOptions.map((item) => (
                                <a
                                  key={uuidv4()}
                                  href={item.href}
                                  className="-m-3 flex items-start rounded-lg p-3 hover:bg-customDarkBg3Hover"
                                >
                                  <div className="w-full">
                                    <p 
                                      className="text-base mr-4 w-full font-medium text-white"
                                      // style={{
                                      //   border: '1px solid',
                                      //   borderColor: getRandomColor()
                                      // }}
                                    >
                                      {item.label}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            {/* <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-base font-medium text-gray-500">Social Medias</h3>
                                <ul className="mt-4 space-y-1">
                                  <a href="" className="font-medium">
                                    <li key="" className="truncate text-base">
                                      <div className="inline-flex text-gray-700 hover:text-gray-900">
                                        <FaInstagram className="my-auto"/>
                                        <span className="mx-2 my-0">something</span>
                                      </div>
                                    </li>
                                  </a>
                                </ul>
                              </div>
                            </div> */}
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              )
            } else {
              return (
                <div className="grow basis-0 justify-center hidden lg:flex">
                  {/* <a
                    className="text-white custom-border-gray hover-primary rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 px-6 pt-2 pb-2 text-md flex"
                    href="/login"
                    target="_self"
                    aria-label="login"
                  >
                    <span className="pt-px">Login</span>
                  </a> */}
                  <button 
                    className="text-white custom-border-gray hover-primary rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 px-6 pt-2 pb-2 text-md flex"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                </div>
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
              <a
                className="text-white custom-border-gray rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href=""
                target="_blank"
              >
                Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
