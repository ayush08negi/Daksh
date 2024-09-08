import React from 'react'
import Layout from '../../components/Layout'
import { BsYoutube } from 'react-icons/bs'

const Team2 = () => {
    return (
        <Layout>
            <div className='h-full '>
                <div className="relative  bg-cover bg-fixed bg-center bg-no-repeat h-[60vh] sm:h-[80vh] "
                    style={{
                        backgroundImage: "url(" + "/Team/img1.webp" + ")",

                    }}
                >

                </div>

                <div className='text-gray-50 bg-black  sm:px-40 sm:py-10 px-2 text-center '>
                    <h3 className='text-center text-2xl sm:text-3xl w-full mt-4 text-lime-600 '>WHAT WE DO</h3>
                    <p className='text-lg my-8'>"We design powerful electric engines for off-road vehicles, focusing on events like e-Baja competitions.
                        Our goal is to create machines that balance strength, eco-friendliness, and off-road capability. We love the challenge,
                        working hard to make electric systems that set new standards for endurance and efficiency in the thrilling world of
                        off-road racing.From the drawing board to the rugged terrains of e-Baja competitions, we prioritize simplicity without
                        compromising performance. Our dedicated team channels its passion into every detail, ensuring that our electric off-road
                        vehicles not only meet the demands of competition but also contribute to a cleaner, more sustainable future. With each design,
                        we embrace the thrill of innovation, propelling the world of off-road racing into an exciting and electrifying future."</p>
                    <div className="w-full text-center mb-10">
                        <p className='text-lg md:text-2xl'>If you want to explore more you can check our Youtube Channel</p>
                        <a href='https://www.youtube.com/@teamdaksh9836' target='_blank' className='cursor-pointer flex items-center h-20 w-full justify-center'>
                            <BsYoutube size={40} color='red' />
                            <span className='text-xl mx-3'>Team Daksh</span>
                        </a>
                    </div>
                </div>

                <div className="relative  bg-cover bg-fixed bg-center bg-no-repeat h-[60vh] sm:h-[80vh] "
                    style={{
                        backgroundImage: "url(" + "/Team/img2.webp" + ")",


                    }}
                >
                </div>

                <div className='text-gray-50 bg-black  sm:px-40 sm:py-10 px-2 text-center '>
                    <h3 className='text-center text-2xl sm:text-3xl w-full mt-4 text-lime-600 '>WHO WE ARE</h3>
                    <p className='text-lg my-8'>
                        We are a group of highly passionate, hardworking and enthusiastic students who
                        found their interest in off-roading and rose towards becoming a predator. Let’s
                        meet the engineers who found their place in today’s complicated and fast-moving
                        world and do what they love i.e. Design, Build and Compete.
                    </p>
                    {/* <div className="w-full mb-10 text-center">
                        <a href="#"
                            className=" px-4 py-2 text-gray-100  border-lime-700 rounded-3xl border-2  dark:hover:bg-lime-700 hover:bg-lime-700">
                            Learn more
                        </a>
                    </div> */}
                </div>

                <div className="relative  bg-cover bg-fixed bg-center bg-no-repeat h-[60vh] sm:h-[80vh] "
                    style={{
                        backgroundImage: "url(" + "/Team/img3.webp" + ")",

                    }}
                >
                </div>

                <div className='relative'>
                    <div className='text-gray-50 bg-black  sm:px-40 sm:py-10 px-2 text-center '>
                        <h1 className='text-2xl sm:text-3xl  mt-4 text-lime-600'>OUR TEAM</h1>
                        <p className='text-lg my-8'>
                            Having carved a niche in crafting robust, petrol-powered off-road marvels, our adept team is now poised
                            for an exhilarating transformation towards electric off-road process. Seamlessly blending our heritage
                            of rugged performance with an unwavering dedication to sustainability, we ardently champion the avant-garde
                            in electric mobility. Unified by a collective vision, our diverse and skilled cadre is resolutely committed
                            to pushing the boundaries, ensuring that our electric off-road vehicles not only emulate but surpass the
                            zenith of their petrol-powered counterparts.
                        </p>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Team2
