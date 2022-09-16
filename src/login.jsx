import React from "react";

const Login = () => {
  return (
    <div className=" flex items-center justify-center p-20 w-full lg:w-[70%] space-y-7 mt-20 rounded-lg h-[70vh] bg-green-300/50 flex-col  mx-auto">
      <input
        className="w-full lg:w-[50%] border-b-2  text-black p-4 rounded-lg shadow-xl border-black"
        type="email"
        placeholder="📧 Email"
      />
      <input
        className="w-full lg:w-[50%] border-b-2  p-4 rounded-lg shadow-xl border-black"
        type="password"
        placeholder="🔒  Password"
      />
      <div className="flex justify-between w-full lg:w-[50%] text-sm font-bold space-x-2">
        <div className="flex  space-x-2">
          <p className="text-[12px]">Remember Me</p>
          <input type="checkbox" />
        </div>
        <button className="text-[12px]">Forgot Password?</button>
      </div>
      <div className=" flex flex-col justify-center items-center  space-x-5">
        <button className="text-green-300 bg-black py-5 px-20 rounded-lg font-bold shadow-inner text-3xl">
          LOGIN
        </button>
        <div className="flex justify-between mx-auto text-center">
          <p>Don't have an account?</p>
          <button className="underline  pl-1 ">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
