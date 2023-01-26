import React, { useState, useEffect, createContext } from "react";

//create contex
export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  // cursor position state
  const [cursorePos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  // cursor bg state
  const [cursorBG, setCursorBG] = useState("default");
  // cursor mobile
  const mobileViewportIsActive = window.innerWidth < 768;
  useEffect(() => {
    // cursor mobile
    if (!mobileViewportIsActive) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      // add event
      window.addEventListener("mousemove", move);
      // window.addEventListener("mousemove", (e) => {
      //   console.log(e.clientX, e.clientY);
      // });
      // remove event
      return () => {
        window.removeEventListener("mousemove", move);
      };
    } else {
      setCursorBG("none");
    }
  }, []);
  // console.log(cursorePos)

  // cursor variants
  const curseorVariants = {
    default: {
      x: cursorePos.x - 16,
      y: cursorePos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorePos.x - 72,
      y: cursorePos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "differnce",
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: "rgba(255,255,255,1)",
    },
  };
  // mouse enter handler
  const mouseEntererHandler = () => {
    setCursorBG("text");
  };
  // mouse leaver handler
  const mouseLeaverHandler = () => {
    setCursorBG("default");
  };

  return (
    <CursorContext.Provider
      value={{
        curseorVariants,
        cursorBG,
        mouseEntererHandler,
        mouseLeaverHandler,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
