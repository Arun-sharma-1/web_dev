"use client";
import { signIn, signOut } from "next-auth/react";
import React from "react";
const Appbar = () => {
  return (
    <div>
      <button
        onClick={() => {
          signIn();
        }}
      >
        Signin
      </button>{" "}
      <button
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Appbar;
