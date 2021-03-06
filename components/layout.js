import React, { useState } from "react";
import { AuthContext } from "../utils/authProvider";
import { useContext } from "react";
import Head from "next/head";
import Sidebar from "./Menu/Sidebar";
import Toolbar from "./Toolbar";

function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let { user, loading } = useContext(AuthContext);

  return (
    <div className="flex h-screen overflow-hidden bg-mixxer-dark-gray">
      <Head>
        <title>Layout</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {loading && (
        <div className="flex content-center w-screen">
          <img className="w-40 h-40 m-auto" src="/img/m-mixxer-white.png" />
        </div>
      )}

      {!loading && user && (
        <>
          <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <div className="flex flex-col flex-1 w-0 overflow-hidden">
            <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <main
              className="relative z-0 flex-1 pt-2 pb-6 overflow-y-auto bg-gray-200 focus:outline-none md:py-6"
              tabIndex="0"
            >
              {children}
            </main>
          </div>{" "}
        </>
      )}

      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default Layout;
