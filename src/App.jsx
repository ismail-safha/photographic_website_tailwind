import React, { useContext } from "react";
// import components
import Header from "./components/Header";
import AnimRouters from "./components/AnimRouters";
// import router
import { BrowserRouter } from "react-router-dom";
// import motion
import { motion } from "framer-motion";
import { CursorContext } from "./context/CursorContext";

const App = () => {
  const { curseorVariants, cursorBG } = useContext(CursorContext);
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimRouters />
      </BrowserRouter>
      {/* cursor */}
      <motion.div
        variants={curseorVariants}
        animate={cursorBG}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div>
    </>
  );
};

export default App;
