import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
// import image
import WomanImg from "../assets/images/about/woman.png";
// import link
import { Link } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
// import transition
import { transition1 } from "../transitions";

const About = () => {
  const { mouseEntererHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section "
    >
      <div className="container max-auto h-full relative">
        {/* text & img wrapper */}
        <div
          onMouseEnter={mouseEntererHandler}
          onMouseLeave={mouseLeaverHandler}
          className=" flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16"
        >
          {/* image */}
          <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-63 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
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

            <Link to="/portfolio" className="btn">
              Hire me
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
