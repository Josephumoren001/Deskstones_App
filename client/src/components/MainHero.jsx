import React from 'react';

const MainHero = ({ children }) => {
  return (
    <div className="relative bg-hero-gradient min-h-screen flex flex-col px-5 lg:px-20 ">
     
      <div className="flex-grow flex flex-col w-full  text-[#0C273D] dark:text-white">
        {children}
      </div>
    </div>
  );
};

export default MainHero;
