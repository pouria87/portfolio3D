import React from 'react';

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
      <div className='flex text-white-500 gap-2 '>
        <p>Terms and conditions</p>
        <p>|</p>
        <p>privacy policy</p>
      </div>
      <div className=' flex gap-3'>
        <div className='flex gap-3'>
          <div className='social-icon'>
            <img
              src='/assets/github.svg'
              alt='github'
              className='w-1/2 h-1/2 '
            />
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='social-icon'>
            <img
              src='/assets/instagram.svg'
              alt='instagram'
              className='w-1/2 h-1/2 '
            />
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='social-icon'>
            <img
              src='/assets/linkedin.svg'
              alt='linkedin'
              className='w-1/2 h-1/2 '
            />
          </div>
        </div>
      </div>
      <p className='text-white-500 '>
        © 2024 Pouria Issapour | All rights reserved
      </p>
    </section>
  );
};

export default Footer;
