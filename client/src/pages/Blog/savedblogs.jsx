import axios from "axios";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Footer from "../../components/layout/footer";
import { NotePencil , Plus  } from "@phosphor-icons/react";
import Blog from "./blogs";
export function SavedBlogs(){
    const PER_PAGE = 3 ;
    const [currentPage , setCurrentPage] = useState(0);
    const navigate = useNavigate();
    const [message , setMessage]  = useState('');
    const [blogs , setBlogs]  = useState([]);
    const [searchValue ,setSearchValue] = useState('');
    const token = localStorage.getItem('token');

    const handleSearch = async (e)=>{
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }


    const offset = currentPage * PER_PAGE;


    
    const pageCount = Math.ceil(blogs.length / PER_PAGE) ;

    
    const fetchData = async ()=>{
       
        try{
            const response = await axios.get('http://localhost:3000/api/profile/bookmark', {
                params: {
                    token : token,
                },
            });
           
            if(response.status === 200){
                setMessage(response.data.message) ;
                setBlogs(response.data.blogs);
                // console.log(blogs)
            }
            else{
                setMessage("An Error Occurred")
            }
        }
        catch(error){
            console.error(error.message);
        }
    };


    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    const currentBlogs = filteredBlogs.slice(offset, offset + PER_PAGE)

    useEffect(()=>{
        fetchData();
    },[]);


    return <div>
        <> 
        <div className="w-full bg-neutral-100  ">
        <nav className="font-bold text-md flex bg-zinc-900 h-20 rounded-b text-white">
            <h1 className="text-3xl text-white justify-start p-1 m-2">Bloggit</h1>
          
            <input type="text" name='blog-search' id='blog-search' value={searchValue} onChange={handleSearch} className="bg-gray-100 flex justify-start text-black  rounded-lg p-2 my-3 w-3/5 h-2/3 ml-4" placeholder="What are you looking for...."/>
            <div className="flex justify-end mr-4 my-2 p-1 w-1/3" >
            <button className="gap-3 mr-5"><a href="/create-blog"><NotePencil className="w-10 h-10  text-white rounded gap-3"/></a></button>
            <button className=" mx-3"><a href="/my-blogs">My Blogs</a></button>
            </div>
            
        </nav>
            <section className="flex flex-col bg-zinc-900">

            <div className="p-0 mt-0 flex flex-row    border-t-[1px] ">
            <div className=" m-1 flex flex-col w-1/2">
            <div className="flex flex-row justify-between mx-10 p-2">
                <div className="flex flex-col ">
                <div className=" ml-10 mt-8 flex flex-row flex-wrap bg-zinc-900 text-white w-full justify-center align-center">
                    <Plus className='align-center flex justify-center' size={20} />
                    <span className="ml-5 text-gray-500 align-center flex justify-center text-white">Machine Learning</span>
                    <span className="ml-5 text-gray-500 align-center flex justify-center text-white">Deep Learning</span>
                    <span className="ml-5 text-gray-500 align-center flex justify-center text-white">Web Development</span>
                </div>
                <div className=" ml-10 border-gray-500 w-full border-[1px] mt-2"></div>
                </div>
            </div>
                
                {currentBlogs.length > 0 ? ( // Check if blogs is not empty
                currentBlogs.map((blog) => (
                    <div key={blog.title} className="flex flex-row">
                    <Blog blog={blog} link={`/my-blogs/${blog._id}`}/>
                    </div>
                ))
                ) : (
                <p>Loading blogs...</p> // Render a loading message while fetching data
                )}

                
                
            </div>
            <div className="ml-20  flex flex-col  shadow-lg border-[1px]  h-screen  border-gray-500"></div>
            <div className="w-1/3  flex flex-col m-2 p-1 ">

                <div className=" ml-10 mt-8 flex flex-col flex-wrap bg-neutral-100 w-full justify-center align-center bg-zinc-800">
                    <h1 className="m text-gray-500 align-center flex  justify-center text-violet-500  ">Trending Topics</h1>
                </div>
                <div className=" ml-10  flex flex-row flex-wrap bg-neutral-100 w-full justify-center align-center bg-zinc-800">
                   <div className=" ml-10 border-gray-500 w-1/3 flex-row flex align-center justify-center border-[1px] mt-2"></div>
                </div>
                



                <div className=" ml-10 mt-8 flex flex-col flex-wrap bg-neutral-100 w-full justify-center align-center bg-zinc-800">
                    <h1 className="ml-5 text-gray-500 align-center flex justify-center text-violet-500 ">Related Topics</h1>
                </div>
                <div className=" ml-10  flex flex-row flex-wrap bg-neutral-100 w-full justify-center align-center bg-zinc-800">
                   <div className=" ml-10 border-gray-500 w-1/3 flex-row flex align-center justify-center border-[1px] mt-2"></div>
                </div>
                
            </div>

            </div>

            <nav className="flex flex-row justify-center">
            <ReactPaginate
                    previousLabel={"← Previous"}
                    nextLabel={"Next →"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination  "}
                    previousLinkClassName={"pagination__link  hover:bg-black hover:text-violet-800  "}
                    nextLinkClassName={"pagination__link hover:bg-black hover:text-violet-800  "}
                    disabledClassName={"pagination__link--disabled  hover:bg-black hover:text-violet-800  "}
                    activeClassName={"pagination__link--active bg-black text-violet-800 px-4 rounded flex justify-center "}
                    className="flex flex-row  justify-center gap-20 text-violet-600 p-4 my-10 border-gray-500 border-[1px] "
            />
            </nav>
            
            </section>
            
            
        </div>
        <Footer/>
     </> 
    </div>
}