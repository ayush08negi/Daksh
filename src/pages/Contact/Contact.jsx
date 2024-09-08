import React, { useContext, useRef, useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { MdLocationPin, MdMail } from "react-icons/md";
import { motion, useInView } from 'framer-motion'
import Layout from '../../components/Layout';

const textvariants = {

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

const Contact = () => {
    const ref = useRef()

    const [userData, setUserData] = useState(
        {
            Name: '', Email: '', Message: ''
        }
    )

    let name, value
    const data = (e) => {
        name = e.target.name
        value = e.target.value
        setUserData({ ...userData, [name]: value })
    }

    const send = async (e) => {
        const { Name, Email, Message } = userData;
        e.preventDefault();

        if (Name === '' || Email === '' || Message === '' ) {
            alert("Please fill all the credentials!")
        }   
        else{
            const option = {
                method: 'POST',
                headers: {
                    'Contant-type': 'application/json'
                },
                body: JSON.stringify({
                    Name, Email, Message
                })
            }
            const res = await fetch('https://teamdaksh-60754-default-rtdb.firebaseio.com/Messages.json', option)
            if (res) {
                alert('Message sent Successfully')
                setUserData({ Name: '', Email: '', Message: '' })
            }
        }
        
        
    }

    return (
        <Layout>
            <section className="" id="contact" style={{ backgroundColor: 'rgb(11, 11, 11)' }}>
                <motion.div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 hidden sm:block"
                >
                    <div className="mb-4">
                        <motion.div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <h2
                                className="font-heading mb-4 font-bold tracking-tight text-white  text-3xl sm:text-5xl" >
                                Get in <span className='text-lime-600'>Touch</span>
                            </h2>
                        </motion.div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <motion.div className="grid md:grid-cols-2"
                            variants={textvariants}
                            initial='initial'
                            whileInView='animate'
                        >
                            <motion.div className="h-full pr-6"
                                variants={textvariants}
                            >
                                <motion.p className="mt-3 mb-12 text-lg text-gray-100 "
                                    variants={textvariants}
                                >
                                    Feel free to reach out to us with any inquiries,
                                    feedback, or concerns. Your communication is important to us, and we aim to respond promptly to assist you.
                                </motion.p>
                                <motion.ul className="mb-6 md:mb-0">
                                    <motion.li className="flex"
                                        variants={textvariants}
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                            <MdLocationPin />
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Our Address
                                            </h3>
                                            <p className="text-gray-100 ">National Institute of Technology Jamshedpur</p>
                                            <p className="text-gray-100 ">Adityapur, Jamshedpur, Jharkhand 831014</p>
                                        </div>
                                    </motion.li>
                                    <motion.li className="flex"
                                        variants={textvariants}
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                            <BsTelephone />
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Contact
                                            </h3>
                                            <p className="text-gray-100 ">Mobile:+91 8210258224</p>
                                        </div>
                                    </motion.li>
                                    <motion.li className="flex mt-5 "
                                        variants={textvariants}
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                            <MdMail />
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Mail</h3>
                                            <p className="text-gray-100 ">Mail: daksh.nitjsr@nitjsr.ac.in</p>
                                        </div>
                                    </motion.li>
                                </motion.ul>
                            </motion.div>
                            <motion.div className="card h-fit max-w-6xl p-5 md:p-12" id="form"
                                variants={textvariants}
                            >
                                <motion.h2 className="mb-4 text-2xl font-bold text-white" variants={textvariants} >Ready to Get Started?</motion.h2>
                                <motion.form id="contactForm">
                                    <motion.div className="mb-6">
                                        <motion.div className="mx-0 mb-1 sm:mb-4 text-black">
                                            <motion.div className="mx-0 mb-1 sm:mb-4" variants={textvariants}>
                                                <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" value={userData.Name} onChange={data} id="name" autoComplete="off" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required name="Name" />
                                            </motion.div>
                                            <motion.div className="mx-0 mb-1 sm:mb-4" variants={textvariants}>
                                                <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" value={userData.Email} onChange={data} id="email" autoComplete="off" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required name="Email" />
                                            </motion.div>
                                        </motion.div>
                                        <motion.div className="mx-0 mb-1 sm:mb-4 text-black" variants={textvariants}>
                                            <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" value={userData.Message} onChange={data} name="Message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required ></textarea>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div className="text-center" variants={textvariants}>
                                        <button type="submit" onClick={send} className="w-full bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                    </motion.div>
                                </motion.form>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* mobile view */}
                <section className="bg-stone-100 sm:hidden" id="contact" style={{ backgroundColor: 'rgb(11, 11, 11)' }}>
                    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                        <div className="mb-4">
                            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                                <h2
                                    className="font-heading mb-4 font-bold tracking-tight text-white  text-3xl sm:text-5xl" >
                                    Get in <span className='text-lime-600'>Touch</span>
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-stretch justify-center">
                            <div className="grid md:grid-cols-2">
                                <div className="h-full pr-6">
                                    <p className="mt-3 mb-12 text-lg text-gray-100 ">
                                        Feel free to reach out to us with any inquiries, feedback, or concerns.
                                        Your communication is important to us, and we aim to respond promptly to assist you.
                                    </p>
                                    <ul className="mb-6 md:mb-0">
                                        <li className="flex"

                                        >
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                                <MdLocationPin />
                                            </div>
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Our Address
                                                </h3>
                                                <p className="text-gray-100 ">National Institute of Technology Jamshedpur</p>
                                                <p className="text-gray-100 ">Adityapur, Jamshedpur, Jharkhand 831014</p>
                                            </div>
                                        </li>
                                        <li className="flex">
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                                <BsTelephone />
                                            </div>
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Contact
                                                </h3>
                                                <p className="text-gray-100 ">Mobile: +1 (123) 456-7890</p>
                                            </div>
                                        </li>
                                        <li className="flex mt-5 ">
                                            <div className="flex h-10 w-10 items-center justify-center rounded bg-lime-700 text-gray-50">
                                                <MdMail />
                                            </div>
                                            <div className="ml-4 mb-4">
                                                <h3 className="mb-2 text-lg font-medium leading-6 text-gray-50 " >Mail</h3>
                                                <p className="text-gray-100 ">Mail: daksh.nitjsr@nitjsr.ac.in</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                    <h2 className="mb-4 text-2xl font-bold text-white" variants={textvariants} >Ready to Get Started?</h2>
                                    <form id="contactForm">
                                        <div className="mb-6">
                                            <div className="mx-0 mb-1 sm:mb-4 text-black">
                                                <div className="mx-0 mb-1 sm:mb-4 " variants={textvariants} >
                                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" value={userData.Name} onChange={data} autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required name="Name" />
                                                </div>
                                                <div className="mx-0 mb-1 sm:mb-4" variants={textvariants}>
                                                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" value={userData.Email} onChange={data} autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required name="Email" />
                                                </div>
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4 text-black" variants={textvariants}>
                                                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" value={userData.Message} onChange={data} name="Message" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required></textarea>
                                            </div>
                                        </div>
                                        <div className="text-center" variants={textvariants}>
                                            <button type="submit" onClick={send} className="w-full bg-lime-600 hover:bg-lime-700 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </Layout>
    )
}

export default Contact
