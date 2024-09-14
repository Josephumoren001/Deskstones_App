import calendar from '../assets/calendar.svg'
import Blogimage from "../assets/Rectangle-27.svg";
const Blog = () => {
  return (
    <div className="bg-white p-5 rounded-[10px]">
      <div>
        <img src={Blogimage}/>
      </div>
      <div className="flex gap-3 items-center pt-5">
        <img src={calendar} />
        <p className="text-[14px] font-bold">Aug 14, 2024</p>
      </div>
      <div className="pt-2">
        <p className="text-[#222] text-[18px] font-bold">
          How good open source RPA?
        </p>
      </div>
      <div>
        <p className="text-[12px] text-[#737373] pt-5">
          Learn to improve your productivity with Microsoft Copilot 365. This
          beginner's course covers all important features and gives hands-on
          experience using Microsoft AI tools.
        </p>
      </div>
      <div className="pt-5">
        <button className="rounded-[5px] py-[10px] px-[111px] border border-[#10CC6F] text-[#10CC6F] font-bold text-[14px] hover:py-[14px] hover:px-[116px] w-full ">Read More</button>
      </div>
    </div>
  );
};

export default Blog;
