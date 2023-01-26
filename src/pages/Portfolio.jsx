import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
// import images
import Image1 from "../assets/images/portfolio/1.png";
import Image2 from "../assets/images/portfolio/2.png";
import Image3 from "../assets/images/portfolio/3.png";
import Image4 from "../assets/images/portfolio/4.png";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";
const Portfolio = () => {
  const { mouseEntererHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section  "
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* text */}
          <motion.div
            onMouseEnter={mouseEntererHandler}
            onMouseLeave={mouseLeaverHandler}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              <b>tempora blanditiis</b> fugit quis nam unde dolor assumenda,
              debitis, quidem perferendis
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              quisquam? Lorem ipsum dolor sit amet consectetur quisquam? Lorem
              ipsum dolor
            </p>
            <Link to="/contact" className="btn mb-[30px] mx-auto lg:mx-0">
              View my Work
            </Link>
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEntererHandler}
            onMouseLeave={mouseLeaverHandler}
            className="grid grid-cols-2 lg:gap-2"
          >
            <div className="max-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
