import React, { useContext } from 'react'
import { motion } from 'framer-motion'

const Card = (props) => {


    return (
        <>
            <motion.div
                className="block w-full sm:w-80 rounded-lg bg-white shadow-2xl shadow-lime-500/50"
                whileHover={{ boxShadow: '0 0 15px #84cc16', scale: 1.1 }}
                transition={{ duration: 0.5 }}

            >

                <img
                    className="rounded-t-lg h-60 w-full"
                    src={props.imgUrl}
                    alt="" />

                <div className="p-6">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
                        {props.title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 ">
                        {props.description}
                    </p>

                </div>
            </motion.div>
        </>
    )
}

export default Card
