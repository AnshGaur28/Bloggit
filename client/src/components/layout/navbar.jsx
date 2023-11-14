import { Link, useNavigate } from "react-router-dom";
import { Books , UserCircle , SignOut } from "@phosphor-icons/react";
import { motion } from "framer-motion";
export default function Navbar(){

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem('token')
        navigate('/');
    }

    return <section>
            <nav className=" flex  text-white p-2 mb-4 w-full fixed z-20  mt-2 bg-gradient-to-r from-zinc-950 to-transparent border-b-[1px] border-gray-500">
                <motion.span   whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} animate={{ opacity: 1  }} transition={{ ease: "easeOut", duration: 2 }} className="flex justify-start mr-4 mt-  text-white "><a href="/"><Books size={32} /></a></motion.span>
                <motion.span  whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}  initial={{ opacity: 0 }} animate={{ opacity: 1  }} transition={{ ease: "easeOut", duration: 2 }} className="text-3xl  font-bold text-white">Bloggit</motion.span>
                <motion.span  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} className="flex w-full justify-end gap-10">
                    <motion.a  whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}  className="flex m-2 p-1 border-[#0aff9d] border-[1px] flex items-center rounded-lg text-white " href='http://localhost:5173/#about'>ABOUT US</motion.a>
                    {!token &&   <motion.div   whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}   ><Link className="flex m-2 p-1 border-[#0aff9d] border-[1px]  rounded-lg flex items-center text-white "  to='http://localhost:5173/login'>LOGIN</Link></motion.div>}
                     {!token &&  <motion.div   whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}  ><Link className="flex m-2 p-1 border-[#0aff9d] border-[1px] rounded-lg flex items-center text-white " to='http://localhost:5173/register'>SIGN UP</Link></motion.div>}
                     {token && ( <motion.div   whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}  ><Link className="flex m-2 p-4 rounded-lg flex items-center border-[1px] border-[#0aff9d] text-white "  to='http://localhost:5173/blogs'>BLOGS</Link></motion.div>)}
                     {token && ( <motion.div   whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }}  ><Link className="flex m-2 rounded-lg p-1 flex items-center text-white" to='http://localhost:5173/profile'><UserCircle size={42} /></Link></motion.div>)}
                     {token && (<motion.button whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} className="flex m-2 p-1 flex items-center text-white" onClick={handleLogout}><SignOut size={32} /></motion.button>)}

                </motion.span>


            </nav>
            
        </section>
}