












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
    <div className='text-center flex justify-center mt-24 md:mt-12 text-gray-200'>
            <div className='bg-emerald-900 shadow-md shadow-[#3e3a3a] w-max p-10 flex flex-col rounded-md  items-center justify-center'>

   <Link to="/"> <span className='text-5xl text-gray-400 font-bold bg-gradient-to-r from-my-300 via-my-500 to-my-100 text-transparent bg-clip-text'>
        Bilsco
      </span> </Link>
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
          className='w-[300px] md:w-[400px] p-2 md:p-4 bg-transparent border-[1px] border-gray-600 outline-none rounded-md'
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder='Password'
          required
        />

        <div className="remember">
          <p className='text-start'>Forgot password?</p>
        </div>

        <Link to="/"> <button className='border-gray-300  hover:bg-green-400 text-my-200 bg-my-100 w-[300px] md:w-[400px] p-2 md:p-4 rounded-md' type='submit'>
          Login
        </button>
        </Link>
      </form>

      <p className='link mt-3'>
        Don't have an account? <Link to="/register"><span className='text-my-100'>Register</span></Link>
      </p>

      <p>© 2024 Bilsco. All Rights Reserved.</p>
    </div>
    </div>
  );
};

export default Login;
