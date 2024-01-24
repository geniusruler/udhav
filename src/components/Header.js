import React from 'react';
import Logo from '../assets/logo.svg'
import myResumePDF from '../assets/UdhavResume.pdf';

const Header = () => {
  return <header className=' py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#Banner'><img src= {Logo} alt='' /></a>
        <button className='btn btn-sm' onClick={() => window.open(myResumePDF)}>My Resume</button>
      </div>
    </div>
  </header>;
};

export default Header;