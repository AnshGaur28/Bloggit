import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // You need axios to make HTTP requests

export function Sblog() {
  const { blogId } = useParams();
  const [blogContent, setBlogContent] = useState(null);


    // Use axios to make an HTTP request to fetch the specific blog content
    const fetchData = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3000/api/blog/${blogId}` , {
                params: {blogId},
                headers: {'Content-Type': 'application/json',
            }});

            if(response.status === 200){
                setBlogContent(response.data.blogData);
            }
            else{
                console.log("Some Error Occurred")
            }
        }
        catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div>
      {blogContent ? (
        <div>
          {/* Display the content for the specific blog */}
          <h2>Blog Title: {blogContent.title}</h2>
          <p>{blogContent.content}</p>
          {/* Add more content fields as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
