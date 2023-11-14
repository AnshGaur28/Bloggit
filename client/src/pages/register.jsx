import { useState } from "react"
import axios from 'axios';
import Layout from "../components/layout/layout";
import { useNavigate } from "react-router-dom";
export default function Register(){
    const [password , setPassword] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');
    const Navigate = useNavigate();
    const handleRegister = async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                email,
                password,
                },
                {
                headers: {'Content-Type': 'application/json'},
            });
        
            if (response.status === 201) {
                setMessage(`Registration successfull! `);
                    localStorage.setItem('token' , response.data.token);
                Navigate("/createProfile");

            } else {
                setMessage(`Already Registered `);
            }
            console.log(response.status)
        } 
        catch (error) {
            setMessage('An error occurred')
        }
    };
    return <Layout>

<section className="bg-zinc-900 dark:bg-gray-900 h-screen">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">We aim to imporve  the world’s potential</h1>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Bloggit we focus on Topics where technology, innovation, and capital can unlock long-term value and Learning.</p>
            
        </div>
        <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Sign Up to Bloggit
                </h2>

                <div className="text-red text-sm">{message}</div>
                <form className="mt-8 space-y-6"  >
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"  />
                        </div>
                        <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                        </div>
                        <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleRegister} >Register </button>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                         registered ? <a href='/login' className="text-blue-600 hover:underline dark:text-blue-500" >Login</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

    </Layout>
}