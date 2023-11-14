import { BookmarkSimple , Pen } from "@phosphor-icons/react"
import axios from "axios"
import { useState , useEffect } from "react";
export default function Blog({blog , link , editable}){
    const [message , setMessage]  = useState('');
    const addBookmark  = async (e)=>{
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/blog/addbookmark",{blog_id : blog._id , author_id : blog.author_id  } , {headers: {'Content-Type': 'application/json'},});

        if(response.status == 200){
            setMessage(response.data.message);
        }
        else{
            console.error(response);
        }
    }

    useEffect(() => {
        const hideMessage = () => setMessage('');
        const timeoutId = setTimeout(hideMessage, 3000);
        return () => clearTimeout(timeoutId);
      }, [message]);

    return <div className="flex justify-start  mt-8  ml-10 w-full" >
    <div  className="flex justify-center  flex-col w-full ">
            
            <div className=" bg-zinc-800  p-2 shadow-lg mt-2 text-white rounded-lg border-zinc-600 hover:border-[#0aff9d] border-[1px] w-full">
            <span className="flex flex-row justify-between"><h1 className="flex justify-center text-3xl text-violet-700 font-extrabold  p-1 mb-2">{blog.title}</h1><button onClick={addBookmark}><BookmarkSimple size={32}/></button> </span>
                <div>{message}</div>
                <h3 className="text-lg text-gray-500  italic">{blog.subtitle}</h3>
                <h3 className="text-lg text-gray-500  italic">{blog.discipline}</h3>
                <div className="font-normal text-md font-bold p-1 m-1">{blog.description}  <p className="flex justify-end"> ~ {blog.author_name}</p> </div>
                
                <p className="w-full flex justify-between">{editable?<span className="flex items-center"><button className="border-[1px] border-gray-500 p-1  rounded-md hover:rounded-none hover:bg-gray-500"><a href={link}><Pen size={32} /></a></button></span>:<span></span>}<button className="flex justify-center border-[2px]   border-[#0aff9d] hover:bg-[#0aff9d] w-1/4 rounded-lg p-2 m-1"><a href={link} className="text-white ">Visit</a></button></p>

            </div>
            
        </div>
    </div>
}