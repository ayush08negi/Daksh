import React, { useContext } from "react";
import SponserCard from "./SponserCard";
import { Link } from "react-router-dom";


const SponsorCrausal = () => {


    return (
        <div className="w-full md:h-[120vh] sm:mt-0 mt-20"
            style={{
                backgroundImage: "url(" + "/sponser.webp" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="h-full w-full justify-center items-center flex-1 "
            style={{
                background:'linear-gradient(to bottom, rgba(2, 2, 2, 0.833),rgba(2, 2, 2, 0.833))'
            }}
            >
                <div className='w-full'>
                    <h2 className='w-full text-3xl text-center text-white font-semibold md:text-5xl py-20'>Our <span className='text-lime-600'>Sponsors</span></h2>
                </div>
                <div className="w-full">
                    <SponserCard />
                </div>
                <div className="w-full mt-10">
                    <p className="w-full text-xl text-center font-semibold md:text-3xl mt-4 text-lime-600">SUPPORT US</p>
                </div>
                <div className="flex items-center justify-center w-full">
                    <p className="px-2 sm:w-[90vw] text-lg text-center text-white font-semibold md:text-2xl my-12">"Dreams aspirations are not easily obtained but one of the hardest things to do is to keep going is to keep chasing.
                        Being a Predator we will definitely strive for success but we want you to be our support while carrying this responsibility.
                        Contribute to a cause, Be a Predator with us."</p>
                </div>
                <div className="w-full mb-10 text-center">
                    <Link to='/sponser'
                        className=" px-4 py-2 text-gray-100 border-2 border-lime-700 rounded-3xl   dark:hover:bg-lime-700 hover:bg-lime-700">
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SponsorCrausal
    ;
