import React, { useState } from "react";
import { motion } from "framer-motion";

import { v4 as uuidv4 } from 'uuid';

import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";
import testimonial4 from "../assets/images/testimonial4.png";

import dashboard from "../assets/images/dashboard.jpg";

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
  {
    user: "John Watkins",
    image: testimonial4,
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
    <section className="w-full flex justify-center sm:px-2 md:px-6 lg:px-10 xl:px-16 pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
      <div className="w-full transition-all ease-in-out duration-300 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-auto-fill gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
        {galleryData.map((gallery, index) => (
          <div
            className="photo-card w-full custom-border-gray-darker cursor-zoom-in rounded-xl bg-customDarkBg3 flex flex-col"
            key={uuidv4()}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: `url(${dashboard})`,
              backgroundSize: "cover",
              aspectRatio: "16/9",
              width: "100%",
              height1: "100%",
            }}
          >
            <div className="photo-options h-full flex mb-auto gradientback-invert rounded-xl p-4 sm:p-2 md:p-4 lg:p-4 xl:p-4 opacity-0 duration-300" style={{ position: "relative" }}>
              <div className="flex w-full justify-start h-max">
                {/* Add your content for photo options here */}
              </div>
            </div>
            <div className="photo-user h-full flex mt-auto gradientback rounded-xl p-4 sm:p-2 md:p-4 lg:p-4 xl:p-4 opacity-0 duration-300" style={{ position: "relative" }}>
              <div className="flex w-full justify-start h-max">
                <img src={gallery.image} alt="" width="7.5%" className="rounded-full"/>
                <div className="flex flex-col ml-4 my-auto">
                  <div className="custom-content-text-white font-medium">
                    {gallery.user}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
