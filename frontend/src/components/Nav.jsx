import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed z-50 w-full bg-black text-white py-4 px-8 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <a href="#" className="text-3xl font-bold">
            Mahinur
          </a>
          <span className="text-3xl font-bold text-purple-500">Milon</span>
          <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
        </div>

        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="group relative hover:text-purple-500 duration-300"
          >
            <span>Home</span>

            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="group relative hover:text-purple-500 duration-300"
          >
            <span>About</span>

            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="group relative hover:text-purple-500 duration-300"
          >
            <span>Skills</span>

            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="group relative hover:text-purple-500 duration-300"
          >
            <span>Projects</span>

            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* <a
            href="#experience"
            className="group relative hover:text-purple-500 duration-300"
          >
            <span>Experience</span>

            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a> */}
          <a
            href="#contact"
            className="group relative hover:text-purple-500 duration-300"
          >
            <span>Contact</span>

            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="md:hidden flex items-center justify-center text-2xl cursor-pointer mb-3">
          {showMenu ? (
            <RxCross2 onClick={() => setShowMenu(!showMenu)} />
          ) : (
            <TiThMenu onClick={() => setShowMenu(!showMenu)} />
          )}
        </div>
      </div>
      {showMenu &&(
        <div className="md:hidden mt-4 bg-black h-screen flex flex-col space-y-4 items-center justify-center rounded-lg">
          <a
            href="#home"
            className="group relative hover:text-purple-500 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>Home</span>

           
          </a>
          <a
            href="#about"
            className="group relative hover:text-purple-500 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>About</span>

           
          </a>
          <a
            href="#skills"
            className="group relative hover:text-purple-500 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>Skills</span>

           
          </a>
          <a
            href="#projects"
            className="group relative hover:text-purple-500 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>Projects</span>

           
          </a>
          {/* <a
            href="#experience"
            className="group relative hover:text-purple-500 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>Experience</span>

           
          </a> */}
          <a
            href="#contact"
            className="group relative hover:text-purple-500 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>Contact</span>

           
          </a>
        </div>
      )}
      
    </nav>
  );
}

export default Nav;
