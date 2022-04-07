import React from "react";

import { BiHeart, BiCartAlt, BiSearch } from "react-icons/bi";
function Navbar() {
  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-between items-center">
        <div className="flex-none">
          <h3 className="text-4xl">TechHub</h3>
        </div>
        <div className="flex-grow ">
          <div className="flex items-center justify-center ">
            <div className="flex">
              <input
                type="text"
                className="px-4 w-96 border-2 border-black outline-none"
                placeholder="Search..."
              />
              <button className="flex items-center justify-center px-4 py-2 bg-blue">
                <BiSearch className="text-2xl text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-around align-middle flex-none">
          <BiHeart className="text-4xl text-orange" />
          <BiCartAlt className="text-4xl text-orange" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
