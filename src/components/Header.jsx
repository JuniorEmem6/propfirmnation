import React, { useState } from "react";
import {
  FaLink,
  FaSearch,
  FaUser,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Prop from "../assets/propfirm.jpeg"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    {
      name: "About Us",
      // dropdown: [
      //   { name: "FundedNext", href: "#evaluation" },
      //   { name: "Instant Funding", href: "#instant" },
      //   { name: "Maven", href: "#top-rated" },
      // ],
    },
    // {
    //   name: "Brokers",
    //   dropdown: [
    //     { name: "Exness", href: "#forex" },
    //     { name: "Headway", href: "#stocks" },
    //     { name: "Emex Capital", href: "#crypto" },
    //   ],
    // },
    // {
    //   name: "Resources",
    //   dropdown: [
    //     { name: "Trading Tools", href: "#tools" },
    //     { name: "Educational Content", href: "#education" },
    //     { name: "Community", href: "#community" },
    //   ],
    // },
  ];

  return (
    <header className="bg-gradient-to-r from-primary-dark to-primary-light shadow-lg">
      <div className="container mx-auto px-4 py-5">
        {/* Top Bar */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <FaLink className="text-teal-400 text-2xl" /> */}
            <img src={Prop} alt="PropFirmNation" height={20} width={20} />
            <span className="text-black font-bold text-xl md:text-2xl">
              PropFirm<span className="text-teal-400">Nation</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-6 lg:flex justify-between items-center">
            <Link to="/">
              <p className="text-teal-400 text-[18px] hover:text-secondary-light transition duration-300 font-medium mr-[10px]">
                Home
              </p>
            </Link>

            <Link to="/about">
              <p className="text-teal-400 text-[18px] hover:text-secondary-light transition duration-300 font-medium mr-[10px]">
                About Us
              </p>
            </Link>
{/* 
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => item.dropdown && toggleDropdown(index)}
                  className={`flex items-center space-x-1 text-[18px] text-teal-400 hover:text-secondary-light transition duration-300 font-medium ${
                    item.dropdown ? "pr-2" : ""
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown &&
                    (activeDropdown === index ? (
                      <FaChevronUp className="text-xs" />
                    ) : (
                      <FaChevronDown className="text-xs" />
                    ))}
                </button>

                {item.dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ${
                      activeDropdown === index ? "block" : "hidden"
                    } group-hover:block`}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-primary-light hover:text-white transition duration-200"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))} */}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-teal-400 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-3 pb-3 animate-fadeIn">
            <Link to="/">
              <p className="text-teal-400 text-[18px] hover:text-secondary-light transition duration-300 font-medium mr-[10px]">
                Home
              </p>
            </Link>

            <Link to="/about">
              <p className="text-teal-400 text-[18px] hover:text-secondary-light transition duration-300 font-medium mr-[10px]">
                About Us
              </p>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
