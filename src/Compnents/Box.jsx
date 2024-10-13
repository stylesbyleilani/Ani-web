
// import React from 'react'
// import { FaLongArrowAltRight } from 'react-icons/fa'
// import { GiTwinShell } from 'react-icons/gi'

// const Box = () => {
//   return (
//     <div className="text-center flex items-center   justify-center ">
//     <div className="div-1 relative mt-14  items-center w-[300px] h-[450px] md:w-[870px] md:h-[400px] rounded-md p-2 bg-neutral-800">
//     <div className='absolute z-10 blur-[50px] w-[120px] h-[50px] rounded-full bg-gradient-to-r from-my-100 via-green-300 to-my-200-1/2 left-1/2 translate  translate-x-[75%] translate-y-[250%]'>
//     </div>
  
//     <div className=" h-[430px] md:h-[380px] rounded-md border-[1px] border-b-[1px] border-b-green-700 border-gray-600">
  
//   <div className="center flex items-center mt-3  flex-col gap-5">
//   <div className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 w-12 h-12 flex items-center justify-center text-white rounded-md'>
//           <GiTwinShell className='text-3xl'/>
//           </div>
//           <h1 className=' p-2   md:p-0 text-xl text-gray-100 md:text-xl'>Billsco Stategies  <span className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 text-transparent bg-clip-text'>Grant Program</span></h1>
//           <p className="p-3 md:p-5 text-base sm:text-lg lg:text-xl text-center text-gray-200 max-w-2xl lg:max-w-4xl">
//           An open source content management system that uses Al to automate various aspect of content creation, optimization and distribution .
//         </p>

// <div className="btn flex gap-4 text-gray-50">
// <div className="btn  w-[130px] h-[35px] flex gap-2 items-center justify-center mt-2 rounded-full text-my-200  bg-my-100 shadow-md  shadow-gray-500">
// <button className='border-none'>Enter App</button>
// <FaLongArrowAltRight className='text-xl'/>
// </div>


// <div className="btn  w-[130px] h-[35px] flex gap-2 items-center justify-center mt-2 rounded-full shadow-sm border-[1px] border-gray-600 shadow-my-100">
// <button className='border-none'>Contact us</button>
// </div>

// </div>


//   </div> 
  
    
  
  
  
//   <div className='absolute blur-[70px] md:blur-[90px] z-0 w-[250px] h-[150px] md:w-[390px] md:h-[200px] rounded-full bg-gradient-to-r from-my-100 via-my-200 to-my-200-1/2 left-1/2 transform translate-x-[100%] md:translate-x-[150%] translate-y-[-60%]'>
//   </div>
  
  
  
  
  
  
//     </div>
//     </div>
//    </div>  
//   )
// }

// export default Box






import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { GiTwinShell } from 'react-icons/gi';

const Box = () => {
  const controls = useAnimation();  // To control animations
  const { ref, inView } = useInView({
    threshold: 0.1,  // Trigger when 10% of the component is in view
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
    <div className="text-center flex items-center justify-center">
      <motion.div
        ref={ref}  // Attach ref to track when the component enters view
        className="div-1 relative mt-14 items-center w-[300px] h-[450px] md:w-[870px] md:h-[400px] rounded-md p-2 bg-neutral-800"
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <motion.div
          className="absolute z-10 blur-[50px] w-[120px] h-[50px] rounded-full bg-gradient-to-r from-my-100 via-green-300 to-my-200-1/2 left-1/2 translate translate-x-[75%] translate-y-[250%]"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        ></motion.div>

        <motion.div
          className="h-[430px] md:h-[380px] rounded-md border-[1px] border-b-[1px] border-b-green-700 border-gray-600"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <div className="center flex items-center mt-3 flex-col gap-5">
            <div className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 w-12 h-12 flex items-center justify-center text-white rounded-md'>
              <GiTwinShell className='text-3xl' />
            </div>
            <h1 className='p-2 md:p-0 text-xl text-gray-100 md:text-xl'>
              Billsco Strategies{' '}
              <span className='bg-gradient-to-r from-my-400 via-my-500 to-my-100 text-transparent bg-clip-text'>
                Grant Program
              </span>
            </h1>
            <p className="p-3 md:p-5 text-base sm:text-lg lg:text-xl text-center text-gray-200 max-w-2xl lg:max-w-4xl">
              An open-source content management system that uses AI to automate various aspects of content creation, optimization, and distribution.
            </p>

            <div className="btn flex gap-4 text-gray-50">
              <div className="btn w-[130px] h-[35px] flex gap-2 items-center justify-center mt-2 rounded-full text-my-200 bg-my-100 shadow-md shadow-gray-500">
                <button className='border-none'>Enter App</button>
                <FaLongArrowAltRight className='text-xl' />
              </div>

              <div className="btn w-[130px] h-[35px] flex gap-2 items-center justify-center mt-2 rounded-full shadow-sm border-[1px] border-gray-600 shadow-my-100">
                <button className='border-none'>Contact us</button>
              </div>
            </div>
          </div>

          <motion.div
            className='absolute blur-[70px] md:blur-[90px] z-0 w-[250px] h-[150px] md:w-[390px] md:h-[200px] rounded-full bg-gradient-to-r from-my-100 via-my-200 to-my-200-1/2 left-1/2 transform translate-x-[100%] md:translate-x-[150%] translate-y-[-60%]'
            initial="hidden"
            animate={controls}
            variants={fadeInVariants}
          ></motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Box;
