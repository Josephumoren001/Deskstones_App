import linkedin from "../assets/logos_linkedin.svg"; 
import google from "../assets/logos_google.svg";
import smallLinkedin from "../assets/bi_linkedin.svg";
const HeroTwo = () => {
    return (
      <div className="bg-[#0C273D] flex flex-col lg:flex-row justify-between px-8 lg:px-32 py-10 lg:py-20 text-white">
        {/* Trusted by Section */}
        <div className="flex gap-5 items-center justify-center lg:justify-start flex-wrap">
          <div>
            <p>Trusted by</p>
          </div>
          <div>
            <img src={linkedin} alt="LinkedIn" className="h-8 w-auto" />
          </div>
          <div>
            <img src={google} className="h-8 w-auto" />
          </div>
          <div>
            <img src={linkedin}className="h-8 w-auto" />
          </div>
          <div>
          <img src={linkedin}className="h-8 w-auto" />
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="flex gap-5 items-center justify-center lg:justify-end flex-wrap mt-5 lg:mt-0">
          <div>
            <p>Certifications:</p>
          </div>
          <div>
            <img src={smallLinkedin} className="h-8 w-auto" />
          </div>
          <div>
          <img src={smallLinkedin} className="h-8 w-auto" />
          </div>
        </div>
      </div>
    );
  };
  
  export default HeroTwo;
  