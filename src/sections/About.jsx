import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('pouria.issapour@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000);
  };
  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 '>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='assets/grid01.png'
              alt='grid-1'
              className='w-full sm:h-[276px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>Hi, I'm Pouria</p>
              <p className='grid-subtext'>
                with 3 years of experience of full stack development, with a
                focus on animated 3D websites.
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='assets/grid2.png'
              alt='grid-2'
              className='w-full sm:h-[276px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>Tech Stack</p>
              <p className='grid-subtext'>
                I specialize in JavaScript with focus on React and Next.js
                ecosystems.
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0, 0, 0, 0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-day.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
              />
            </div>
            <div>
              <p className='grid-headtext'>
                I work remotely in all time zones.
              </p>
              <p className='grid-subtext'>I'm Base on Brisbane QLD Australia</p>
              <a href='#contact' className='w-fit'>
                <Button
                  name='contact me'
                  isBeam
                  containerClass='w-full mt-10'
                />
              </a>
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='assets/grid3.png'
              alt='grid-3'
              className='w-full sm:h-[266px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>Why I love coding?</p>
              <p className='grid-subtext'>
                I thrive on solving problems and bringing ideas to life through
                code. Coding isn’t just my profession, it's my passion and
                creative outlet.
              </p>
            </div>
          </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img
              src='assets/grid4.png'
              alt='grid-4'
              className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'
            />
            <div className='space-y-2'>
              <p className='grid-subtext'>Contact me</p>
              <div className='copy-container' onClick={handleCopy}>
                <img
                  src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt='copy'
                />
                <p className='lg:text-2xl md:text-lg font-medium text-gray_gradient text-white'>
                  pouria.issapour@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
