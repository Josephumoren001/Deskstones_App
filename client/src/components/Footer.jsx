import envelope from "../assets/envelope.svg";
import LinkedinFooter from "../assets/smalllinkedin.svg";
import discord from "../assets/discord.svg";
import youtube from "../assets/youtube-logo.svg";
import facebook from "../assets/facebook-logo.svg"
const Footer = () => {
  return (
    <div className="bg-[#0C273D] px-5 lg:px-20 text-white py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-20">
        <div className=" w-full lg:w-[326px]">
          <p className="font-bold text-lg">Customer Service</p>
          <p className="mt-2 text-[16px]">
            For more questions, details, and booking, we are here to help you.
            We respond within 24 hours.
          </p>
          <div className="flex gap-3 items-center mt-4 font-bold">
            <img src={envelope} alt="" />
            <p>info@deskstone.com</p>
          </div>
        </div>
        <div className="w-full lg:w-[154px]">
          <p className="font-bold text-lg">Quick Links</p>
          <div className="mt-2">
            <a href="#" className="block mt-1">
              Programs
            </a>
            <a href="#" className="block mt-1">
              Consulting
            </a>
            <a href="#" className="block mt-1">
              Mentors
            </a>
            <a href="#" className="block mt-1">
              Blog
            </a>
            <a href="#" className="block mt-1">
              About
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[126px]">
          <p className="font-bold text-lg">Join Us At</p>
          <div className="flex flex-col mt-2">
            <div className="flex gap-2 items-center mb-2">
              <img
                src={discord}
                className="w-6 h-6"
              />
              <a href="#">Discord</a>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <img
                src={LinkedinFooter}
                className="w-6 h-6"
              />
              <a href="#">LinkedIn</a>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <img
                src={youtube}
                alt="YouTube Icon"
                className="w-6 h-6"
              />
              <a href="#">YouTube</a>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src={facebook}
                alt="Facebook Icon"
                className="w-6 h-6"
              />
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[377px]">
          <p className="font-bold text-lg">NewsLetter</p>
          <p className="mt-2">
            You can expect 1-2 newsletters a month. We promise not to spam you.
          </p>
          <form className="mt-4">
            <div className="flex gap-4 flex-col lg:flex-row">
              <input
                type="text"
                className="bg-[#193E5D] rounded-[5px] px-[12px] py-[6px] text-white w-full"
                placeholder="First Name"
              />
              <input
                type="text"
                className="bg-[#193E5D] rounded-[5px] px-[12px] py-[6px] text-white w-full"
                placeholder="Last Name"
              />
            </div>
            <div className="pt-4">
              <input
                type="email"
                className="bg-[#193E5D] rounded-[5px] px-[12px] py-[6px] text-white w-full"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" id="privacy-policy" className="mr-2" />
              <label htmlFor="privacy-policy">
                I agree to the{" "}
                <span className="underline">Privacy Policy.</span>
              </label>
            </div>
            <div className="mt-4">
              <button className="bg-[#10CC6F] px-[20px] py-[10px] rounded-[5px] text-white font-bold text-[14px]">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="text-[#AAA] flex justify-between pt-24 text-[20px] font-semibold">
        <div>
          <p>©2024 Deskstones</p>
        </div>
        <div>
            <p>
            FAQs
            </p>
        </div>
        <div>
            <p>Privacy Policy</p>
        </div>
        <div>
            <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
