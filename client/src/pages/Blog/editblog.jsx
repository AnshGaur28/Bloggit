import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
export function EditBlog(){

    const {blogId} = useParams();
    // console.log(blogId)
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [discipline, setDiscipline] = useState('engineering');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const editBlog = async (e)=>{
        e.preventDefault();
        try{
        const response = await axios.put('http://localhost:3000/api/blog/editblog' , {title , discipline , subtitle , content , description , image , blogId});
        if(response.status===200){
            navigate('/my-blogs')
        }
        else{
            console.log(response.data.message);
        }
        }
        catch(error){
            console.log(error);
        }
    }
  
    return <>
        <div className=' text-black p-8'>
    <h2 className='text-2xl font-bold mb-4'>Edit Article</h2>
    <form onSubmit={editBlog} className='grid grid-cols-1 gap-4 mt-20 w-full '>
        <div className='mb-4 '>
        <label htmlFor="title" className='block text-sm font-semibold mb-1'>Title:</label>
        <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded-md'
        />
        </div>
        <div className='mb-4'>
        <label htmlFor="discipline" className='block text-sm font-semibold mb-1'>Discipline:</label>
        <select
            id="discipline"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
           
            className='w-full p-2 border border-gray-300 rounded-md'
        >
                <option value="engineering">Engineering</option>
                <option value="medical">Medical</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
                <option value="science">Science</option>
                <option value="designer">Designer</option>
        </select>
        </div>
        <div className='mb-4'>
        <label htmlFor="subtitle" className='block text-sm font-semibold mb-1'>Subtitle:</label>
        <input
            type="text"
            id="subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}

            className='w-full p-2 border border-gray-300 rounded-md'
        />
        </div>
        <div className='mb-4'>
        <label htmlFor="content" className='block text-sm font-semibold mb-1'>Content:</label>
        <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            
            className='w-full p-2 border border-gray-300 rounded-md h-80'
        ></textarea>
        </div>
        <div className='mb-4'>
        <label htmlFor="description" className='block text-sm font-semibold mb-1 '>Description:</label>
        <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           
            className='w-full p-2 border border-gray-300 rounded-md h-40'
        ></textarea>
        </div>
        <div className='mb-4'>
        <label htmlFor="image" className='block text-sm font-semibold mb-1'>Image URL:</label>
        <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded-md'
        />
        </div>
        <div>
        <button type="submit" className='bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-violet-700'>Edit Article</button>
        </div>
    </form>
    </div>
    </>
}