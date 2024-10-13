
// import React from 'react'
// import { GiTwinShell } from 'react-icons/gi'
// import m2 from "../assets/image/m2.jpg"
// const About = () => {  
//   return (
//     <div className='flex  flex-col p-16 md:flex-row mt-10 justify-center items-center gap-5 text-white'>
//         <div className="div flex justify-center item-center flex-col ml-5">

//         <div className="div flex justify-center items-center w-[400px] p-5 flex-col gap-2">


//                         <div className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 w-12 h-12 flex items-center justify-center text-white rounded-md'>
//         <GiTwinShell className='text-xl md:text-3xl'/>
//         </div>

//         <h2 className='text-2xl text-center'>We reduce costs <span className='bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text'>of sourcing liquidity</span></h2>
//       <p className=''>We manage liquidity for Defi and Web3 protocols with customized strategies designed to maximize capital efficiency.</p>
//       </div>
// </div>
// <div className="div2 w-[400px] p-10">
// <img src={m2} alt="" />
// </div>


//     </div>
//   )
// }

// export default About



// use framer motion to do scroll disapearing and appearing animation for this code 


import React, { useEffect } from 'react';
import { GiTwinShell } from 'react-icons/gi';
import m2 from "../assets/image/m2.jpg";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();  // To control animations
  const { ref, inView } = useInView({
    threshold: 0.1,  // Trigger when 10% of the element is visible
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
    <div className='text-center'>
      <motion.div
        ref={ref} // Attach ref to monitor the scroll visibility
        className='flex flex-col p-16 md:flex-row mt-10 justify-center items-center gap-5 text-white'
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        {/* Left Section */}
        <div className="div flex justify-center items-center flex-col ml-5">
          <motion.div
            className="div flex justify-center items-center w-[400px] p-5 flex-col gap-2"
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          >
            <div className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 w-12 h-12 flex items-center justify-center text-white rounded-md'>
              <GiTwinShell className='text-xl md:text-3xl' />
            </div>
            <h2 className='text-2xl text-center'>
              We reduce costs <span className='bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text'>of sourcing liquidity</span>
            </h2>
            <p>We manage liquidity for Defi and Web3 protocols with customized strategies designed to maximize capital efficiency.</p>
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          className="div2 w-[400px] p-10"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <img src={m2} alt="About" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
