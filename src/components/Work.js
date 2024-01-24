import React from 'react';
import { motion } from 'framer-motion';
import GOOGLE from '../assets/GOOGLE.png'
import eisnews from '../assets/EISNEWS.png'
import vigyantaram from '../assets/about.jpg'
import afterschool from '../assets/Untitled design.svg'

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Vigyantaram Innovation Contest',
      description: ' I built a BMC and a Technical Pitchdeck for our project, MediOn, which aimed to provide faster ambulance services during emergencies through an app. Through this experience, I gained technical knowledge about Java and utilized tools like Android Studio. Additionally, I achieved the 5th position nationwide at IIT Bombay for this project.',
      imageSrc: vigyantaram, // Remove the curly braces here
    },
    {
      id: 2,
      title: 'eisnews',
      description: '  Designing Manager of Euro International School news portal site. We used HTML5, CSS3, JS, PHP and MySql to make this happen. This was made by 40 students in 40 days and we gained approximately 40k views in this span of time which was a very proud moment for us at that time and then we represented this in the Parenting Workshop of the school among 100 parents.',
      imageSrc: eisnews, // Remove the curly braces here
    },
    {
      id: 3,
      title: 'Google Code to Learn 2019 Winner ',
      description: ' Built a chat application designed to facilitate communication between teachers, students, and parents, making it easier to stay connected by easier communication to send assignments, reminders, and progress reports, as well as to coordinate events and share updates.',
      imageSrc: GOOGLE, // Remove the curly braces here
    },
    {
      id: 4,
      title: 'After School ',
      description: ' This platform, created for students by students, aims to support middle and high school students in their preparation for college or job searches. It offers a wide range of resources and assistance, including help with resumes, career counseling, and college applications.',
      imageSrc: afterschool, // Remove the curly braces here
    },
  ];

  return (
    <div id='portfolio' className='section py-12'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
            className='rounded-lg overflow-hidden shadow-md bg-purple mx-auto'
          >
            <img
              src={project.imageSrc}
              alt={project.title} // Add alt attribute for accessibility
              className='w-full h-auto object-cover object-center'
            />
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
              <p className='text-teal-500'>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;