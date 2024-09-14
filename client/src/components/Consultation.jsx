import consultation from "../assets/Consultation.svg";
import arrow from "../assets/arrow.svg";
const Consultation = () => {
    return (
         <div className="bg-white px-5 lg:px-20 py-12 lg:py-20 text-[#0C273D]">
<div className="w-full lg:w-[891px]">
        <div className="">
          <h1 className="text-[35px] lg:text-[50px] font-extrabold">
            Consultation
          </h1>
          <p className="text-[1rem] lg:text-[1.375rem] pt-5">
            Stine and Anders founded andersjensenorg. Our mission is clear: Make
            RPA and AI training straightforward and fun for everyone, from pros
            to everyday users. With hands-on, practical, easy-to-follow courses
            in Microsoft Copilot, Microsoft Power Automate, and OpenAI ChatGPT,
            we make complex topics something anyone can get excited about.
          </p>
        </div>
        <div className="pt-10">
          <img src={consultation} alt="" />
        </div>
        <div className="pt-10 flex gap-3 ">
         
          <button className="border border-[#0C273D] rounded-[0.3125rem] text-[#0C273D] text-[0.875rem] font-bold px-[1.25rem] py-[0.625rem] flex items-center gap-3 hover:px-[1.3rem] hover:py-[0.725rem]">
            Book Now
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
    </div> 
    );
}
 
export default Consultation;