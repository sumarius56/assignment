import React from "react";
import { Link } from "react-router-dom";

const Select = () => {
  return (
    <div>
      <div className="flex justify-around bg-black text-green-300 w-full p-10 font-bold text-3xl">
        <div className="hover:scale-125 transition ease-in-out duration-300 motion-safe:animate-ping">
          <Link to="/login">LOGIN</Link>
        </div>
        <div className="hover:scale-125  transition ease-in-out duration-300 animate-pulse">
          <Link to="/cart">CART</Link>
        </div>
      </div>
      <p className="  text-green-400 mt-5 font-bold bg-black rounded-full py-2  animate-bounce text-center">
        Hi , I have completed the assignment, please choose a page !! Please
        choose phone in responsive mode, as you requested it for phone!!
      </p>
    </div>
  );
};

export default Select;
