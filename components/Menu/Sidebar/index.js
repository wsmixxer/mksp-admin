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

function Sidebar({ user, loading, sidebarOpen, toggleSidebar }) {
  return (
    <header>
      {/* Off-canvas menu for mobile */}
      <div className="md:hidden">
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-30 transition-opacity duration-300 ease-linear bg-gray-600 opacity-0 pointer-events-none"
        ></div>
        <div className="fixed inset-y-0 left-0 z-40 flex flex-col w-full max-w-xs duration-300 ease-in-out transform -translate-x-full bg-gray-800">
          <div
            className={
              ("absolute top-0 right-0 p-1 -mr-14 ",
              sidebarOpen ? "display: block" : "display: hidden")
            }
          >
            <button
              onClick={toggleSidebar}
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
                className="w-auto h-8"
                src="/img/logos/workflow-logo-on-dark.svg"
                alt="Workflow"
              />
            </div>
            <nav className="px-2 mt-5">
              {links.map(link => {
                const IconTag = link.icon;
                return (
                  <SmallscreenLink href={link.href}>
                    <IconTag className="w-6 h-6 mr-4 text-gray-300 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300" />
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
                src="../static/full-mixxer-white.png"
                alt="WS Mixxer"
              />
            </div>
            {/* A Sidebar component, swap this element with another sidebar if you like */}
            <nav className="flex-1 px-2 mt-5 bg-gray-800">
              {links.map(link => {
                const IconTag = link.icon;
                return (
                  <FullscreenLink href={link.href}>
                    <IconTag className="w-6 h-6 mr-3 text-gray-300 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300" />
                    {link.label}
                  </FullscreenLink>
                );
              })}
            </nav>
          </div>
          <div className="flex flex-shrink-0 p-4 bg-gray-700">
            <a
              href="#"
              className="flex-shrink-0 block group focus:outline-none"
            >
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block rounded-full h-9 w-9"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-5 text-white">
                    Tom Cook
                  </p>
                  <p className="text-xs font-medium leading-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:underline">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Sidebar;