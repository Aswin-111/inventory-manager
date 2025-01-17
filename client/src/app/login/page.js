"use client";

import React, { useRef } from "react";
import interceptor from "../utils/interceptor";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const userRef = useRef("");
  const passwordRef = useRef("");
  const handleLogin = async () => {
    try {
      if (userRef.current.value && passwordRef.current.value) {
        const res = await interceptor.post(
          `${process.env.NEXT_PUBLIC_BASE}/login`,
          {
            username: userRef.current.value,
            password: passwordRef.current.value,
          }
        );
        console.log(res);
        localStorage.setItem("doratoken", res.data.token);
        localStorage.setItem("dorausername", res.data.username);
        toast.success("Login Successfully");
      } else {
        toast.error("Please enter username and password");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
  return (
    <div>
      <input type="text" className="border-2 rounded-xl " ref={userRef} />

      <input
        type="password"
        className="border-2 rounded-xl "
        ref={passwordRef}
      />

      <button
        onClick={handleLogin}
        className="bg-indigo-500 text-white px-5 py-5"
      >
        Login
      </button>

      <Toaster />
    </div>
  );
}

export default Login;
