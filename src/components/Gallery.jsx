import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const galleryData = [
  {
    user: "John Watkins",
    title: "Founder of Dashflow",
    image: testimonial1,
  },
  {
    user: "John Watkins",
    title: "Founder of Dashflow",
    image: testimonial2,
  },
  {
    user: "John Watkins",
    title: "Founder of Dashflow",
    image: testimonial3,
  },
];

export const Gallery = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="gallery" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Photo Gallery
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          See through the lens of other people!
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {galleryData.map((gallery, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${gallery.user}-${index}`}
            >
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={gallery.image} alt="" width="45px" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {gallery.user}
                  </div>
                  <div className="custom-content-text-gray">
                    {gallery.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
