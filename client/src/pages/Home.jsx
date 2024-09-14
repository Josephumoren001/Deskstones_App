
import '../index.css'

import Hero from '../components/Hero.jsx'
import HeroEight from "../components/HeroEight.jsx";
import HeroFive from "../components/HeroFive.jsx";
import HeroFour from "../components/HeroFour.jsx";
import HeroSeven from "../components/HeroSeven.jsx";
import HeroSix from "../components/HeroSix.jsx";
import HeroThree from "../components/HeroThree.jsx";
// import HeroTwo from "../components/HeroTwo.jsx";

function Home() {
  
  return (
    <>
      <Hero/>
     
      <HeroThree />
      <HeroFour />
      <HeroFive />
      <HeroSix /> 
      <HeroSeven />
      <HeroEight />
     
      

           {/* <Editor /> */}
    </>
  );
}

export default Home;