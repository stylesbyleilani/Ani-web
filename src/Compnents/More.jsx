








  




import React, { useEffect } from 'react';
import { FaGgCircle, FaLongArrowAltRight } from 'react-icons/fa';
import { GiTwinShell } from 'react-icons/gi';
import { motion, useAnimation } from 'framer-motion'; // Import framer-motion for animation
import { useInView } from 'react-intersection-observer'; // For scroll tracking

const More = () => {
  const controls = useAnimation(); // For controlling the animation
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden with downward positioning
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Smooth fade in with upward motion
  };

  return (
    <motion.div
      className="div flex flex-col md:flex-row items-center gap-8 justify-center md:p-7"
      ref={ref} // Attach ref to detect when in view
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
    >
      <motion.div
        className="div-1  relative items-center w-[300px] h-[500px] md:w-[400px] md:h-[500px] rounded-md p-2 bg-neutral-800"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        {/* Background blur animation */}
        <motion.div
          className="absolute z-10 blur-[50px] w-[120px] h-[50px] rounded-full bg-gradient-to-r from-my-100 via-green-300 to-my-200-1/2 left-1/2 translate translate-x-[75%] translate-y-[250%]"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        ></motion.div>

        {/* Main content box */}
        <motion.div
          className="h-[477px] rounded-md border-[1px] border-gray-600 border-b-[1px] border-b-green-700"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <div className="center flex items-center mt-3 flex-col gap-5" >
            <div className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 w-12 h-12 flex items-center justify-center text-white rounded-md'>
              <GiTwinShell className='text-3xl' />
            </div>
            <h1 className='text-xl text-gray-100 md:text-xl'>Supported <span className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 text-transparent bg-clip-text'>AMMS</span></h1>
          </div>

          <div className="more text-gray-100 mt-7 flex justify-start flex-col items-start p-5 gap-3 md:gap-5">
            <h4>Maximize</h4>
            <p>more about our budget</p>
            <h4>Maximize</h4>
            <p>more about our budget</p>
            <h4>Maximize</h4>
            <p>more about our budget</p>

            <div className="btn w-full max-w-[130px] h-[35px] flex gap-2 items-center justify-center mt-2 rounded-full shadow-sm border-[1px] border-gray-600 shadow-my-100">
              <button className='text-sm md:text-base border-none'>Enter App</button>
              <FaLongArrowAltRight className='text-sm md:text-xl' />
            </div>

            {/* Blur background effect */}
            <motion.div
              className='absolute blur-[70px] md:blur-[90px] z-0 w-[250px] h-[150px] md:w-[390px] md:h-[200px] rounded-full bg-gradient-to-r from-my-100 via-my-200 to-my-200-1/2 left-1/2 transform translate-x-[100%] md:translate-x-[150%] translate-y-[60%]'
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Second Box with the same animation */}
      <motion.div
        className="div-1 relative items-center w-[300px] h-[500px] md:w-[400px] md:h-[500px] rounded-md p-2 bg-neutral-800"
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

        <motion.div
          className="h-[477px] rounded-md border-[1px] border-gray-600 border-b-[1px] border-b-green-700"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <div className="center flex items-center mt-3 flex-col gap-5">
            <div className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 w-12 h-12 flex items-center justify-center text-white rounded-md'>
              <GiTwinShell className='text-3xl' />
            </div>
            <h1 className='text-xl text-gray-100 md:text-xl'>Supported <span className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 text-transparent bg-clip-text'>AMMS</span></h1>
          </div>

          <div className="more text-gray-100 flex mt-7 justify-start flex-col items-start p-5 gap-3 md:gap-5">
            <h4>Maximize</h4>
            <p>more about our budget</p>
            <h4>Maximize</h4>
            <p>more about our budget</p>
            <h4>Maximize</h4>
            <p>more about our budget</p>

            <div className="btn w-full max-w-[130px] h-[35px] flex gap-2 items-center justify-center mt-2 rounded-full shadow-sm border-[1px] border-gray-600 shadow-my-100">
              <button className='text-sm md:text-base border-none'>Enter App</button>
              <FaLongArrowAltRight className='text-sm md:text-xl' />
            </div>

            <motion.div
              className='absolute blur-[70px] md:blur-[90px] z-0 w-[250px] h-[150px] md:w-[390px] md:h-[200px] rounded-full bg-gradient-to-r from-my-100 via-my-200 to-my-200-1/2 left-1/2 transform translate-x-[100%] md:translate-x-[150%] translate-y-[-60%]'
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default More;
