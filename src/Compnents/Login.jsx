
// import {React, useState,} from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   function handleEmail(e){
//     setEmail(e.target.value)
//   }
//   function handlePassword(e){
//     setPassword(e.target.value)
//   }

//      const handleSubmit = async (e)=>{
//     e.preventDefault()
//         setEmail("")
//     setPassword("")

//     const res = await fetch("http://localhost:3000/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body:JSON.stringify({
//         email,
//         password,
//       }),
//     })

//     const data = await res.json()
//     console.log(data)
//   } 



//   return (
//     <div className=' text-centers  flex-col items-center justify-center mt-24 md:mt-12 text-gray-200'>  
//     <span className='text-xl text-gray-400 font-bold   bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text'>Bilsco</span>
//     <p>Your one stop trade copier platform.
//     </p>
//       <form className='flex mt-10  flex-col items-center justify-center gap-5' action="" onSubmit={handleSubmit}>
//         <input className='w-[300px]  p-2 md:p-2 bg-transparent border-[1px] border-gray-600 outline-none rounded-md'  type="email" value={email} onChange={handleEmail} placeholder='Email' required   /> 

//         <input className='w-[300px] p-2 md:p-2 bg-transparent border-[1px] border-gray-600 outline-none rounded-md' type="password" value={password} onChange={handlePassword} placeholder='Password' required />
//          <div className="remember">
//             <p className='text-start'>forgot password?</p>
//          </div>
//          <button className='border-gray-300 border-[1px] w-[300px] rounded-md p-2' onSubmit={handleSubmit} type='submit'>Login</button>
//       </form>
//       <p className='link mt-3'>Dont't have an account? <Link to="/register"><span className='text-my-100'>Register</span></Link> </p>
//       <p>© 2024 Billsco. All Rights Reserved.
//       </p>
//     </div>
//   )



  
  
// }

// export default Login







// import React, { useState } from 'react'
// import {Route, RouterProvider, Link } from "react-router-dom"


// const Register = () => {

//   // const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
  
//   // function handleName(e){
//   //   setName(e.target.value)
//   // }
//   function handleEmail(e){
//     setEmail(e.target.value)
//   }
//   function handlePassword(e){
//     setPassword(e.target.value)
//   }
    
//     const handleSubmit = async (e)=>{
//       e.preventDefault()
//         //  setName("")
//           setEmail("")
//       setPassword("")
  
//       const res = await fetch("http://localhost:3000/api/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body:JSON.stringify({
//           // name,
//           email,
//           password,
//         }),
//       })
  
//       const data = await res.json()
//       console.log(data)
//     }
  
//   return (
   



// <div className=' text-centers flex-col items-center justify-center  mt-24 md:mt-12 text-gray-200'>  
// <span className='text-xl text-gray-400 font-bold   bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text'>Bilsco</span>
// <p>Your one stop trade copier platform.
// </p>
//   <form className='flex mt-10  flex-col items-center justify-center gap-5' action="" onSubmit={handleSubmit}>
//     <input className='w-[300px]  p-2 md:p-2 bg-transparent border-[1px] border-gray-600 outline-none rounded-md'  type="email" value={email} onChange={handleEmail} placeholder='Email' required   /> 
//     {/* <input className='w-[300px] p-2 md:p-2 bg-transparent border-[1px] border-gray-600 outline-none rounded-md' type="text" value={password} onChange={handlePassword} placeholder='Username' required /> */}

//     <input className='w-[300px] p-2 md:p-2 bg-transparent border-[1px] border-gray-600 outline-none rounded-md' type="password" value={password} onChange={handlePassword} placeholder='Password' required />
//      <div className="remember">
//         <p className='text-start'>forgot password?</p>
//      </div>
//      <button className='border-gray-300 border-[1px] w-[300px] rounded-md p-2' onSubmit={handleSubmit} type='submit'>Login</button>
//   </form>
//   <p className='link mt-3'>Dont't have an account? <Link to="/register"><span className='text-my-100'>Register</span></Link> </p>
//   <p>© 2024 Billsco. All Rights Reserved.
//   </p>
// </div>





//   )
// }

// export default Register










import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handlers for input changes
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    console.log(data);

    // Reset form fields after submission
    if (res.ok) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className='text-center flex-col items-center justify-center mt-24 md:mt-12 text-gray-200'>
      <span className='text-5xl text-gray-400 font-bold bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text'>
        Bilsco
      </span>
      <p>Your one-stop trade copier platform.</p>

      <form className='flex mt-10 flex-col items-center justify-center gap-5' onSubmit={handleSubmit}>
        <input
          className='w-[300px] md:w-[400px] p-2 md:p-4 bg-transparent border-[1px] border-gray-600 outline-none rounded-md'
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder='Email'
          required
        />

        <input
          className='w-[300px] p-2 md:w-[400px] p-2 md:p-4 bg-transparent border-[1px] border-gray-600 outline-none rounded-md'
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder='Password'
          required
        />

        <div className="remember">
          <p className='text-start'>Forgot password?</p>
        </div>

        <Link to="/"> <button className='border-gray-300  text-my-200 bg-my-100 w-[300px] md:w-[400px] p-2 md:p-4 rounded-md' type='submit'>
          Login
        </button>
        </Link>
      </form>

      <p className='link mt-3'>
        Don't have an account? <Link to="/register"><span className='text-my-100'>Register</span></Link>
      </p>

      <p>© 2024 Bilsco. All Rights Reserved.</p>
    </div>
  );
};

export default Login;
