import React from "react";

import Layout from "../components/layout";

function About() {
  return (
    <Layout>
      <h1>Marketing</h1>
      <p>
        This is the marketing page, navigating between this page and <i>Home</i>{" "}
        is always pretty fast. However, when you navigate to the <i>Profile</i>{" "}
        page it takes more time because it uses SSR to fetch the user first;
      </p>
    </Layout>
  );
}

export default About;
