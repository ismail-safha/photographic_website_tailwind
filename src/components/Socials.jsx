import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
// import icons
// import {
//   ImFacebook,
//   ImTwitter,
//   ImPinterest,
//   ImInstagrm,
//   ImYoutube,
// } from "react-icons/im";

const Socials = () => {
  const { mouseEntererHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEntererHandler}
      onMouseLeave={mouseLeaverHandler}
      className="hidden xl:flex ml-24"
    >
      {/* <ul className="flex gap-x-4">
        <li>
          <a href="#" target="_blank">
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <ImPinterest />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <ImInstagrm />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <ImYoutube />
          </a>
        </li>
      </ul> */}
    </div>
  );
};

export default Socials;
