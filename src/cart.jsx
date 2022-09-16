import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {MdOutlineAddAPhoto} from 'react-icons/md'

const Cart = () => {
  return (
    <div className="w-[98%] mx-auto">
        <p className="p-5  text-3xl">
          <AiOutlineMenu />
        </p>
      <div className="flex ">
        <div className="flex  mx-auto items-center space-x-2 border-2 rounded-full  text-xl lg:text-3xl">
          <AiOutlineSearch  />

          <input className=" p-4" type="text" placeholder="Search " />
          <p className="border-l pl-2 border-gray-400">
            <MdOutlineAddAPhoto />
          </p>
        </div>
      </div>
      <div className="flex items-center mt-10 space-x-5 rounded-md">
        <div className="flex flex-col space-y-2">
          <p className="max-w-[300px] ">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
          </p>
          <div className="flex justify-around items-center max-w-[300px]">
            <p className=" font-bold ">-</p>
            <p>1</p>
            <p className="   font-bold text-green-500">+</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            voluptate?
          </p>
          <p className="text-xl font-bold text-green-400">9999 $</p>
          <p className="font-bold">
            Color:
            <span className="font-normal p-2 text-green-500">Nice</span>
          </p>
          <p className="text-sm text-green-700">In Stock</p>
          <div className="flex  justify-evenly">
            <button className="bg-green-400 py-2 px-2 rounded-lg shadow-xl font-bold">
              Delete
            </button>
            <button className="text-green-400 bg-black font-bold py-2 px-2 shadow-2xl rounded-lg">
              See More Like This
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 space-x-5 rounded-md">
        <div className="flex flex-col space-y-2">
          <p className="max-w-[300px] ">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
          </p>
          <div className="flex justify-around items-center max-w-[300px]">
            <p className=" font-bold ">-</p>
            <p>1</p>
            <p className="   font-bold text-green-500">+</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            voluptate? PRO
          </p>
          <p className="text-xl font-bold text-green-400">99999 $</p>
          <p className="font-bold">
            Color:
            <span className="font-normal p-2 text-green-500">Nice</span>
          </p>
          <p className="text-sm text-green-700">In Stock</p>
          <div className="flex  justify-evenly">
            <button className="bg-green-400 py-2 px-2 rounded-lg shadow-xl font-bold">
              Delete
            </button>
            <button className="text-green-400 bg-black font-bold py-2 px-2 shadow-2xl rounded-lg">
              See More Like This
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-10 space-x-5 rounded-md">
        <div className="flex flex-col space-y-2">
          <p className="max-w-[300px] ">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt=""
            />
          </p>
          <div className="flex justify-around items-center max-w-[300px]">
            <p className=" font-bold ">-</p>
            <p>1</p>
            <p className="   font-bold text-green-500">+</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            voluptate? ULTRA
          </p>
          <p className="text-xl font-bold text-green-400">999999 $</p>
          <p className="font-bold">
            Color:
            <span className="font-normal p-2 text-green-500">Nice</span>
          </p>
          <p className="text-sm text-green-700">In Stock</p>
          <div className="flex  justify-evenly">
            <button className="bg-green-400 py-2 px-2 rounded-lg shadow-xl font-bold">
              Delete
            </button>
            <button className="text-green-400 bg-black font-bold py-2 px-2 shadow-2xl rounded-lg">
              See More Like This
            </button>
          </div>
        </div>
      </div>

      <div className="flex  flex-col ">
        <p className="text-center p-10   text-xl   space-x-10 font-bold">
          Subtotal : <span className="text-green-400 text-xl">1,109,997</span> $
        </p>
        <button className="text-xl text-center bg-black text-green-400 mx-auto  py-4 px-5  rounded-lg mb-5 font-bold max-w-[400px]">
          Proceed To Buy (3 Items){" "}
        </button>
      </div>
    </div>
  );
};

export default Cart;
