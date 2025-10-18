import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "../config/axios";

const Login = () => {

         const [email,setEmail] = useState('')
         const [password,setPassword] = useState('')

         const navigate = useNavigate();


         function submitHandler(e){
                  e.preventDefault();
                  axios.post('/users/login',{email,password})
                  .then(res => {
                           console.log(res.data);
                           navigate('/');
                  })
                  .catch(err => {
                           console.log(err);
                  })
         
         }

         return (
                  <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                           <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
                                    <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

                                    <form className="space-y-5"
                                    onSubmit={submitHandler}
                                    >
                                             <div>
                                                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                                                               Email
                                                      </label>
                                                      <input
                                                               onChange={(e) => setEmail(e.target.value)}

                                                               id="email"
                                                               type="email"
                                                               placeholder="Enter your email"
                                                               className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                                                      />
                                             </div>

                                             <div>
                                                      <label htmlFor="password" className="block text-sm font-medium mb-1">
                                                               Password
                                                      </label>
                                                      <input
                                                               onChange={(e) => setPassword(e.target.value)}
                                                               id="password"
                                                               type="password"
                                                               placeholder="Enter your password"
                                                               className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
                                                      />
                                             </div>

                                             <button
                                                      type="submit"
                                                      className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded font-semibold transition-colors"
                                             >
                                                      Login
                                             </button>
                                    </form>

                                    <p className="text-sm text-center mt-6">
                                             Don’t have an account?{" "}
                                             <Link to="/signup" className="text-blue-400 hover:underline">
                                                      Create one
                                             </Link>
                                    </p>
                           </div>
                  </div>
         );
};

export default Login;
