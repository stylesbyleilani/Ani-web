
import React, { useState } from 'react' 
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleNavbar = ()=>{
    setMobileOpen(!mobileOpen)
  }



  return (
     <nav className='sticky  text-my-300 border-b-[1px] border-b-gray-600 top-0 z-50 py-2 backdrop-blur-lg  bg-rounded-md'>
  <div className="container px-4  mx-auto relative text-md ">
  <div className="flex justify-between items-center ">
  <div className='flex items-center flex-shrink-0'>
    <span className='text-xl text-gray-400 font-bold   bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text'>Bilsco</span>
  </div>
  <ul className='hidden lg:flex ml-14 space-x-12 font-bold'>
  <li>Resourses</li>
                <li>Blog</li>
                <li>Pricing</li>
               <li>Doc</li>
              <li>Contact</li>
  </ul>
  <div className="hidden lg:flex justify-center gap-5 item-center">
                  {/* <button className='p-2 border-[1px] rounded-md border-gray-400 '>Book a call</button> */}
                  <Link to="/register"><button className='p-3 w-32S md:w-32 h-10 flex justify-center items-center text-center font-bold border-[1px] border-gray-400 rounded-md text-my-300'>Sign Up</button></Link>

              <Link to="/login"><button className='p-3 w-24 md:w-24 h-10 flex justify-center items-center text-center font-bold bg-my-100 rounded-md text-black'>Login</button></Link>



  </div>
<div className="lg:hidden md:flex flex-col ">
  <button onClick={toggleNavbar}>
    {mobileOpen ? "X" : <RxHamburgerMenu className='text-my-100'/>}
  </button>
</div>
  </div >
  {mobileOpen && (      //    <div className=' fixed right-0    <div className='  z-20 text-gray-100 bg-black w-full p-12 flex flex-col  lg:hidden '>

    <div className=' items-center justify-center text-gray-100 bg-my-200 w-full p-5  flex flex-col  lg:hidden '>
  <ul className=' '>
                    <li className='w-[25rem] border-b-gray-600 border-b-[1px] py-4 font-bold'>Blog</li>
                <li className='w-[25rem] border-b-gray-600 border-b-[1px] py-4 font-bold'>Pricing</li>
               <li className='w-[25rem] border-b-gray-600 border-b-[1px] py-4 font-bold'>Doc</li>
              <li className=' w-[25rem] border-b-gray-600 border-b-[1px] py-4 font-bold'>Contact</li>
  </ul>

  <div className=" items-center flex flex-col  w-36 gap-3 space mt-3 ">
  <Link to="/register">
  <button className='w-[25rem] border-b-gray-400 border-b-[1px] p-3  md:w-32 h-10 flex justify-center items-center text-center font-bold border-[1px] border-gray-600 rounded-md text-my-300'>Sign up</button></Link>
              <Link to="/login"><button className=' w-[25rem] border-b-gray-400 border-b-[1px] p-3 md:w-24 h-10 flex justify-center items-center text-center font-bold bg-my-100 rounded-md text-black'>Login</button></Link>




  </div>
    </div>
  )}
  </div>

     </nav>
  )
}

export default Navbar



// import React, { useState } from 'react';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const toggleNavbar = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <nav className="sticky top-0 z-50 py-2 backdrop-blur-lg bg-neutral-800 border-b-[1px] border-b-gray-600">
//       <div className="container px-4 mx-auto relative text-md">
//         <div className="flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex items-center flex-shrink-0">
//             <span className="text-xl text-gray-400 font-bold bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text">Bilsco</span>
//           </div>
          
//           {/* Desktop Menu */}
//           <ul className="hidden lg:flex ml-14 space-x-12 font-bold">
//             <li>Resources</li>
//             <li>Blog</li>
//             <li>Pricing</li>
//             <li>Doc</li>
//             <li>Contact</li>
//           </ul>

//           {/* Desktop Buttons */}
//           <div className="hidden lg:flex justify-center gap-5 items-center">
//             <Link to="/register">
//               <button className="p-3 w-32 md:w-32 h-10 flex justify-center items-center text-center font-bold border-[1px] border-gray-400 rounded-md text-my-300">
//                 Sign Up
//               </button>
//             </Link>
//             <Link to="/login">
//               <button className="p-3 w-24 md:w-24 h-10 flex justify-center items-center text-center font-bold bg-my-100 rounded-md text-black">
//                 Login
//               </button>
//             </Link>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="lg:hidden">
//             <button onClick={toggleNavbar}>
//               {mobileOpen ? "X" : <RxHamburgerMenu className="text-my-100" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileOpen && (
//           <div className="lg:hidden flex flex-col items-center justify-center text-gray-100 bg-my-200 w-full p-5">
//             <ul className="space-y-4">
//               <li className="w-[25rem] border-b-gray-600 border-b-[1px] py-4 font-bold">Blog</li>
//               <li className="w-[25rem] border-b-gray-600 border-b-[1px] py-4 font-bold">Pricing</li>
//               <li className="w-[25rem] border-b-gray-600 border-b-[1px] py-4 font-bold">Doc</li>
//               <li className="w-[25rem] border-b-gray-600 border-b-[1px] py-4 font-bold">Contact</li>
//             </ul>

//             {/* Mobile Buttons */}
//             <div className="mt-3 w-[25rem] space-y-3">
//               <Link to="/register">
//                 <button className="w-full p-3 font-bold border-[1px] border-gray-600 rounded-md text-my-300">
//                   Sign Up
//                 </button>
//               </Link>
//               <Link to="/login">
//                 <button className="w-full p-3 font-bold bg-my-100 rounded-md text-black">
//                   Login
//                 </button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





