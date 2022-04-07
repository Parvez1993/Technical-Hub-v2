import React from "react";
import language from "./images/language.png";
import arrow from "./images/arrow.png";
function ContactTop() {
  return (
    <div className="bg-blue">
      {" "}
      <div className="container mx-auto ">
        <div className="flex flex-row justify-between items-center">
          <div className="p-1.5 bg-blue border-0 flex items-center justify-between w-36">
            <div>
              <img src={language} alt="languge" className="w-7" />
            </div>
            <div className="text-sm text-white w-40">Select Language</div>
            <div>
              <img src={arrow} alt="arrow" className="w-4" />
            </div>
          </div>
          <div>
            <p className="text-white uppercase text-sm">
              <span className="text-white opacity-50 ">Call us at: </span>
              +880155566622
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTop;
