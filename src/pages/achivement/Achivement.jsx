import React, { useRef, useState } from 'react'
import Card from './Card'
import Data from './data.json'
import Layout from '../../components/Layout'
import { motion } from 'framer-motion'

const Achivement = () => {

    return (
        <Layout>
            <>
                <div>

                    <div className="min-h-[500px] bg-fixed bg-center bg-cover bg-no-repeat"
                        style={{
                            backgroundImage: "url(" + "/gogreen2.webp" + ")",
                        }}

                    >
                        <div className='w-full h-[500px]'
                            style={{ background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))' }}
                        >

                        </div>
                    </div>

                    <div className="w-full sm:w-auto text-white flex gap-28 flex-wrap sm:px-32 pl-4 pr-4 bg-black mb-28" >
                        <div className='w-full'>
                            <h2 className='w-full text-3xl text-center font-semibold md:text-5xl my-12'>Our <span className='text-lime-600'>Achievements</span></h2>
                        </div>
                        <div className='flex justify-center md:gap-x-24 gap-y-20 flex-wrap' style={{ marginTop: '-80px' }}>
                            {Data && Data.map((element) => {
                                //   console.log(element);
                                return <div className="flex" key={element.id}>
                                    <Card title={element.title} description={element.description} imgUrl={element.imgUrl}
                                    />
                                </div>
                            })}
                        </div>


                    </div>
                </div>
            </>

        </Layout>
    )
}

export default Achivement

