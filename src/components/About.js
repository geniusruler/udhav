import React from 'react';
import ProgressBar from './ProgressBar';
import '../index.css';
import {motion} from 'framer-motion';
import { fadeIn} from '../variants'

const skillsData = [
  { skill: 'HTML', percentage: 95 },
  { skill: 'CSS', percentage: 88 },
  { skill: 'JavaScript', percentage: 80 },
  { skill: 'React', percentage: 80 },
  { skill: 'Node.js', percentage: 80 },
  { skill: 'Java', percentage: 80 },
  { skill: 'Python', percentage: 85 },
  { skill: 'MySQL', percentage: 95 },
  { skill: 'MongoDB', percentage: 95 },
];

const About = () => {
  return (
    <div id='about' className='section mt-16'>
      <div className='container mx-auto flex items-center justify-center'>
        <div className='max-w-3x1 text-center'>
          <h2 className='text-4xl font-bold mb-8'>About Me</h2>
          <motion.p  variants={fadeIn('right', 0.5)}  whileInView={'show'} viewport={{ once: false, amount: 0.7}} className='text-lg font-Roborto leading-relaxed text-teal-100 mb-8 mt-4 ml-5 font-semibold '>
          Hey there! I'm Udhav, aka Govind, a NYIT Computer Science Sophomore student fueled by code and big dreams.
          My journey hasn't been all straight lines and coffee breaks. Adjusting to life in the US was a crash course in independence, problem-solving, and juggling various deadlines – think world's toughest 
          exam (IIT JEE) meets NYC subway navigation! 
          But those experiences forged resilience and resourcefulness. Now, I'm an enthusiastic coder, a data geek with a curious mind, and an aspiring innovator yearning to build impactful tech solutions.
          Think robots that can become master chefs to make you your favorite meals (while philosophizing, of course), websites that dance to your mood, or maybe even an app that brings loved ones together.
          I'm always on the lookout for exciting opportunities where I can grow, learn, collaborate, innovate, and make a difference
          </motion.p>
        </div>
      </div>

      <div className='container mx-auto flex justify-center mt-8 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {skillsData.map((skill) => (
            <ProgressBar key={skill.skill} skill={skill.skill} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;