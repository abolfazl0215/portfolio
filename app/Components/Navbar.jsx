import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center
        px-[10vw] pb-[1vw]
        transition-all duration-500 ease-in-out
        bg-[#000B15]/90 backdrop-blur-sm border-b 
        ${scrolled ? "pt-[1vw]  border-[#1E3A5F]" : "pt-[4vw] border-transparent"}
      `}>
      <svg
        className="w-[2vw]"
        viewBox="0 0 52 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.4141 0.707031L1.41406 13.707L14.4141 26.707"
          stroke="#1F93DF"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M37.4141 26.707L50.4141 13.707L37.4141 0.707031"
          stroke="#1F93DF"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M32.4141 0.707031L19.4141 26.707"
          stroke="#1F93DF"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>

      <ul className="flex items-center gap-[3vw] text-[1.05vw] font-light">
        {["Home", "Services", "My Projects", "About Me"].map(
          (item) => (
            <li
              key={item}
              className="border-b-2 border-transparent hover:border-blue-400 transition-all cursor-pointer">
              {item}
            </li>
          ),
        )}
      </ul>

      <button className="bg-gradient-to-tr from-blue-400 to-blue-600 p-[.5vw] px-[1.5vw] rounded-full text-[1.1vw]">
        Contact Me
      </button>
    </header>
  );
};

export default Navbar;
