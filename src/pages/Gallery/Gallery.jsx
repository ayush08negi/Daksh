import React, { useContext, useState } from 'react'
import Layout from '../../components/Layout'
import Manufacturing from './manufacturing.json'
import Workshop from './Workshop.json'
import events from './events.json'
import GroupPhoto from './GroupPhoto.json'
import Celebration from './celebration.json'
import GalleryCard from './GalleryCard'
import './Gallery2.css'

const Gallery = () => {

    const [active, setActive] = useState("item1")
    const [item1, setItem1] = useState(Manufacturing)
    const [item2, setItem2] = useState(events)
    const [item3, setItem3] = useState(Workshop)
    const [item4, setItem4] = useState(GroupPhoto)
    const [item5, setItem5] = useState(Celebration)

    const [bgcolor1, setbgcolor1] = useState("#65a30d")
    const [bgcolor2, setbgcolor2] = useState("")
    const [bgcolor3, setbgcolor3] = useState("")
    const [bgcolor4, setbgcolor4] = useState("")
    const [bgcolor5, setbgcolor5] = useState("")


    return (
        <>
            <Layout>
                <div className="w-full  sm:w-auto flex flex-wrap"
                // style={{
                //     backgroundImage: "url(" + "/sponser.jpg" + ")",
                //     backgroundPosition: 'center',
                //     backgroundSize: 'cover',
                //     backgroundRepeat: 'no-repeat'
                // }}
                >
                    <div className="h-full w-full justify-center items-center flex-1 "
                        style={{
                            background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.733),rgba(2, 2, 2, 0.733))'
                        }}
                    >
                        <div className='w-full' >
                            <h2 className='w-full sm:mt-10 mt-5 text-2xl text-center text-white font-semibold md:text-4xl' >Our <span className='text-lime-600'>Memories</span></h2>
                        </div>

                        <div className='flex justify-center flex-wrap w-full mt-10 sm:mt-20 text-xs sm:text-base'>
                            <button className="sm:w-36 w-32 mx-5 my-2 px-4 py-2  text-gray-100 border-2 md:rounded-3xl rounded-2xl border-lime-700 "
                                onClick={() => {
                                    setActive('item1')
                                    setbgcolor1('#65a30d')
                                    setbgcolor2('')
                                    setbgcolor3('')
                                    setbgcolor4('')
                                    setbgcolor5('')

                                }} style={{ backgroundColor: bgcolor1 }}>Manufacturing</button>
                            <button className="sm:w-36 w-32 mx-5 my-2 px-4 py-2 text-gray-100 border-2 md:rounded-3xl rounded-2xl border-lime-700 "
                                onClick={() => {
                                    setActive('item2')
                                    setbgcolor1('')
                                    setbgcolor2('#65a30d')
                                    setbgcolor3('')
                                    setbgcolor4('')
                                    setbgcolor5('')

                                }} style={{ backgroundColor: bgcolor2 }}>Events</button>
                            <button className="sm:w-36 w-32 mx-5 my-2 px-4 py-2 text-gray-100 border-2 md:rounded-3xl rounded-2xl border-lime-700 "
                                onClick={() => {
                                    setActive('item3')
                                    setbgcolor1('')
                                    setbgcolor2('')
                                    setbgcolor3('#65a30d')
                                    setbgcolor4('')
                                    setbgcolor5('')
                                }} style={{ backgroundColor: bgcolor3 }}>Workshop</button>
                            <button className="sm:w-36 w-32 mx-5 my-2 px-4 py-2 text-gray-100 border-2 md:rounded-3xl rounded-2xl border-lime-700 "
                                onClick={() => {
                                    setActive('item4')
                                    setbgcolor1('')
                                    setbgcolor2('')
                                    setbgcolor3('')
                                    setbgcolor4('#65a30d')
                                    setbgcolor5('')
                                }} style={{ backgroundColor: bgcolor4 }}>Group Photos</button>
                            <button className="sm:w-36 w-32 mx-5 my-2 px-4 py-2 text-gray-100 border-2 md:rounded-3xl rounded-2xl border-lime-700 "
                                onClick={() => {
                                    setActive('item5')
                                    setbgcolor1('')
                                    setbgcolor2('')
                                    setbgcolor3('')
                                    setbgcolor4('')
                                    setbgcolor5('#65a30d')

                                }} style={{ backgroundColor: bgcolor5 }}>Celebration</button>

                        </div>

                        <div className='w-full '>
                            {active === 'item1' && <GalleryCard item={item1} />}
                            {active === 'item2' && <GalleryCard item={item2} />}
                            {active === 'item3' && <GalleryCard item={item3} />}
                            {active === 'item4' && <GalleryCard item={item4} />}
                            {active === 'item5' && <GalleryCard item={item5} />}

                        </div>
                    </div>
                </div>

            </Layout >
        </>
    )
}

export default Gallery
