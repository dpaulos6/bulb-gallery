import React, { useState } from "react";
import { motion } from "framer-motion";

import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const galleryData = [
  {
    user: "John Watkins",
    image: testimonial1,
  },
  {
    user: "John Watkins",
    image: testimonial2,
  },
  {
    user: "John Watkins",
    image: testimonial3,
  },
];

export const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
      {/* ... (rest of your code) */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
        {galleryData.map((gallery, index) => (
          <div
            className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
            key={`${gallery.user}-${index}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            // style={{
            //   backgroundImage: `url(${gallery.image})`,
            //   backgroundSize: "cover",
            //   width: "100%",
            // }}
          >
            <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
              <img src={gallery.image} alt="" width="45px" />
              <div className="flex flex-col ml-4">
                {/* Conditionally render name only on hover */}
                {hoveredIndex === index && (
                  <div className="custom-content-text-white font-medium">
                    {gallery.user}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
