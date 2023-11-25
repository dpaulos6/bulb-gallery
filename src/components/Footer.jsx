import { BulbLogo } from "../assets/logos/BulbLogo";
import { FaInstagram, FaGithub } from "react-icons/fa6";

const footerData = [
  {
    title: "Products",
    items: [
      "Services", 
      "About Us", 
      "News and Stories", 
      "Roadmap"
    ],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: [
      "About Us", 
      "Jobs", 
      "Press", 
      "Contact Us"
    ],
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full flex flex-row mb-16 lg:mb-0">
              <div className="flex justify-start items-center grow basis-0">
                <a className="" href="#home" aria-label="Home">
                  <div className="flex items-center grow basis-0 cursor-pointer hover:scale-105 duration-150">
                    <div className="text-white mr-2 text-6xl">
                      <BulbLogo />
                    </div>
                    <div className="text-white font-['Inter'] font-bold text-xl">
                      Bulb
                    </div>
                  </div>
                </a>
              </div>
              <div className="flex w-36 justify-end lg:mx-0">
                <a
                  className="inline-block w-fit h-fit mr-2 p-2 bg-customDarkBg2 custom-border-gray hover-primary rounded-xl"
                  target="_blank"
                  href="https://instagram.com/dpaulos6"
                >
                  <FaInstagram className="text-white text-2xl" />
                </a>
                <a
                  className="inline-block w-fit h-fit mr-2 p-2 bg-customDarkBg2 custom-border-gray hover-primary rounded-xl"
                  target="_blank"
                  href="https://github.com/dpaulos6"
                >
                  <FaGithub className="text-white text-2xl" />
                </a>
              </div>
            </div>
            {/* <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Products</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Important Links
                </h3>
                <ul>
                  {footerData[1].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  {footerData[2].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
          <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block">
            dpaulos6 &copy; 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
