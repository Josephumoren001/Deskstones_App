import HeroSevenn from "../assets/Frame71.svg";
const HeroSeven = () => {
  return (
    <div className="bg-[#EEEEEE] p-5 lg:p-20">
      <div>
        <p className="text-[#10CC6F] text-[1.5rem] font-bold">Trusted By</p>
        <h1 className="text-[35px] lg:text-[50px] font-extrabold dark:text-gray-700">
          Customers and partners
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center  gap-5 lg:justify-between pt-10">
          <div>
            <img src={HeroSevenn} alt="" />
          </div>
          <div>
            <img src={HeroSevenn} alt="" />
          </div>
          <div>
            <img src={HeroSevenn} alt="" />
          </div>
          <div>
            <img src={HeroSevenn} alt="" />
          </div>
          <div>
            <img src={HeroSevenn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSeven;
