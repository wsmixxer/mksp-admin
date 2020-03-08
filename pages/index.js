import React from "react";

import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";

function Home() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
          <p>
            To test the login click in <i>Login</i>
          </p>
          <p>
            Once you have logged in you should be able to click in{" "}
            <i>Profile</i> and <i>Logout</i>
          </p>
        </>
      )}

      {user && (
        <div className="p-4 shadow rounded bg-white">
          <h1 className="text-5xl font-bold text-purple-500">
            Hello world!!!!
          </h1>
          <img src={user.picture} alt="user picture" />
          <p className="text-gray-500">with Tailwind CSS</p>
          <p className="text-gray-500">nickname: {user.nickname}</p>
          <p className="text-gray-500">name: {user.name}</p>
        </div>
      )}
    </Layout>
  );
}

export default Home;
