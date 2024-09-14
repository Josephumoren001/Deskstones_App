const Bookings = () => {
  return (
    <div className="bg-white px-5 py-12 lg:px-20 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[50%]">
          <p className="text-[#10CC6F] text-[1.5rem] font-bold pt-10">
            How can we help?
          </p>
          <h1 className="text-[30px] lg:text-[40px] font-extrabold">
            Questions, feedback or <br />
            bookings
          </h1>
          <p className="text-[1rem] lg:text-[1.375rem] text-[#222] pt-5">
            For more questions, details, and booking, contact Stine at
            info@andersjensen.org or fill out the contact form. We respond
            within 24 hours and are happy to arrange a meeting or chat to
            discuss how we can meet your specific needs.
          </p>
        </div>
        <div className="">
        <form className="mt-4">
            <div className="flex gap-4 flex-col lg:flex-row">
              <input
                type="text"
                className="w-full lg:w-[238px] h-[84px] bg-[#F1F1F1] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none"
                placeholder="First Name"
              />
              <input
                type="text"
                className="bg-[#F1F1F1]  lg:w-[238px] h-[84px] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none w-full"
                placeholder="Last Name"
              />
            </div>
            <div className="pt-4 flex gap-4 flex-col lg:flex-row">
              <input
                type="email"
                className="bg-[#F1F1F1] lg:w-[238px] h-[84px] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none w-full"
                placeholder="Email"
              />
              <input
                type="number"
                className="bg-[#F1F1F1] lg:w-[238px] h-[84px] rounded-[5px] px-[12px] py-[6px] text-[#6B6B6B] outline-none w-full"
                placeholder="Phone"
              />
            </div>
            <textarea name="" id="" className="bg-[#F1F1F1] w-full mt-5"></textarea>
            
            <div className="mt-4">
              <button className="bg-[#10CC6F] px-[20px] py-[10px] rounded-[5px] text-white font-bold text-[14px]">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
