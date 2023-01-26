import React, { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

//import components
import Socials from "./Socials";
import MobileNav from "./MobileNav";
// import image logo
import Logo from "../assets/images/header/logo.svg";
// import Links from router
import { Link } from "react-router-dom";

const Header = () => {
  const { mouseEntererHandler, mouseLeaverHandler } = useContext(CursorContext);
  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* Logo */}
        <Link
          onMouseEnter={mouseEntererHandler}
          onMouseLeave={mouseLeaverHandler}
          to="/"
        >
          <img
            className="w-[199px] h-[100px] pb-[23px] object-cover max-w-[200px]"
            src={Logo}
            alt="Logo_header"
          />
        </Link>
        {/* navlink nav bar  */}
        <nav
          onMouseEnter={mouseEntererHandler}
          onMouseLeave={mouseLeaverHandler}
          className="hidden xl:flex  gap-x-12 font-semibold "
        >
          <Link to="/" className="text-[#696c6d] hover:text-primary transition">
            Home
          </Link>
          <Link
            to="/about"
            className="text-[#696c6d] hover:text-primary transition"
          >
            About me
          </Link>
          <Link
            to="/portfolio"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>

          <Link
            to="/contact"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>

          {/* <ul className="flex text-[#0E1112] gap-6">
            <li>
              <a> Home</a>
            </li>
            <li>
              <a> About me</a>
            </li>
            <li>
              <a>portfolio </a>
            </li>
            <li>
              <a> blog</a>
            </li>
            <li>
              <a> contact</a>
            </li>
          </ul> */}
        </nav>
      </div>
      {/* socails icons */}
      <Socials />
      {/* ======== mobile nav ========= */}
      <MobileNav />
    </header>
  );
};

export default Header;
