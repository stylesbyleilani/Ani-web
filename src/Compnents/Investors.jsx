
  







import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Importing for animations
import { useInView } from 'react-intersection-observer'; // To detect when the element is in view

const Investors = () => {
  const controls = useAnimation(); // For controlling animations
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger the animation when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off invisible and lower on the Y axis
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Fade in and slide up
  };

  return (
    <div className="text-center flex items-center justify-center md:p-7">
      <motion.div
        className="div-1 relative mt-14 items-center w-[300px] h-[250px] md:w-[870px] md:h-[200px] rounded-md p-2 bg-neutral-800"
        ref={ref} // Attach ref to track visibility
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        {/* Background gradient animation */}
        <motion.div
          className="absolute z-10 blur-[50px] w-[120px] h-[50px] rounded-full bg-gradient-to-r from-my-100 via-green-300 to-my-200-1/2 left-1/2 translate translate-x-[75%] translate-y-[250%]"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        ></motion.div>

        {/* Content section */}
        <motion.div
          className="h-[230px] md:h-[180px] rounded-md border-[1px] border-b-[1px] border-b-green-700 border-gray-600"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <div className="center md:flex grid grid-cols-2 md:flex-row items-center mt-10 md:mt-7 justify-between md:p-5 gap-5">
            {/* Each stat block */}
            <motion.div
              className='flex flex-col gap-3 text-gray-300'
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
            >
              <h2 className='text-2xl'>50 <span className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 text-transparent bg-clip-text'>+</span></h2>
              <p>Managed Pars</p>
            </motion.div>

            <motion.div
              className='flex flex-col gap-3 text-gray-300'
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
            >
              <h2 className='text-2xl'>10 <span className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 text-transparent bg-clip-text'>+</span></h2>
              <p>Liquidity Partners</p>
            </motion.div>

            <motion.div
              className='flex flex-col gap-3 text-gray-300'
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
            >
              <h2 className='text-2xl'>10 <span className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 text-transparent bg-clip-text'>+</span></h2>
              <p>Networks</p>
            </motion.div>

            <motion.div
              className='flex flex-col gap-3 text-gray-300'
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
            >
              <h2 className='text-2xl'>$100m <span className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 text-transparent bg-clip-text'>+</span></h2>
              <p>Total Value</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Investors;
