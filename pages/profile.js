import React, { useContext } from "react";
import Layout from "../components/layout";
import { AuthContext } from "../utils/authProvider";

function ProfileCard({ user }) {
  return (
    <>
      <h1>Profile</h1>

      <div>
        <h3>Profile (client rendered)</h3>
        <img src={user.picture} alt="user picture" />
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
    </>
  );
}

function Profile() {
  let { user, loading } = useContext(AuthContext);

  return (
    <Layout>{loading ? <>Loading...</> : <ProfileCard user={user} />}</Layout>
  );
}

export default Profile;
