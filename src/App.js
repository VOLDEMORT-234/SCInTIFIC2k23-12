import { Navbar } from './Components/Navbar';
import { HeroSection } from './Components/LandingPage.jsx/HeroSection';
import { Section1 } from './Components/LandingPage.jsx/Section1';
import { Section2 } from './Components/LandingPage.jsx/Section2';
import { Section3 } from './Components/LandingPage.jsx/Section3';
import { Section4 } from './Components/LandingPage.jsx/Section4';
import { Section5 } from './Components/LandingPage.jsx/Section5';
import { Timeline } from './Components/Timeline';
import { Themes } from './Components/Themes/Themes';
import { JudingCriteria } from './Components/JudingCriteria';

function App() {
  return (
    <div className="bg-[#D9D9D9] bg-opacity-5">
      <Navbar />
      <HeroSection /> 
      <div className='h-[75px]'></div>
      <Section1 />
      <Section2 />
      <Section3 />
      <div className='h-[175px]'></div>
      <Section4 />
      <div className='h-[75px]'></div>
      <Section5 />
      <div className='h-[75px]'></div>
      <Timeline />
      <div className='h-[75px]'></div>
      <Themes  />
      <div className='h-[75px]'></div>
      <JudingCriteria />
      <div className='h-[75px]'></div>
    </div>
  )
}

export default App;
