import React from "react";
import App from "next/app";
import "../public/tailwind.css";
import AuthProvider from "./../lib/authProvider";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}

export default MyApp;
