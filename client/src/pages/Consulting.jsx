import MainHero from '../components/MainHero';
import youtube2 from '../assets/Rectangle-13.svg'
import { Link } from 'react-router-dom';
import ContactConsult from '../components/ContactConsult';
import TermsAndConditions from '../components/TermsAndConditions';




const Consulting = () => {
    return ( 
        <>
        <MainHero>
        <div className="flex flex-col lg:flex-row justify-between dark:text-[#ffffff] py-5 lg:py-20">
        <div className=" py-12">
          <div className="flex gap-3 items-center">
              <p className="text-[#10CC6F] text-[1.2rem] lg:text-[1.5rem] font-bold mb-6">Tailored to your needs</p>

          </div>
          <h1 className="text-[2.5rem] lg:text-[3.75rem] font-extrabold ">Customized training and consulting</h1>
          <p className="text-[1.375rem] w-2/3 mt-6">
          We offer 1:1 personal training and consulting, mirroring our YouTube style, where we guide you step-by-step through each solution. Our proven track record ensures we can tackle any topic. Available in bundles of minimum 10 hours at €2,025 / DKK 15.000
          </p>
          
        </div>
       
        <div className="py-20">
           <div className=" w-full lg:w-[28.9375rem] h-[20.75rem] rounded-[1.25rem] flex items-center ">
            <img src={youtube2} />
           </div>

        </div>
      </div>
        </MainHero>
        <ContactConsult />
        <TermsAndConditions />


        </>
     );
}
 
export default Consulting;