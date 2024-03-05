import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import {
  UserIcon,
  Cog6ToothIcon as SettingsIcon,
  ArrowRightStartOnRectangleIcon as LogoutIcon,
} from "@heroicons/react/24/outline";

import AuthCheck from "./auth/authCheck";

const navbarLinks = [
  { label: "Home", href: "#home", ariaLabel: "Home" },
  { label: "Gallery", href: "#gallery", ariaLabel: "Gallery" },
];

const userOptions = [
  {
    label: "Profile",
    href: "/profile",
    icon: <UserIcon className="h-4 w-4 my-auto" aria-hidden="true" />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <SettingsIcon className="h-4 w-4 my-auto" aria-hidden="true" />,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const logout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userId");
        window.location.reload();
      } else {
        console.error("Logout failed:", data.error);
      }
    } catch (error) {
      console.error("Unexpected error during logout:", error.message);
    }
  };

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
          <a
            className="navbar-link flex justify-center"
            href="/"
            aria-label="Home"
          >
            <div className="flex justify-start items-center grow basis-0 cursor-pointer">
              <div className="text-white font-['Righteous'] text-4xl">bulb</div>
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
          {AuthCheck() ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="text-white custom-border-gray hover-primary rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3 p-3 text-md flex focus:outline-none focus-within:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 min-w-max origin-top-right rounded-md bg-customDarkBg3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {userOptions.map(({ label, href, icon }) => (
                      <Menu.Item key={label}>
                        {({ active }) => (
                          <a
                            className={classNames(
                              active
                                ? "bg-customDarkBg3Hover text-white"
                                : "text-[#bbb]",
                              "flex flex-row cursor-pointer gap-2 px-3 py-2 text-sm",
                            )}
                            href={href}
                          >
                            {icon}
                            {label}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                    <hr className="border-[#444] w-5/6 mx-auto my-1" />
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-customDarkBg3Hover text-white"
                              : "text-[#bbb]",
                            "flex flex-row w-full cursor-pointer gap-2 px-3 py-2 text-sm",
                          )}
                          onClick={() => logout()}
                        >
                          <LogoutIcon
                            className="h-4 w-4 my-auto"
                            aria-hidden="true"
                          />
                          Log out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <a
              href="/login"
              target="_self"
              className="text-white custom-border-gray hover-primary rounded-xl bg-customDarkBg2 hover:bg-customDarkBg3 py-3 px-4 text-md flex focus:outline-none focus-within:outline-none"
            >
              <span className="pt-px">Login</span>
            </a>
          )}
        </motion.div>
      </div>
    </nav>
  );
};
