import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useEffect , useState} from 'react';
import Layout from '../../components/layout/layout';
import { UserCircle , Alien } from '@phosphor-icons/react';
import {MetaLogo , TwitterLogo  , InstagramLogo } from '@phosphor-icons/react'
export default function Profile(){
    const [username , setUsername] = useState(null);
    const [age , setAge] = useState(null);
    const [profession , setProfession] = useState(null);
    const [gender , setGender] = useState(null);
    const [email , setEmail] = useState(null);
    const [phone , setPhone] = useState(null);
    const token = localStorage.getItem('token');
    if(token){
        var payload = jwtDecode(token);
        var targetemail = payload.user.email ;
    }

    const fetchData = async (targetemail) => {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/profile/fetch-profile', {
            params: {
                email: targetemail,
            },
            headers: {'Content-Type': 'application/json' ,
                        Authorization : `Bearer ${token}`
        }, 

        });
        if(response.status===200){
            setUsername(response.data.profile.username)
            setEmail(response.data.profile.email)
            setAge(response.data.profile.age)
            setProfession(response.data.profile.profession)
            setGender(response.data.profile.gender)
            setPhone(response.data.profile.phone)
        }
    };
    useEffect(()=>{
        fetchData(targetemail)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    return <Layout>
    <div className='bg-neutral-100 font-sans w-full '>
        <div className='flex flex-row bg-zinc-800  '>
            <div className='flex flex-col items-center bg-white  rounded-t-xl justfiy-center  rounded-md w-1/3  p-4 m-10 mr-0 mt-48 bg-zinc-800 border-[2px] border-gray-500  '>
                <div className=' justify-center   w-1/3 flex  '>
                    <UserCircle  className='bg-white text-black rounded-full p-3 m-2'size={130}/>
                </div>
                <div className='  w-full rounded-lg flex flex-col align-center  justify-center '>
                    <h1 className='flex justify-center font-bold text-2xl text-white'>{username}</h1>
                    <h2 className='flex justify-center font-bold text-sm text-white'> {profession} </h2>
                </div>
                <div className='flex flex-row gap-3 bg-zinc-700 rounded-lg w-2/3 text-white justify-center m-1'>
                    <MetaLogo size={40} className='p-1 m-2'/>
                    <TwitterLogo size={40} className='p-1 m-2'/>
                    <InstagramLogo size={40} className='p-1 m-2'/>
                </div>
                <div className='flex flex-col gap-3 justify-between bg-zinc-700 rounded-lg w-2/3 justify-start m-1 mt-0 pt-0 p-3 m-4 '>
                <div className='flex flex-row justify-between m-1 p-1 shadow-lg'><h1 className='flex  text-md text-gray-600 font-bold text-white'>Email   :</h1> <span className=' text-white'> {email} </span></div>
                <div  className='flex flex-row justify-between m-1 p-1 shadow-lg'><h1 className='flex  text-md text-gray-600 font-bold text-white'>Phone  :</h1>  <span className=' text-white'> {phone} </span></div>
                <div  className='flex flex-row justify-between m-1 p-1 shadow-lg'><h1 className='flex  text-md text-gray-600 font-bold text-white'>Gender   :</h1> <span className=' text-white'> {gender}</span></div>
                </div>
            </div>

            <div className='flex flex-col items-start bg-white  rounded-t-xl justfiy-start   rounded-md w-2/3  p-4 m-10 mt-48 bg-zinc-800 ml-2 border-[2px] border-gray-500'>
                
                <div className='flex flex-row gap-3 bg-zinc-700 rounded-lg  justify-start m-4 p-3 w-1/3 mb-1 pb-0 '>
                    <h1 className='flex align-start font-bold text-2xl text-white items-center'>About Me</h1>
                    <h2 className='flex align-start font-bold text-sm text-white items-center'>& my Life</h2>
                    <div className='flex bg-orange-700 h-10 w-20 items-center '> <div className='flex bg-zinc-700 h-9 w-20 items-center text-white z-20 justify-center'><Alien size={32} /></div></div>
                    
                </div>
                <div className='flex flex-col gap-3 bg-zinc-700 rounded-lg w-2/3 justify-start m-1 mt-0 pt-0 p-3 m-4 mb-1 pb-0'>
                    <h1 className='flex  text-md text-gray-400 font-bold'>Description</h1>
                    <div className='flex text-sm text-white '>As a passionate Full Stack Web Developer, I thrive on turning ideas into dynamic and functional web applications. With a deep understanding of both front-end and back-end technologies, I'm well-versed in building seamless, user-friendly digital experiences. My skills include proficiency in HTML, CSS, JavaScript, and a range of front-end libraries and frameworks. On the back end, I'm adept at database management and server-side scripting with languages like Node.js and Python. I'm also comfortable working with version control systems and integrating third-party APIs. My goal is to create elegant, efficient, and secure web solutions that meet the unique needs of each project, all while staying current with the latest industry trends and best practices. I'm excited to collaborate with a dynamic team to bring digital visions to life.</div>

                    


                </div>
                <div className='flex flex-row gap-3 justify-center bg-zinc-700 rounded-lg w-2/3 justify-start m-1 mt-0 pt-0 p-3 m-4'>
                    <div className='flex flex-col w-1/2 mr-1 m-0 p-2 '>
                        <h1 className='flex flex-col text-md text-gray-400 font-bold'>Education</h1>
                        <h2 className='flex flex-col text-md text-gray-300 p-1'>Institute  :</h2>
                        <h2 className='flex flex-col text-md text-gray-300 p-1'>Field  :</h2>
                    </div>

                    <div className='flex flex-col w-1/2 mr-1 m-0 p-2'>
                        <h1 className='flex flex-col text-md  text-gray-400 font-bold'>Profession</h1>
                        <h2 className='flex flex-col text-md  text-gray-300 p-1'>Company  :</h2>
                        <h2 className='flex flex-col text-md  text-gray-300 p-1'>Position  : {profession}</h2>
                    </div>
                
                </div>
            </div>
            
        </div>
    </div>
    </Layout>
}