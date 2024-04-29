import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import useMediaQuery from './hooks/useMediaQuery';
import Header from './components/Header';
import HomeTwo from './pages/HomeTwo'
import Brands from './pages/Brands';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FeaturedSection from './pages/FeaturedSection';
import Footer from './pages/Footer';
import About from './pages/About';

export default function App() {
  // Access the menu state from the Redux store
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);
  const dispatch = useDispatch();
  const isAboveSmallScreens = useMediaQuery('(min-width: 1060px)');
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  {/* Mouse Effect */}
  const handleMouseMove = (e) => {
    setPosition({
       x: e.clientX, 
       y: e.clientY 
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  {/* sticky background-color on scoll */}
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };

    // 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Apply the blur effect class conditionally
  const contentClass = isMenuOpen ? 'effect-blur' : '';

  return (
    <div>
      <Header 
        isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
        
        
      />
      <div 
        className={`${contentClass}`}
        selectedPage
        >
        <HomeTwo />
      </div>
      {/* <div className={contentClass}>
        <div className={`w-5/6 mx-auto md:h-full`}>
          <Home />
        </div>
      </div> */}
      <div className={contentClass}>
        <Brands />
    </div>
    <div className={contentClass}>
        <About />
    </div>
    <div className={contentClass}>
        <FeaturedSection />
    </div>

    <div className={`bg-[#F5F5F5] dark:bg-navy ${contentClass}`}>
      <div className={`w-5/6 mx-auto md:h-full`}>
        <Services />
      </div>
    </div>

    <div className={contentClass}>
        <Contact />
    </div>

    <div className={contentClass}>
      <Footer/>
    </div>

    
      
    </div>
  )
}
