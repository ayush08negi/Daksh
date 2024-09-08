import React from 'react'
import Layout from '../../components/Layout'
import { FaHandshake } from "react-icons/fa6";
import { BsDownload } from 'react-icons/bs';
import { FaDonate } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

const variants = {
    initial: {
        y: -150,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const Sponser = () => {
    return (
        <Layout>
            <div>
                <div className=" h-[400px] md:min-h-[500px] bg-fixed bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: "url(" + "/sponser.webp" + ")",
                    }}

                >
                    <div className='w-full h-[500px]'
                        style={{ background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))' }}
                    >

                    </div>
                </div>

                <div className="bg-black min-h-screen text-white">
                    <div className="flex flex-col justify-center p-8 sm:p-16">
                        <h1 className="text-4xl sm:text-5xl text-center  py-4">
                            Sponsor <span className="text-lime-500">Us</span>
                        </h1>
                        <h2 className='text-white text-center text-lg my-2 py-2 sm:text-3xl '>Be a Part of Our Journey!</h2>
                        <hr className='border-lime-600 border-2 w-[220px] sm:w-[400px] m-auto' />
                        <p className="text-lg mt-10 md:mx-40">
                            Be at the forefront of innovation! Support our college technical team as we electrify the all-terrain
                            vehicle scene for the e-BAJA event. By sponsoring us, you align your brand with sustainable technology,
                            cutting-edge engineering, and the excitement of competition. Partner with us and drive the future of
                            mobility at Team DAKSH

                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row text-md justify-around text-lime-500 ">
                        <div className="m-6 flex flex-col items-center">
                            <h1 className="text-lg sm:text-2xl mb-2">Become Our Partner</h1>
                            <Link to='/partner' className='text-white my-4'>
                                <FaHandshake size={50} />
                            </Link>
                        </div>

                        <div className="m-6 flex flex-col items-center md:mr-20">
                            <h1 className="text-lg sm:text-2xl mb-2">Contact to Donate</h1>
                            <a href='mailto:daksh.nitjsr@nitjsr.ac.in ' className='text-white my-4'>
                                <FaDonate size={50} />
                            </a>
                        </div>

                        <div className="m-6 flex flex-col items-center">
                            <h1 className="text-lg sm:text-2xl mb-2">Brochure</h1>
                            <a download='brouchre' href='/brouchre.pdf' className='text-white my-4'>
                                <BsDownload size={50} />
                            </a>
                        </div>
                    </div>

                    <motion.div className='mt-10 md:mx-40'
                         variants={variants}
                         initial='initial'
                         whileInView='animate'
                    >
                        <motion.h2 className='text-center text-xl text-lime-600 md:text-3xl' variants={variants}>Why Should You Sponsor Us</motion.h2>
                        <ul className='flex flex-col md:text-lg text-base px-5 text-white justify-center list-disc gap-y-5 pl-10 my-10 w-full'>
                            <motion.li className=' text-white ' variants={variants}>
                                Networking Opportunities: Sponsors might see opportunities to
                                connect with like-minded individuals or organizations, leading
                                to potential collaborations and business relationships.
                            </motion.li>
                            <motion.li className=' text-white ' variants={variants}>
                                Brand Recognition: Sponsoring can enhance a company's or
                                individual's brand image. Being associated with successful
                                or meaningful endeavors can positively impact how the sponsor
                                is perceived by the public.
                            </motion.li>
                            <motion.li className=' text-white ' variants={variants}>
                                Corporate Social Responsibility (CSR): Many companies are committed
                                to contributing to social and environmental causes as part of their
                                CSR initiatives. Sponsoring individuals or projects that promote
                                positive social impact aligns with these values.

                            </motion.li>
                            <motion.li className=' text-white ' variants={variants}>
                                Shared Values: Sponsors may be interested in supporting causes or
                                projects that align with their values and mission. If there is a
                                strong alignment between the sponsor's goals and the goals of the
                                individual or project seeking sponsorship, it can be a compelling
                                reason to offer support.
                            </motion.li>
                        </ul>
                    </motion.div>

                    <div className='mt-10'>
                        <h2 className='text-center text-xl text-lime-600 md:text-3xl'>BANK DETAILS</h2>

                        <div className='flex flex-col gap-y-4 mt-5'>
                            <p className='text-center '>Account Name - Society of Automotive Engineers, NIT JAMSHEDPUR</p>
                            <p className='text-center '>Account number - 30375314280</p>
                            <p className='text-center'>IFSC Code - SBIN0001882</p>
                            <p className='text-center mb-10'>Phone/Google Pay/Paytm - 8210258224</p>
                        </div>
                    </div>



                </div>
            </div>
        </Layout>

    )
}

export default Sponser
