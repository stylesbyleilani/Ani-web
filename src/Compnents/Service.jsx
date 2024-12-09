










import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import framer-motion components
import { useInView } from 'react-intersection-observer'; // Hook to track when elements are in view
import { GiTwinShell } from 'react-icons/gi';
import { FaGgCircle, FaLongArrowAltRight } from 'react-icons/fa';
import { GiHorseHead } from 'react-icons/gi';

const Service = () => {
  const controls = useAnimation(); // To control animations
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className='text-center '>
      <motion.div
        className='absolute blur-[70px] md:blur-[90px] z-0 w-[250px] h-[150px] md:w-[390px] md:h-[200px] rounded-full bg-gradient-to-r from-my-100 via-my-200 to-my-200-1/2 left-1/2 transform translate-x-[100%] md:translate-x-[150%] translate-y-[60%]'
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      ></motion.div>

      <motion.div
        ref={ref} // Attach ref to the section to monitor its scroll visibility
        className='flex justify-center items-center flex-col gap-10'
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <div className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 w-12 h-12 flex items-center justify-center text-white rounded-md'>
          <GiTwinShell className='text-3xl' />
        </div>
        <h1 className='text-3xl text-gray-100 md:text-5xl'>
          Supported{' '}
          <span className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 text-transparent bg-clip-text'>
            AMMS
          </span>
        </h1>
        <p className="mt-2 p-7 md:p-5 text-base sm:text-lg lg:text-xl text-center text-gray-200 max-w-2xl lg:max-w-4xl">
          We facilitate non-custodial, automated, and active management of concentrated liquidity across various platforms.
        </p>
      </motion.div>

      <motion.div
        className='absolute blur-[90px] z-0 w-[390px] h-[300px] rounded-full bg-gradient-to-r from-my-100 via-my-200 to-my-200-1/2 left-1/2 translate-x-[-190%] translate-y-[40%]'
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      ></motion.div>

      <div className="flex gap-7 md:gap-4 md:p-12  lg:gap-10 flex-col  md:flex-row lg:flex-row items-center mt-5 justify-center">
        {/* Card 1 */}
        <motion.div
          className="relative items-center w-[300px] h-[200px] md:w-[380px] md:h-[200px] rounded-md p-2 bg-neutral-800"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <motion.div
            className='absolute z-10 blur-[50px] w-[120px] h-[50px] rounded-full bg-gradient-to-r from-my-100 via-green-300 to-my-200-1/2 left-1/2 translate translate-x-[75%] translate-y-[250%]'
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          ></motion.div>

          <div className="flex items-start flex-col text-gray-50 border-[1px] border-gray-600 rounded-md w-[280px] md:w-[380px] h-[170px] p-5 border-b-[1px] border-b-green-700">
            <div className="border-[1px] border-green-500 rounded-full flex justify-center items-center w-7 h-7">
              <FaGgCircle className='text-white' />
            </div>
            <div className="flex items-start flex-col">
              <h3 className='text-lg'>Quick Swap</h3>
              <p>Decentralized Exchange</p>
              <div className="btn w-[130px] h-[35px] flex gap-2 items-center justify-center mt-2 rounded-full shadow-sm border-[1px] border-gray-600 shadow-my-100">
                <button className='border-none'>Enter App</button>
                <FaLongArrowAltRight className='text-xl' />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="relative items-center w-[300px] h-[200px] md:w-[390px] md:h-[200px] rounded-md p-2 bg-neutral-800"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <motion.div
            className='absolute z-10 blur-[50px] w-[120px] h-[50px] rounded-full bg-gradient-to-r from-my-100 via-green-300 to-my-200-1/2 left-1/2 translate translate-x-[75%] translate-y-[250%]'
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          ></motion.div>

          <div className="flex items-start flex-col text-gray-50 border-[1px] border-gray-600 rounded-md w-[280px] md:w-[380px] h-[170px] p-5 border-b-[1px] border-b-green-700">
            <div className="border-[1px] border-green-500 rounded-full flex justify-center items-center w-7 h-7">
              <GiHorseHead className='text-white' />
            </div>
            <div className="flex items-start flex-col">
              <h3 className='text-lg'>Quick Swap</h3>
              <p>Decentralized Exchange</p>
              <div className="btn w-[130px] h-[35px] flex gap-2 items-center justify-center mt-2 rounded-full shadow-sm border-[1px] border-gray-600 shadow-my-100">
                <button className='border-none'>Enter App</button>
                <FaLongArrowAltRight className='text-xl' />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
