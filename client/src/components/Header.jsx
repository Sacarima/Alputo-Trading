import { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import useMediaQuery from "../hooks/useMediaQuery"
import logo from  "../assets/alputo3.png"
import logo2 from  "../assets/alputo6.png"
import { toogleTheme } from '../redux/theme/themeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Button } from 'flowbite-react'


const Link = ({ page, selectedPage, setSelectedPage }) => {
    const  lowercasedPage = page.toLowerCase()
    return (
        <AnchorLink
            className={`${selectedPage === lowercasedPage ? " text-blue-500" : ""} hover:text-blue-500 transition duration-500 ease-in-out`}
            href={`#${lowercasedPage}`}
            onClick={() => setSelectedPage(lowercasedPage)}
            
        >
            {page}
        </AnchorLink>
    )
}

export default function Header({isTopOfPage, selectedPage, setSelectedPage}) {
    
   const [isMenuToggled, setIsMenuToggled] = useState(false)
   const isAboveSmallScreens = useMediaQuery("(min-width: 768px)")
   const navbarBackground = isTopOfPage ? "" : "transition duration-500 ease-in-out "
   const dispatch = useDispatch()
   const { theme } = useSelector(state => state.theme) 
 
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <a href="/">
                <img 
                    className='w-[20%] md:w-[14%]'
                    style={{ width: theme === 'dark' ? '6.5%' : '14%', paddingBlock: '10px'}}
                    src={theme === 'dark' ? logo2 : logo} 
                    alt="logo" 
                />
            </a>
        

        {/* DESKTOP NAVIGATION */}
        {isAboveSmallScreens ? (
                    <div className="flex justify-between items-center gap-16 text-sm ">
                      <Link 
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                      />
                      <Link 
                            page="Services"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                      />  
                      <Link 
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                      />
                       <Link 
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                      />

                       {/* THEME TOGGLE */}
                    <div>
                        <Button 
                            className='w-12 h-10- hidden sm:inline' 
                            color='gray' 
                            pill
                            onClick={() => dispatch(toogleTheme())}
                         >
                            {theme === 'light' ? <FaSun /> : <FaMoon />}
                        </Button>
                    </div>

                    </div>
                    
                ) : (
                    <div className='flex gap-4'>
                    <Button 
                            className='w-10 h-10- sm:inline' 
                            color='gray' 
                            pill
                            onClick={() => dispatch(toogleTheme())}
                         >
                            {theme === 'light' ? <FaSun /> : <FaMoon />}
                        </Button>
                        <button
                            className=" text-3xl text-blue-500 "
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                           ☰
                        </button>
                    </div>
                )}
                    
                   

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className="fixed right-0 bottom-0 h-full bg-primary w-[300px]">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button className='text-3xl text-white cursor-pointer' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                X
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="flex flex-col gap-10 ml-[33%] mx-auto text-2lx text-white">
                            <Link 
                                page="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                            <Link 
                                page="Services"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />  
                            <Link 
                                page="About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />  
                            
                            <Link 
                                page="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            /> 
                        </div>
                    </div>
                )}
        </div>
    </nav>
  )
}
