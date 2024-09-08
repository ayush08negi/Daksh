import React, { useContext, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const About = () => {
    const ref = useRef()

    return (
        <section className="flex items-center justify-center bg-black xl:h-screen font-poppins "
            style={{
                backgroundImage: "url(" + "/about.webp" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <motion.div className="h-full w-full justify-center items-center flex-1   hidden sm:block"
                
                initial={{opacity:0}}
                whileHover={{
                    opacity:1,
                    background:'linear-gradient(to bottom, rgba(2, 2, 2, 0.633),rgba(2, 2, 2, 0.633))',
                }}
            >
                <motion.div className="flex flex-wrap w-full h-full items-center"   
                >       
                    <motion.div className="w-full h-[100vh] px-6 mb-10  lg:mb-0 flex flex-col justify-center items-center" 
                        initial={{y:100}}
                        whileHover={{y:0}}
                        transition={{duration:0.4}}
                        // style={{border:'2px solid red'}}
                    >
                        <motion.div className=" mb-6  " >
                            <h1 className="mt-2 mb-4 text-4xl font-bold text-lime-600 md:text-5xl ">
                                About <span className='text-white'>Us</span>
                            </h1>
                            <p className="text-lg text-white uppercase text-center" >Who we are?</p>
                        </motion.div>
                        <motion.p className="mb-6 md:w-[60vw] text-lg leading-7 text-gray-50 " >
                            Team Daksh is the official technical team of NIT Jamshedpur which design and fabricates  ATVs.
                            We also proudly claim the first position as the official club at NIT Jamshedpur.
                            Team Daksh was started in the year 2009 by a small group of students who have their
                            own determination to Explore the mechanism of ATVs. Every year we participate in
                            BAJA SAE and holds top position among all the teams. Our Team under the guidance
                            of Dr.sanjay and Mr. Rupak kumar have made remarkable innovation and got shifted
                            from roar of the engine to the electric pulse of progress. Now Team daksh is charged
                            with the electrifying power of electricity.
                        </motion.p>
                        <motion.a href="#"
                            className="px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700" >
                            <Link to='/about'>Learn more</Link>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

            <section className="flex items-center bg-black xl:h-screen font-poppins sm:hidden sm:mb-0" 
                style={{
                    backgroundImage: "url(" + "/about.webp" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6 "
                    style={{background:'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))'}}
                >
                    <div className="flex flex-wrap ">
                        <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                            
                        </div>
                        <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                            <div className="pl-4 mb-6 border-l-4 border-lime-600 ">
                                <span className="text-sm text-white uppercase" >Who we are?</span>
                                <h1 className="mt-2 text-3xl font-semibold text-lime-600 md:text-5xl ">
                                    About Us
                                </h1>
                            </div>
                            <p className="mb-6 text-base leading-7 text-gray-50" >
                                Team Daksh is the official technical team of NIT Jamshedpur which design and fabricates  ATVs.
                                We also proudly claim the first position as the official club at NIT Jamshedpur.
                                Team Daksh was started in the year 2009 by a small group of students who have their
                                own determination to Explore the mechanism of ATVs. Every year we participate in
                                BAJA SAE and holds top position among all the teams. Our Team under the guidance
                                of Dr.sanjay and Mr. Rupak kumar have made remarkable innovation and got shifted
                                from roar of the engine to the electric pulse of progress. Now Team daksh is charged
                                with the electrifying power of electricity.
                            </p>
                            <a href="#"
                                className="px-4 py-2 text-gray-100 bg-lime-600 rounded dark:bg-lime-500 dark:hover:bg-lime-700 hover:bg-lime-700">
                                <Link to='/about'>Learn more</Link>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    )
}

export default About
