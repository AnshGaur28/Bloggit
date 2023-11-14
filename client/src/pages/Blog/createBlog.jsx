import Layout from '../../components/layout/layout'
import axios from 'axios';
import  { useState } from 'react';
import { useNavigate } from "react-router-dom";
const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [discipline, setDiscipline] = useState('engineering');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [author_name, setAuthorName] = useState('');

    const navigate = useNavigate();
    const token = localStorage.getItem('token') ;
    const createBlog =  async (e)=>{
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/api/blog/create-blog' , {token , title , discipline , subtitle , content , image , author_name , description} , {
            headers: {'Content-Type': 'application/json'},
        });
        if(response.status === 200 ){
            console.log('Blog Successfully Saved ')
            navigate('/blogs');
        }
        else{
            console.error('Creating Blog Failed');
            console.log(response)
            navigate('/blogs');
        }

    }


  return (
    
    <div className=' text-black p-8'>
  <h2 className='text-2xl font-bold mb-4'>Create New Article</h2>
  <form onSubmit={createBlog} className='grid grid-cols-1 gap-4 mt-20 w-full '>
    <div className='mb-4 '>
      <label htmlFor="title" className='block text-sm font-semibold mb-1'>Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className='w-full p-2 border border-gray-300 rounded-md'
      />
    </div>
    <div className='mb-4'>
      <label htmlFor="discipline" className='block text-sm font-semibold mb-1'>Discipline:</label>
      <select
        id="discipline"
        value={discipline}
        onChange={(e) => setDiscipline(e.target.value)}
        required
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
        required
        className='w-full p-2 border border-gray-300 rounded-md'
      />
    </div>
    <div className='mb-4'>
      <label htmlFor="content" className='block text-sm font-semibold mb-1'>Content:</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className='w-full p-2 border border-gray-300 rounded-md h-80'
      ></textarea>
    </div>
    <div className='mb-4'>
      <label htmlFor="description" className='block text-sm font-semibold mb-1 '>Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
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
    <div className='mb-4'>
      <label htmlFor="author_name" className='block text-sm font-semibold mb-1'>Author Name:</label>
      <input
        type="text"
        id="author_name"
        value={author_name}
        onChange={(e) => setAuthorName(e.target.value)}
        className='w-full p-2 border border-gray-300 rounded-md'
      />
    </div>
    <div>
      <button type="submit" className='bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-violet-700'>Create Article</button>
    </div>
  </form>
</div>
  );
};

export default ArticleForm;
