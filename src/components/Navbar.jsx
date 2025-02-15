import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";
import useAuth from "../hooks/useAuth";
import { RiDashboardFill } from "react-icons/ri";
import { FaSignOutAlt } from "react-icons/fa";
import logo from "/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const handleShowSideNav = () => {
    setOpen(!open);
  };

  // NavBar Class
  const navClass = ({ isActive }) =>
    isActive
      ? "flex items-center border-b-[2px] px-1 border-red-400"
      : "flex items-center px-1 border-b-[2px] border-transparent";

  // Navbar Links
  const navlinks = (
    <>
      <li className="block antialiased leading-normal ">
        <NavLink to={"/"} className={navClass}>
          Home
        </NavLink>
      </li>
      <li className="block antialiased leading-normal">
        <NavLink to={"/donation-requests"} className={navClass}>
          Donation Requests
        </NavLink>
      </li>
      {user ? (
        <li className="block antialiased leading-normal">
          <NavLink to={"/fundings"} className={navClass}>
            Fundings
          </NavLink>
        </li>
      ) : (
        ""
      )}
      <li className="block antialiased leading-normal">
        <NavLink end to={"/blog"} className={navClass}>
          Blogs
        </NavLink>
      </li>
    </>
  );

  const sideNavClass = ({ isActive }) =>
    isActive
      ? "block p-4 text-sm font-semibold bg-red-50 text-red-600 rounded"
      : "block p-4 text-sm font-semibold text-[#28282B] hover:bg-red-50 hover:text-red-600 rounded";

  return (
    <div className="grid min-h-[66px] w-full place-items-center rounded-lg p-6 lg:overflow-visible">
      <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
        <nav className="fixed top-0 z-50 block w-full max-w-full py-2 bg-white rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-lg backdrop-saturate-200 lg:py-3">
          <div className="flex max-w-[1440px] w-[93%] md:w-[95%] mx-auto items-center justify-between text-red-gray-900">
            {/* <----- Hamburger Icon ------> */}
            <div className="flex gap-3 items-center">
              <div className="lg:hidden">
                <button
                  onClick={handleShowSideNav}
                  className="navbar-burger flex items-center "
                >
                  <HiMenuAlt2 size={20} />
                </button>
              </div>
              <Link
                to={"/"}
                className="mr-4 flex items-center gap-1 cursor-pointer text-xl md:text-3xl font-bold leading-relaxed text-inherit antialiased"
              >
                <img className="w-8 md:w-12" src={logo} alt="" />
                BloodBond
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden mr-4 lg:block">
                <ul className="flex flex-col font-medium gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                  {navlinks}
                </ul>
              </div>
              {user ? (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 md:w-14 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user.photoURL}
                      />
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 border shadow-lg bg-base-100 rounded-box "
                  >
                    <div className="px-4 py-3 text-sm text-gray-900 space-y-1">
                      <div>{user.displayName}</div>
                      <div className="font-semibold truncate">{user.email}</div>
                    </div>
                    <hr className="w-[88%] mx-auto" />
                    <ul className="py-2 font-medium text-sm text-gray-700">
                      <li>
                        <Link
                          to={"/dashboard"}
                          className="px-4 py-3 hover:bg-gray-200 flex"
                        >
                          <RiDashboardFill size={19} />
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={logout}
                          className="flex px-4 py-3 hover:bg-gray-200"
                        >
                          <FaSignOutAlt size={19} />
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <Link to={"/login"}>
                  <button
                    className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-semibold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                    type="button"
                  >
                    <span>Sign in</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
      {/* Sidenavbar */}
      <div className={`navbar-menu relative z-50 ${!open && "hidden"}`}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <Link to={"/"} className="text-2xl font-bold ">
              BloodBond
            </Link>
            <button onClick={handleShowSideNav} className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          {/* <------ SideNav ------> */}
          <div>
            <ul>
              <li className="mb-1" onClick={handleShowSideNav}>
                <NavLink to={"/"} className={sideNavClass}>
                  Home
                </NavLink>
              </li>
              <li className="mb-1" onClick={handleShowSideNav}>
                <NavLink to={"/donation-requests"} className={sideNavClass}>
                  Donation Requests
                </NavLink>
              </li>
              {user ? (
                <li className="mb-1" onClick={handleShowSideNav}>
                  <NavLink to={"/fundings"} className={sideNavClass}>
                    Fundings
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li className="mb-1" onClick={handleShowSideNav}>
                <NavLink to={"/blog"} className={sideNavClass}>
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          {!user && (
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
                  href="#"
                >
                  Sign in
                </a>
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-red-600 hover:bg-red-700  rounded-xl"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
