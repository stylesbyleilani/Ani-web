






import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer'; // For scroll detection

const Pooter = () => {
  const controls = useAnimation(); // For controlling the animation
  const { ref, inView } = useInView({
    threshold: 0.2, 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // Animation Variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, 
  };

  return (
    <>
      <motion.div id='contact'
        className='flex flex-col md:flex-row mt-10 md:mt-28 items-center gap-5 md:gap-20 justify-center list-none text-gray-100 w-full p-6 md:p-12 bg-my-200' 
        ref={ref} // Attach ref to detect when in view
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <motion.hr
          className='bg-gray-400 w-full mb-4 md:hidden'
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        />

        <motion.div
          className="logo text-center md:text-left"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <h1 className='text-xl bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text'>
            Billsco
          </h1>
        </motion.div>

        <motion.div
          className="di flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-center"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <motion.div
            className="enter flex flex-col items-center gap-2"
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          >
            <h2 className='text-lg'>Enter App</h2>
            <ul className="text-center">
              <li>Provide</li>
              <li>Contact Us</li>
            </ul>
          </motion.div>

          <motion.div
            className="use flex flex-col items-center gap-2"
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          >
            <h2 className='text-lg'>Useful Links</h2>
            <ul className="text-center">
              <li>Docs</li>
              <li>Gitlab</li>
            </ul>
          </motion.div>

          <motion.div
            className="social flex flex-col items-center gap-2"
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          >
            <h2 className='text-lg'>Social</h2>
            <ul className="text-center">
              <li>Twitter</li>
              <li>Discord</li>
              <li>Telegram</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.p
        className='text-center text-gray-100 mb-10 md:mb-16'
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        © 2024 Billsco. All Rights Reserved.
      </motion.p>
    </>
  );
}

export default Pooter;
