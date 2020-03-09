import Head from "next/head";
import Sidebar from "./sidebar";
import Toolbar from "./toolbar";

let sidebarOpen = false;

const toggleSidebar = () => {
  return (sidebarOpen = !sidebarOpen);
};

function Layout({ user, loading = false, children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Head>
        <title>Layout</title>
      </Head>

      <Sidebar
        user={user}
        loading={loading}
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            onClick={toggleSidebar}
            class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <Toolbar
          user={user}
          loading={loading}
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <main
          class="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6"
          tabindex="0"
          x-data
          x-init="$el.focus()"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div class="py-4">
              <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
