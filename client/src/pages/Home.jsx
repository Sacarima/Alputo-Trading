import React from 'react'
import windhoekPhoto from '../assets/windhoek.jpeg'
import useMediaQuery from '../hooks/useMediaQuery'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'

export default function Home({ setSelectedPage}) {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <div >
      
        <section 
          
          className='md:flex md:justify-between md:items-center md:h-fully gap-24 py-10'  
        >
            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-between basis-3/4 z-10 mt-8 md:mt-32 py-2 px-2 flex-1">
                {isAboveMediumScreens ? (
                     
                        
                            <img 
                            src={windhoekPhoto}
                            className=" transition duration-500   block z-10 
                                max-w[300px] md:max-w-[800px] ml-24"
                            alt="windhoek church" />
                        
                     
                ) : (
                    <img 
                        src={windhoekPhoto}
                        className=" transition duration-500 z-10 w-full
                            max-w[400px] md:max-w-[600px]"
                        alt="profile" 
                    />
                )}
            </div>

            {/* TEXT SECTION */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">

                    {/* HEADINGS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >

                    </motion.div>
                    <motion.span
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="text-2xl md:text-5xl tex font-semibold text-start"
                    >
                      Welcome <span className='dark:text-green text-dark-navy'>to</span>
                    </motion.span>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="text-6xl md:text-7xl font-bold text-start text-light-slate"
                    >
                      Alputo Trading 
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.1 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="mt-4 mb-7 text-lg font-extralight text-start text-ight-navy md:text-start opacity-60 dark:text-lightest-slate py-2"
                    >
                        We are a trading company based in Angola
                        and Namibia, dedicated to connecting
                        people, businesses, and markets beyond
                        borders. Our mission is to facilitate trade
                        and promote economic growth by offering
                        a variety of comprehensive services to
                        meet our clients' needs..
                    </motion.p>

                    {/* CALL TO ACTIONS */}
                    <motion.div
                        className="flex mt-5 justify-start md:justify-start"
                        intitial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <AnchorLink
                            className="dark:bg-green bg-navy text-lightest-slate dark:text-dark-navy rounded-sm py-3 px-7 font-semibold
                            hover:bg-dark-navy hover:text-white hover: transition duration-500"
                            onClick={() => setSelectedPage("contact")}
                            href="#contact"
                        >
                            Contact Us
                        </AnchorLink>
                        <AnchorLink
                            className="rounded-r-sm dark:bg-green bg-navy py-0.5 pr-0.5"
                            onClick={() => setSelectedPage("contact")}
                            href="#contact"
                        >
                            <div
                                className="dark:bg-navy hover:text-opacity-50 hover:border border-l-[10.5px] transition duration-500 w-full h-full flex items-center
                                justify-center font-playfair px-10 bg-lightest-slate dark:text-lightest-slate text-dark-navy"
                            >
                                Let's Talk
                            </div>
                        </AnchorLink>
                    </motion.div>
                </div>
        </section>

    </div>
  )
}
