import { AuthContext } from "../../../lib/authProvider";
import { useContext } from "react";
import { classnames } from "tailwindcss-classnames";
import FullscreenLink from "../FullscreenLink";
import SmallscreenLink from "../SmallscreenLink";
import {
  MdAnnouncement,
  MdDashboard,
  MdEventNote,
  MdRecentActors,
  MdRouter,
  MdSchool,
  MdSettingsApplications
} from "react-icons/md";

const links = [
  {
    href: "/",
    label: "Dashboard",
    icon: MdDashboard
  },
  {
    href: "/members",
    label: "Members",
    icon: MdRecentActors
  },
  {
    href: "/classes",
    label: "Classes",
    icon: MdSchool
  },
  {
    href: "/events",
    label: "Events",
    icon: MdEventNote
  },
  {
    href: "/marketing",
    label: "Marketing",
    icon: MdAnnouncement
  },
  {
    href: "/shoptools",
    label: "Shop Tools",
    icon: MdSettingsApplications
  },
  {
    href: "/accesscontrol",
    label: "Access Control",
    icon: MdRouter
  }
];

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  let { user, loading } = useContext(AuthContext);

  return (
    <header>
      {/* Off-canvas menu for mobile */}
      <div className="md:hidden">
        <div
          onClick={() => setIsMenuOpen(false)}
          className={classnames(
            "bg-gray-600 duration-300 ease-linear fixed inset-0 opacity-0 pointer-events-none transition-opacity z-30",
            {
              "opacity-75 pointer-events-auto": isMenuOpen === true,
              "opacity-0 pointer-events-none": isMenuOpen === false
            }
          )}
        ></div>
        <div
          className={classnames(
            "bg-gray-800 duration-300 ease-in-out transform fixed flex flex-col inset-y-0 left-0 max-w-xs w-full z-40",
            {
              "translate-x-0": isMenuOpen === true,
              "-translate-x-full": isMenuOpen == false
            }
          )}
        >
          <div
            className={classnames("absolute top-0 right-0 p-1 -mr-14", {
              "display: block": isMenuOpen === true,
              "display: hidden": isMenuOpen == false
            })}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:bg-gray-600"
            >
              <svg
                className="w-6 h-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="w-auto h-auto pr-15"
                src="/img/text-mixxer-white.png"
                alt="Workflow"
              />
            </div>
            <nav className="px-2 mt-5">
              {links.map(link => {
                const IconTag = link.icon;
                return (
                  <SmallscreenLink key={link.href} href={link.href}>
                    <IconTag className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300" />
                    {link.label}
                  </SmallscreenLink>
                );
              })}
            </nav>
          </div>
          <div className="flex flex-shrink-0 p-4 bg-gray-700">
            <a href="#" className="flex-shrink-0 block group">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium leading-6 text-white">
                    Tom Cook
                  </p>
                  <p className="text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden h-screen md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-gray-800">
          <div className="flex flex-col flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="w-auto"
                src="/img/full-mixxer-white.png"
                alt="WS Mixxer"
              />
            </div>
            {/* A Sidebar component, swap this element with another sidebar if you like */}
            <nav className="flex-1 px-2 mt-5 bg-gray-800">
              {links.map(link => {
                const IconTag = link.icon;
                return (
                  <FullscreenLink key={link.href} href={link.href}>
                    <IconTag className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300" />
                    {link.label}
                  </FullscreenLink>
                );
              })}
            </nav>
          </div>
          <div className="flex flex-shrink-0 p-4 bg-gray-700">
            {!loading &&
              (user ? (
                <div className="flex-shrink-0 block group focus:outline-none">
                  <div className="flex items-center">
                    <a href="/profile">
                      <img
                        className="inline-block rounded-full h-9 w-9"
                        src={user.picture}
                        alt=""
                      />
                    </a>
                    <div className="ml-3">
                      <p className="text-sm font-medium leading-5 text-white">
                        {user.name}
                      </p>
                      <a
                        href="/api/logout"
                        className="text-xs font-medium leading-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:underline"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-sm font-medium leading-5 text-white">
                  <a href="/api/login">Login</a>
                </p>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
