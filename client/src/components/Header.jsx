import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"
import logo from  "../assets/alputo3.png"
import logo2 from  "../assets/alputo1.png"
import { toogleTheme } from '../redux/theme/themeSlice'
import { toggleMenu } from '../redux/ui/uiSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaMoon, FaSun } from 'react-icons/fa'



const Link = ({ page, selectedPage, setSelectedPage }) => {
    const  lowercasedPage = page.toLowerCase()
    return (
        <AnchorLink
            className={`${selectedPage === lowercasedPage ? "text-navy" : ""} hover:text-green text-lightest-slate transition duration-500`}
            href={`#${lowercasedPage}`}
            onClick={() => setSelectedPage(lowercasedPage)}
            
        >
            {page}
        </AnchorLink>
    )
}

export default function Header({isTopOfPage, selectedPage, setSelectedPage}) {
   const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
   const navbarBackground = isTopOfPage ? "" : " bg-[#ffffffF2] transition text-light-nav duration-500 ease-in-out shadow-md"
   const dispatch = useDispatch()
   const { theme } = useSelector(state => state.theme)
   const isMenuOpen = useSelector(state => state.ui.isMenuOpen)
 
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0`}>
        <div 
            className='flex items-center justify-between mx-auto w-5/6'
            //style={{ width: theme === 'dark' ? 'light-menu' : 'dark-menu'}}
        >
            <a href="/">
                {/* <img 
                    className='w-[20%] xs:w-[15%] sm:w-[13%]  md:w-[14%] lg:w-[10%] xl:w-[8%] 2xl:w-[6%]'
                    style={{ width: theme === 'dark' ? 'logo-dark' : 'logo-light', paddingBlock: '8px'}}
                    src={theme === 'dark' ? logo2 : logo} 
                    alt="logo" 
                /> */}
                <img 
                //className="w-[20%] xs:w-[15%] sm:w-[13%] py-2 md:w-[15%] lg:w-[10%] xl:w- 2xl:w-[6%]"
                className="h-20"
                    src={logo2} 
                    alt="logo" 
                    
                />
            </a>
        {/**xxxs: "330px", xxsm: "400px", xsm: "480px", xmd: "576px", sm: "768px", xmd: "900px", md: "1060px", lg: "1280px", xl: "1440px", */}

        {/* DESKTOP NAVIGATION */}
        {isAboveSmallScreens ? (
                    <div 
                        className="flex justify-between items-center text-navy gap-16 font-extralight  text-sm "
                        
                    >
                      <div className="text-navy">
                          <Link
                                id="text-navy"
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                          />
                      </div>
                      <div className="text-navy">
                          <Link
                                page="Services"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                          />
                      </div> 
                      <div className="text-navy">
                          <Link
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                          />
                      </div>
                       <div className="text-navy">
                           <Link
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                                 />
                       </div>

                       {/* THEME TOGGLE */}
                    <div>
                        <button 
                            className='w-12 h-12 hidden sm:inline text-xl dark:text-lightest-slate text-lightest-navy cursor-pointer mario' 
                            onClick={() => dispatch(toogleTheme())}
                         >
                            {theme === 'light' ? <FaSun /> : <FaMoon />}
                        </button>
                    </div>

                    </div>
                    
                ) : (
                    <div className='flex gap-4 items-center  justify-between'>
                    <button 
                            className='w-10 h-10 sm:inline mx-auto text-navy text-xl outline-none focus-visible:outline-none   ' 
                            onClick={() => dispatch(toogleTheme())}
                         >
                            {theme === 'light' ? <FaSun /> : <FaMoon />}
                        </button>
                        <button
                            className=" text-4xl text-navy dark:text-navy mb-2 overflow-hidden"
                            onClick={() => dispatch(toggleMenu())}
                        >
                           ☰
                        </button>
                    </div>
                )}
                    
                   

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuOpen && (
                    <div className="fixed right-0 bottom-0 h-full bg-[#F5F5F5] w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-3">
                            <button 
                                className='text-3xl text-navy cursor-pointer mario' 
                                onClick={() => dispatch(toggleMenu())}
                            >
                                X
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex  flex-col gap-10 justify-center  text-navy mt-28">
                            <div className='flex flex-col items-center  gap-2 py-2'>
                                <div className='p-2 text-xl font-extralight'>
                                    <Link
                                        page="Home"
                                        className='text-xl p-4 font-extralight'
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className='py-2 text-xl font-extralight'>
                                    <Link
                                        page="Services"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className='py-2 text-xl  font-extralight'>
                                    <Link
                                        page="About"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                
                                <div className='py-2 text-xl font-extralight'>
                                    <Link
                                        page="Contact"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    </nav>
  )
}
