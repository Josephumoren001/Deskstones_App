import { Link } from "react-router-dom";
import HeroFivee from "../assets/Rectangle-48.svg" ;
import arrow from "../assets/formkit_arrowright.svg"
const HeroFive = () => {
  return (
    <div className="bg-[#0C273D] px-5 py-12 lg:px-20 lg:py-32">
      <div className="w-full lg:w-[891px]">
        <div className="">
          <p className="text-[#10CC6F] text-[1.5rem] font-bold">Our Programs</p>
          <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
            Distraction To Distinction
          </h1>
          <p className="text-[1rem] lg:text-[1.375rem] text-white pt-5">
            Stine and Anders founded andersjensenorg. Our mission is clear: Make
            RPA and AI training straightforward and fun for everyone, from pros
            to everyday users. With hands-on, practical, easy-to-follow courses
            in Microsoft Copilot, Microsoft Power Automate, and OpenAI ChatGPT,
            we make complex topics something anyone can get excited about.
          </p>
        </div>
        <div className="pt-10">
          <img src={HeroFivee} />
        </div>
        <div className="pt-10 flex gap-3 ">
         
          <Link to='/register' className="border border-[#10CC6F] rounded-[0.3125rem] text-white text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] flex items-center gap-3">
            Get Started 
            <img src={arrow} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroFive;
