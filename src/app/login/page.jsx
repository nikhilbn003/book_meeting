"use client"
import LoginForm from '@/components/login/login';
import SignupForm from '@/components/login/signup';
import React, { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-cover" style={{ backgroundImage: "url('/your-background-image.jpg')" }}>
      <button
        onClick={toggleForm}
        className={`bg-${isLogin ? 'blue' : 'green'}-500 text-white px-4 py-2 rounded-full mb-4 hover:bg-${isLogin ? 'blue' : 'green'}-600`}
      >
        {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
      </button>
      <div className="w-1/3 p-8 border rounded-lg shadow-lg bg-white bg-opacity-90">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

export default Login;

// import LoginForm from '@/components/login/login';
// import SignupForm from '@/components/login/signup';
// import React, { useState } from 'react';

// const Login = () => {
  
//   const [isLogin, setIsLogin] = useState(true);

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   return (
//     <div className="flex h-screen justify-center items-center bg-cover" style={{ backgroundImage: "url('/your-background-image.jpg')" }}>
//       <div className="w-1/3 p-8 border rounded-lg shadow-lg bg-white bg-opacity-90">
//         <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
//         {isLogin ? <LoginForm /> : <SignupForm />}
//         <button
//           onClick={toggleForm}
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
