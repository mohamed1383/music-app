"use client"

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [loginForm, setLoginForm] = useState(true);

  return (
    <div className="w-[80%] relative h-[80%] rounded-[20px] border-[#ffffff0f] border overflow-hidden">
      <div
        className={`absolute flex flex-col transition-all duration-500
        items-center top-0 h-full w-[60%] 
        ${
          loginForm
            ? "right-0 rounded-r-[20px] rounded-l-[120px] bg-[#ffffffd6] text-black"
            : "left-0 rounded-l-[20px] rounded-r-[120px] bg-black border border-[#ff6a00] text-[#ff6a00]"
        }`}
      >

        <h1
          className={`text-[40px] font-[sans-serif] mt-8 ${
            loginForm ? "text-black" : "text-[#ff6a00]"
          }`}
        >
          {loginForm ? "Login" : "Create Account"}
        </h1>

 
        <form className="flex flex-col gap-5 mt-10 w-[70%]">
          {!loginForm && (
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              className="h-[50px] px-4 rounded-lg border border-[#ff6a00] bg-black text-[#ff6a00] 
              placeholder-gray-500 focus:border-[#ff6a00] focus:ring-2 focus:ring-[#ff6a00]/40 
              outline-none transition-all"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={`h-[50px] px-4 rounded-lg outline-none transition-all
              ${
                loginForm
                  ? "border border-gray-300 bg-white/80 text-black focus:border-[#ff6a00] focus:ring-2 focus:ring-[#ff6a00]/40"
                  : "border border-[#ff6a00] bg-black text-[#ff6a00] placeholder-gray-500 focus:border-[#ff6a00] focus:ring-2 focus:ring-[#ff6a00]/40"
              }`}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className={`h-[50px] px-4 rounded-lg outline-none transition-all
              ${
                loginForm
                  ? "border border-gray-300 bg-white/80 text-black focus:border-[#ff6a00] focus:ring-2 focus:ring-[#ff6a00]/40"
                  : "border border-[#ff6a00] bg-black text-[#ff6a00] placeholder-gray-500 focus:border-[#ff6a00] focus:ring-2 focus:ring-[#ff6a00]/40"
              }`}
          />

          <button
            type="submit"
            className="h-[50px] rounded-lg bg-[#ff6a00] text-white font-semibold 
            hover:bg-[#e55c00] transition-all shadow-md"
          >
            {loginForm ? "Login" : "Sign Up"}
          </button>
        </form>


        <div className="flex items-center gap-2 w-[70%] mt-6">
          <div className="h-[1px] bg-gray-300 flex-grow"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="h-[1px] bg-gray-300 flex-grow"></div>
        </div>


        <button
          onClick={() => console.log("Login with Google")}
          className="mt-6 flex items-center justify-center gap-3 h-[50px] w-[70%] 
          rounded-lg border border-gray-300 bg-white hover:bg-gray-100 
          transition-all shadow-sm"
        >
          <FcGoogle className="text-2xl" />
          <span className="font-medium text-gray-700">
            {loginForm ? "Login with Google" : "Sign up with Google"}
          </span>
        </button>

        <div
          className={`flex items-center mt-5 gap-[6px] ${
            loginForm ? "text-black" : "text-white"
          }`}
        >
          {loginForm ? "Don’t have an account?" : "Already have an account?"}
          <span
            onClick={() => setLoginForm((prev) => !prev)}
            className="text-[16px] cursor-pointer text-[#ff6a00] ml-1"
          >
            {loginForm ? "Create account" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
}
