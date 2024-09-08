import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const spanStyle = {
  padding: '20px',
  // background: '#efefef',
  color: '#000000'
}

const divStyle = {

}
const slideImages = [
  {
    url: '/crausal.jpg',
    caption: 'Slide 1'
  },
  {
    url: '/crausal.jpg',
    caption: 'Slide 2'
  },
  {
    url: '/crausal.jpg',
    caption: 'Slide 3'
  },
];

const HeroSection = () => {
  return (
    <div className="slide-container sm:mb-0 mb-12">
      <div className='h-[90vh] md:h-[100vh] ' style={{
        backgroundImage: "url(" + "/hero2.webp" + ")",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.633),rgba(2, 2, 2, 0.633))',
      }}>
        <div className='flex flex-col justify-start items-center h-full w-full' style={{
          background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.233), rgba(2, 2, 2, 0.233),rgba(17, 52, 23, 0.433))'
        }}>
          <div className='hidden sm:flex  justify-end items-start pt-20 pr-20 w-full'>
            <motion.span className='text-white uppercase w-72 sm:w-[500px] mb-20 md:mb-40 text-center text-sm sm:text-lg cursor-pointer  rounded-3xl p-1 sm:p-2 tracking-wide'
              initial={{ y: 100, opacity: 0, scale: 1 }}
              animate={{ y: 20, opacity: 1, scale: 1.2 }}
              transition={{ duration: 1, delay: 1.1 }}
            >"Unleash the thrill of the terrain with unstoppable off-road prowess."</motion.span>
          </div>

          <div className='sm:hidden flex justify-center  w-full'>
            <motion.span className='text-white uppercase w-60 sm:w-[500px] mb-40 md:mb-40 text-center text-sm sm:text-lg cursor-pointer  rounded-3xl p-1 sm:p-2 tracking-wide'
              initial={{ y: 100, opacity: 0, scale: 1 }}
              animate={{ y: 20, opacity: 1, scale: 1.2 }}
              transition={{ duration: 1, delay: 1.1 }}
            >"Unleash the thrill of the terrain with unstoppable off-road prowess."</motion.span>
          </div>


          <motion.span className='hidden sm:block text-white mb-24 sm:w-52 text-center sm:text-lg cursor-pointer  rounded-3xl p-1 sm:p-2' style={{ backgroundColor: 'rgba(6, 77, 18, 0.786)', border: '3px solid #65a30d' }}
            initial={{ y: -600 }}
            animate={{ y: 200 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          ><a href='mailto:daksh.nitjsr@nitjsr.ac.in ' target='_blank'>Support Us</a></motion.span>



          {/* <motion.span className='hidden sm:block text-white mb-24 sm:w-52 text-center sm:text-lg cursor-pointer  rounded-3xl p-1 sm:p-2' style={{ backgroundColor: 'rgba(6, 77, 18, 0.786)', border: '3px solid #65a30d' }}
            initial={{ y: -600 }}
            animate={{ y: 180 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          ><Link to='/result'>Click here</Link></motion.span>

          <motion.p className='hidden sm:block sm:text-xl mt-24 text-center'
            initial={{ textShadow: '', opacity: 0.4, scale: 1 }}
            animate={{ textShadow: '0 0 20px #65a30d', scale: 1.01, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
          >To see Your result of prelims</motion.p> */}

          {/* href='mailto:daksh.nitjsr@nitjsr.ac.in ' target='_blank' */}


          <motion.span className=' sm:hidden text-white mb-2 w-40  text-center sm:text-lg cursor-pointer  rounded-3xl p-1 sm:p-2' style={{ backgroundColor: 'rgba(6, 77, 18, 0.786)', border: '3px solid #65a30d' }}
            initial={{ y: -600 }}
            animate={{ y: 230 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          ><a href='mailto:daksh.nitjsr@nitjsr.ac.in ' target='_blank'>Support Us</a></motion.span>



          {/* <motion.span className=' sm:hidden text-white mb-2 w-40  text-center sm:text-lg cursor-pointer  rounded-3xl p-1 sm:p-2' style={{ backgroundColor: 'rgba(6, 77, 18, 0.786)', border: '3px solid #65a30d' }}
            initial={{ y: -600 }}
            animate={{ y: 200 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          ><Link to='/result'>Click here</Link></motion.span>

          <motion.p className='sm:hidden sm:text-xl mt-48 text-center'
            initial={{ textShadow: '', opacity: 0.4, scale: 1 }}
            animate={{ textShadow: '0 0 20px #65a30d', scale: 1.01, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror' }}
          >To see Your result of prelims</motion.p>  */}

        </div>
      </div>
    </div>
  )
}

export default HeroSection