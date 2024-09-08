import React from 'react'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'

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
    return (
        <>
            <Layout>
                <div className='h-full w-full ' style={{ backgroundColor: 'rgb(18, 18, 18)' }}>
                    <div className='flex w-full flex-wrap md:gap-x-20 justify-center text-white'>
                        <motion.div className="justify-center flex-1 max-w-6xl py-4 mx-auto md:px-6 hidden sm:block mb-20"
                            variants={variants}
                            initial='initial'
                            whileInView='animate'
                        >
                            <div className='w-full text-center mt-12 mb-20'>
                                <h2 className='text-xl sm:text-4xl'>Welcome To <span className='text-lime-600'>Team Daksh</span></h2>
                            </div>
                            <div className="flex flex-wrap ">
                                <motion.div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0" variants={variants}>
                                    <div className="relative lg:max-w-md">
                                        <motion.img src="/about2.webp" alt="aboutimage"
                                            className="relative z-10 object-cover w-full rounded h-96" variants={variants} />
                                        <motion.div
                                            className="absolute bottom-0 right-0 z-10 p-6 bg-white border-4 border-lime-600 rounded shadow dark:border-lime-500 lg:-mb-8 lg:-mr-11 sm:p-6  ">
                                            <p className="text-xl font-semibold md:w-72 text-black">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                    className="absolute top-0 left-0 w-16 h-16 text-lime-600 dark:text-gray-300 opacity-10"
                                                    viewBox="0 0 16 16" variants={variants}>
                                                    <path
                                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                                    </path>
                                                </svg> We Work Together, Perform Together, Achieve Together
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <motion.div className="w-full px-6  lg:w-1/2 lg:mb-0 " variants={variants}>
                                    <motion.div className="pl-4 mb-6 border-l-4 border-lime-600 " variants={variants}>
                                        <span className="text-lg md:text-xl  uppercase text-white ">Who we are?</span>
                                    </motion.div>
                                    <motion.p className="mb-6 text-base leading-7 text-gray-100 " variants={variants} >
                                        Team Daksh is the official technical team of NIT Jamshedpur which design and fabricates  ATVs.
                                        We also proudly claim the first position as the official club at NIT Jamshedpur.
                                        Team Daksh was started in the year 2009 by a small group of students who have their
                                        own determination to Explore the mechanism of ATVs. Every year we participate in
                                        BAJA SAE and holds top position among all the teams. Our Team under the guidance
                                        of Dr.sanjay and Mr. Rupak kumar have made remarkable innovation and got shifted
                                        from roar of the engine to the electric pulse of progress. Now Team daksh is charged
                                        with the electrifying power of electricity.
                                    </motion.p>

                                </motion.div>
                            </div>
                        </motion.div>



                        <section className="flex items-center bg-black xl:h-screen font-poppins sm:hidden sm:mb-0"
                            style={{
                                backgroundImage: "url(" + "/about2.webp" + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6 "
                                style={{ background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.333),rgba(2, 2, 2, 0.333))' }}
                            >
                                <div className="flex flex-wrap ">
                                    <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">

                                    </div>
                                    <div className="w-full px-6 lg:w-1/2 lg:mb-0 ">
                                        <div className="pl-4 mb-6 border-l-4 border-lime-600 ">
                                            <span className="text-sm text-white uppercase" >Who we are?</span>
                                            <h1 className="mt-2 text-3xl font-semibold text-lime-600 md:text-5xl ">
                                                About Us
                                            </h1>
                                        </div>
                                        <p className="mb-6 text-base sm:textleading-7 text-gray-50" >
                                            Team Daksh is the official technical team of NIT Jamshedpur which design and fabricates  ATVs.
                                            We also proudly claim the first position as the official club at NIT Jamshedpur.
                                            Team Daksh was started in the year 2009 by a small group of students who have their
                                            own determination to Explore the mechanism of ATVs. Every year we participate in
                                            BAJA SAE and holds top position among all the teams. Our Team under the guidance
                                            of Dr.sanjay and Mr. Rupak kumar have made remarkable innovation and got shifted
                                            from roar of the engine to the electric pulse of progress. Now Team daksh is charged
                                            with the electrifying power of electricity.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </section>


                        <div className='text-white'>
                            <div className='flex flex-wrap justify-center'>
                                <div className='rounded-md  w-full px-5 sm:px-2 sm:w-2/3 h-full' >
                                    <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 mb-4 '>Our <span className='text-lime-600'>Innovation</span> </h1>
                                    <p className='text-base sm:text text-gray-100'>
                                        Our innovative exhaust system incorporates a revolutionary plasma film, transforming
                                        the conventional setup. This technology leverages plasma filtration to break down
                                        pollutants in exhaust gases, reducing harmful emissions significantly. With benefits
                                        including emission reduction, improved air quality, and a commitment to environmental
                                        sustainability, our solution represents a synergy of traditional engineering and
                                        cutting-edge science. This marks a substantial leap towards eco-friendly and sustainable
                                        automotive solutions, aligning with the broader goals of the industry.
                                    </p>
                                </div>
                                <div className='my-3 sm:w-auto w-full sm:px-0 px-5 mt-4 sm:my-0 '>
                                    <img src="/mission.webp" className='w-full rounded-md object-cover h-auto sm:h-40  ' alt="Project" />
                                </div>
                            </div>
                            <div className='flex md:flex-wrap flex-wrap-reverse justify-center mt-4 mb-4 sm:my-20'>
                                <div className='my-3 sm:w-auto w-full sm:px-0 px-5 mt-4 sm:my-0'>
                                    <img src="/crausal2.webp" className='w-full rounded-md object-cover h-auto sm:h-40 items-center' alt="Project" />
                                </div>
                                <div className='rounded-md  w-full px-5 sm:px-2 sm:w-2/3 h-full ml-2' >
                                    <h1 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl  mb-4'>Our <span className='text-lime-600'>Mission</span></h1>
                                    <p className='text-base sm:text text-gray-100'>
                                        "Our mission is to lead the electric vehicle revolution with innovative designs that prioritize sustainability
                                        and efficiency. Spearheading this commitment, our team is dedicated to creating a greener future, exemplified
                                        in projects like the e-Baja, where cutting-edge electric vehicle technology meets off-road performance. We strive
                                        to set new standards in environmental responsibility while pushing the boundaries of electric mobility."
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-wrap  justify-center mt-4 mb-20'>
                                <div className='rounded-md  w-full px-5 sm:px-2 sm:w-2/3 h-full' >
                                    <h3 className='text-2xl sm:text-3xl lg:text-4xl w-full mt-4 text-white '>What we <span className='text-lime-600'>Compete for?</span></h3>
                                    <p className='text-base sm:text-lg my-8'>
                                        At our college Team DAKSH, we strive to excel in designing and
                                        constructing all-terrain vehicles. Transitioning from internal
                                        combustion to electric engines represents our commitment to
                                        innovation and sustainability. By participating in the e-BAJA
                                        event, we aim to showcase our expertise in engineering,
                                        teamwork, and adaptability, as we embrace the challenges and
                                        opportunities of electric vehicle technology. Join us on this exhilarating journey as we push the boundaries of vehicle performance and efficiency in the electrifying realm of e-BAJA.
                                    </p>

                                </div>
                                <div className='my-3 sm:w-auto w-full sm:px-0 px-5 mt-4 sm:my-0'>
                                    <img src="/crausal3.webp" className='w-full rounded-md object-cover h-48 sm:w-80  items-center' alt="Project" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Layout>
        </>
    )
}

export default About
