import React, { useState } from 'react';
import ImageFront from '../assets/avatar.svg';
import ImageBack from '../assets/avatar.png';
import {  FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    console.log('Button Clicked');
    setIsFlipped(!isFlipped);
  };

  return (
    <section className='min-h-[95vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='text-center flex-1 font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'> UDHAV  <span> AGARWAL</span></motion.h1>
            <motion.div  variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7}} className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className=' text-white mr-4'>I am a</span>
              <TypeAnimation sequence={['Tinkerer', 2000, 'Developer', 2000, 'Designer', 2000]} speed={50} className='text-accent' wrapper='span' repeat={10} />

            </motion.div>
            <motion.p  variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              "Adaptable coding chameleon, blending seamlessly into any tech jungle. Just don't ask me to debug my social skills."
            </motion.p>
            <motion.div  variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7}} className='flex max-w-max  gap-x-6 items-center mb-12 mx-auto lg:mx-0'> 
              <button className='btn btn-lg' > <a href="https://wa.me/15513591588" style={{ textDecoration: 'none', color: 'inherit' }}>Say Hi 👋🏻👨🏻‍💻</a></button>
              <a href="#home" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7}} className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="https://www.linkedin.com/in/udhavagarwal/"><FaLinkedin /></a>
              
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial="hidden"
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px] rounded-[20px]'
            animate={{
              rotateY: isFlipped ? 180 : 0,
              transition: { duration: 0.5, ease: 'easeInOut' },
            }}
            onClick={toggleFlip}
          >
            <img src={isFlipped ? ImageBack : ImageFront} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;