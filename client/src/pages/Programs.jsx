import MainHero from '../components/MainHero';
import HeroFive from '../components/HeroFive';
import HeroSix from '../components/HeroSix';


const Programs = () => {
    return (
      <div>
        <MainHero>
          <div className="py-10 lg:py-20 w-full lg:w-[671px]">
            <p className="text-[#10CC6F] text-[1.5rem] font-bold">
              For Kids and Adult
            </p>
            <h1 className="text-[35px] lg:text-[50px] font-extrabold">
              Inspiring People for the Future
            </h1>
            <p className="text-[1rem] lg:text-[1.375rem] text-gray-500 pt-5">
              Join our hands-on RPA and AI courses in Microsoft Copilot, Microsoft
              Power Automate, and OpenAI ChatGPT. Perfect for both individuals and
              companies. Benefit from our successful YouTube teaching style to
              ensure personal career and team growth.
            </p>
          </div>
        </MainHero>
        <HeroFive />
        <HeroSix />
      </div>
    );
  };
  
  export default Programs;
  