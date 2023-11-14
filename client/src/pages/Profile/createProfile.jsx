import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function CreateProfile(){

    const token = localStorage.getItem('token');
    const [email , setEmail] = useState('');
    const [username , setUsername] = useState('');
    const [age , setAge] = useState('');
    const [profession , setProfession] = useState('');
    const [gender , setGender] = useState('');
    const [phone , setPhone] = useState('');
    const [message , setMessage] = useState(null);
    const navigate = useNavigate();
    const createProfile = async (e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/profile/create-profile" , {
            email,
            username , 
            age,
            profession,
            gender,
            phone,
            token ,
        },
        {
            headers: {'Content-Type': 'application/json'},
        });

        if(response.status === 200 ){
            console.log('Success')
            navigate('/login');
        }
        else{
            setMessage(response.data.message)
            console.error('Failed')
        }
    };
         
      

    return <>

            <section className="bg-gray-50 dark:bg-gray-900 h-full">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We aim to imporve  the world’s potential</h1>
                        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Bloggit we focus on Topics where technology, innovation, and capital can unlock long-term value and Learning.</p>
                        
                    </div>
                    <div>
                        <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Set Up Your Profile
                            </h2>
                            <div>{message}</div>
                            <form className="mt-8 space-y-6" onSubmit={createProfile} >
                                
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                                    <input type="username" name="username" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}  placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <input type="email" name="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your age</label>
                                    <input type="number" name="age" id="age" value={age} onChange={(e)=>{setAge(e.target.value)}}  placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="profession" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Profession</label>
                                    <input type="text" name="profession" id="profession" value={profession} onChange={(e)=>{setProfession(e.target.value)}}  placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
                                    <input type="number" name="phone" id="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}  placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Select your gender:
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={gender}
                                        onChange={(e)=>setGender(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
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
                                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Save </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

    </>
}