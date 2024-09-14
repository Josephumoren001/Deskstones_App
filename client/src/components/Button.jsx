import React from "react";

const Button = ({ children }) => {
  return (
    <div className="">
      <button className="border border-[#10CC6F] rounded-[0.3125rem] text-[#10cc6F] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] hover:bg-[#10CC6F] hover:text-white ">
        {children}
      </button>
    </div>
  );
};

export default Button;
