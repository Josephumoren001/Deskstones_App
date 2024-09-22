import { Link } from "react-router-dom";
import HeroSixx from "../assets/Rectangle-49.svg";
import arrow from "../assets/formkit_arrowright.svg"
const HeroSix = () => {
    return (
      <div className="bg-[#20B15A] px-5 py-12 lg:px-20 lg:py-32">
        <div className="w-full lg:w-[891px]">
          <div className="">
            <h1 className="text-[35px] lg:text-[50px] text-white font-extrabold">
              Kids Can Code
            </h1>
            <p className="text-[1rem] lg:text-[1.375rem] text-white pt-5">
            "Our Kids Can Code" program introduces children to coding through fun, interactive coding sessions. Help your child build essential tech skills while exploring creativity and problem-solving. Register your child today!
            </p>
          </div>
          <div className="pt-10">
            <img src={HeroSixx} />
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
  
  export default HeroSix;
  