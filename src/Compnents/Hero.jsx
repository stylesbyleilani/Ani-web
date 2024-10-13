 


// import React from 'react';
// import Mage from './Mage';
// import { Link } from 'react-router-dom';


// const Hero = () => {
//   return (
//     <div 
//       className="relative font-serif flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4" // Added padding for small screens
//     >
//       <div className="absolute inset-0 "></div>

//       <div className="relative z-10  mt-10 md:mt-24 text-center">
//         <h1 className="text-[28px] sm:text-3xl md:text-5xl lg:text-6xl tracking-wide text-gray-200">
//           Managing your <span className="bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text">content with AI</span>
//         </h1>
        
//         <p className="mt-5 p-3 md:p-5 text-base sm:text-lg lg:text-xl text-center text-gray-200 max-w-2xl lg:max-w-4xl">
//           An open source content management system that uses Al to automate various aspect of content creation, optimization and distribution .
//         </p>

//         <div className="flex justify-center items-center gap-4 my-8">
//         <Link to="/register"><button className='p-3 w-36 sm:w-40 h-10 flex justify-center items-center text-center font-bold bg-my-100 rounded-md text-black'>Start Now</button></Link>
//         </div>
        
        

//         <div>
//           <Mage/>
//         </div>
//       </div>

//       <div className='absolute blur-[70px] md:blur-[90px] z-0 w-[250px] h-[150px] md:w-[390px] md:h-[200px] rounded-full bg-gradient-to-r from-my-100 via-my-200 to-my-200-1/2 left-1/2 transform translate-x-[100%] md:translate-x-[150%] translate-y-[60%]'>
//       </div>
//     </div>
//   );
// };

// export default Hero;







import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; // Import framer-motion for animations
import { useInView } from 'react-intersection-observer'; // Import to track element visibility
import { Link } from 'react-router-dom';
import Mage from './Mage';

const Hero = () => {
  const controls = useAnimation(); // For controlling animations
  const { ref, inView } = useInView({
    threshold: 0.1, // Animation triggers when 10% of the element is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 }, // Initially hidden, moves upwards into view
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // Visible state with animation
  };

  return (
    <div 
      className="relative font-serif flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4"
    >
      {/* Background effect */}
      <motion.div
        className="absolute inset-0"
        ref={ref} // Attach ref to track visibility
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      ></motion.div>

      {/* Main content */}
      <motion.div
        className="relative z-10 mt-10 md:mt-24 text-center"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <h1 className="text-[28px] sm:text-3xl md:text-5xl lg:text-6xl tracking-wide text-gray-200">
          Managing your <span className="bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text">content with AI</span>
        </h1>

        <p className="mt-5 p-3 md:p-5 text-base sm:text-lg lg:text-xl text-center text-gray-200 max-w-2xl lg:max-w-4xl">
          An open-source content management system that uses AI to automate various aspects of content creation, optimization, and distribution.
        </p>

        <div className="flex justify-center items-center gap-4 my-8">
          <Link to="/register">
            <motion.button 
              className='p-3 w-36 sm:w-40 h-10 flex justify-center items-center text-center font-bold bg-my-100 rounded-md text-black'
              initial="hidden"
              animate={controls}
              variants={fadeInVariants}
            >
              Start Now
            </motion.button>
          </Link>
        </div>

        {/* Adding Mage component */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <Mage />
        </motion.div>
      </motion.div>

      {/* Background blur effect */}
      <motion.div
        className='absolute blur-[70px] md:blur-[90px] z-0 w-[250px] h-[150px] md:w-[390px] md:h-[200px] rounded-full bg-gradient-to-r from-my-100 via-my-200 to-my-200-1/2 left-1/2 transform translate-x-[100%] md:translate-x-[150%] translate-y-[60%]'
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      ></motion.div>
    </div>
  );
};

export default Hero;





