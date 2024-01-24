import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import emailjs from 'emailjs-com';
import Udhav from '../assets/UdhavContact.png'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Add this line

    emailjs.sendForm('service_5wibcde', 'template_z0ic51n', form.current, 'SEdMXmnFlaTevZ6Th')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully'); // Add this line for testing
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email'); // Add this line for testing
      });
  };


  return (
    <div id='contact' className='section flex items-center justify-center h-screen'>
      <div className='container max-w-screen-xl mx-auto flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 pr-7'>
          <h2 className='text-4xl font-bold mb-6 text-[#e5a8a5] mt-5'>
            <TypeAnimation
              sequence={['Lets Get Connected :))']}
              speed={80}
              wrapper='span'
              repeat={5}
              
            />
          </h2>
          <img className=' rounded-full mr-5 '  src= {Udhav} alt='Udhav' />
       
          
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='p-8 bg-gradient-to-r from-gray-200 rounded-md shadow-lg md:w-1/2 mt-[70px]'
        >
          <input
            placeholder='Name'
            type='text'
            id='name'
            name='name'
           
            className='w-full border-2 border-teal-500 p-2 mb-6 focus:outline-none focus:border-teal-700 rounded-md placeholder-purple-500'
            style={{ color: 'purple' }}
            required
          />
          <input
            placeholder='Type your email..'
            type='email'
            id='email'
            name='email'
           
            className='w-full border-2 mb-6 border-teal-500 p-2 focus:outline-none focus:border-teal-700 rounded-md placeholder-purple-500'
            style={{ color: 'purple' }}
            required
          />
          <textarea
            placeholder='Message'
            id='message'
            name='message'
           
            rows='4'
            className='w-full border-2 mb-6 border-teal-500 p-2 focus:outline-none focus:border-teal-700 rounded-md placeholder-purple-500'
            style={{ color: 'purple' }}
            required
          ></textarea>
          <button
            type='submit'
            className='bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;