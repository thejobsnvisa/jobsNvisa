import { useState } from "react";
import logo from "../assets/logo.svg";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Recruiters", href: "/recruiters" },
    { name: "Healthcare", href: "/healthcare" },
    { name: "Job Search", href: "/job-search" },
    { name: "Blogs", href: "/blogs" },
  ];

  const serviceItems = [
    { name: "Recruiter Services", href: "/recruiters-services" },
    { name: "Employee Services", href: "/employee-services" },
  ];

  return (
    <nav aria-label="Main navigation" className="w-full">
      <div className="relative w-full min-h-[100px] px-6 lg:px-10 bg-green-100 rounded-bl-[40px] rounded-br-[40px] flex items-center justify-between lg:justify-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-28 lg:h-12 lg:w-36 lg:absolute lg:left-10 xl:left-20"
        />

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-green-800 text-3xl z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-controls="main-navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navigation Menu */}
        <ul
          id="main-navigation"
          className={`
            ${isOpen ? "flex" : "hidden"}
            lg:flex
            flex-col
            lg:flex-row
            absolute
            lg:static
            top-full
            left-0
            w-full
            lg:w-auto
            bg-green-100
            lg:bg-transparent
            py-6
            px-6
            lg:p-0
            gap-6
            lg:gap-8
            xl:gap-10
            items-start
            lg:items-center
            z-20
            lg:ml-44
          `}
        >
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={
                item.name === "Services"
                  ? () =>
                      window.matchMedia("(min-width:1024px)").matches &&
                      setIsServicesOpen(true)
                  : undefined
              }
              onMouseLeave={
                item.name === "Services"
                  ? () =>
                      window.matchMedia("(min-width:1024px)").matches &&
                      setIsServicesOpen(false)
                  : undefined
              }
            >
              {item.name === "Services" ? (
                <>
                  <button
                    className="text-green-800 text-[20px] hover:font-bold transition flex items-center gap-2"
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen}
                  >
                    Services
                  </button>

                  <ul
                    className={`
                      lg:absolute
                      lg:top-full
                      lg:left-0
                      mt-3
                      bg-green-100
                      lg:bg-white
                      shadow-lg
                      rounded-md
                      lg:min-w-[220px]
                      overflow-hidden
                      transition-all
                      duration-300
                      ${
                        isServicesOpen
                          ? "max-h-48 opacity-100 py-2"
                          : "max-h-0 opacity-0 py-0"
                      }
                    `}
                  >
                    {serviceItems.map((service) => (
                      <li key={service.name}>
                        <a
                          href={service.href}
                          className="block whitespace-nowrap text-green-800 px-4 py-2 hover:bg-green-50"
                          onClick={() => {
                            setIsOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          {service.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  href={item.href}
                  className="text-green-800 text-[20px] hover:font-bold transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;