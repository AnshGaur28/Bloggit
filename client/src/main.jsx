import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import './index.css'
import UpdateProfile from './pages/Profile/updateprofile.jsx'
import { CreateProfile } from './pages/Profile/createProfile.jsx'
import { SavedBlogs } from './pages/Blog/savedblogs.jsx'
import {
  createBrowserRouter ,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Profile from './pages/Profile/profile.jsx'
import BlogPage from './pages/Blog/blogpage.jsx'
import ArticleForm  from './pages/Blog/createBlog.jsx'
import { MyBlogs } from './pages/Blog/myBlogs.jsx'
import { Sblog } from './pages/Blog/sblog.jsx'
import { EditBlog } from './pages/Blog/editblog.jsx'

const isAuthenticated = () => {
  // Implement your authentication check here, e.g., check for the presence of a JWT token
  const token = localStorage.getItem('token');
  return !!token; // Return true if authenticated, false otherwise
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    
  },
  {
    path : "/create-blog",
    element : <ArticleForm/>
  },
  {
    path : "/my-blogs" ,
    element : <MyBlogs/>
  },
  {
    path : '/login',
    element :  <Login/>,
  }
  ,
  {
    path : '/register',
    element : <Register/>,
  },
  {
    path : '/profile',
    element : isAuthenticated?<Profile />: <Navigate to='/'/>,
  },
  {
    path : '/blog/:blogId',
    element : <Sblog/>
  },
  {
    path : '/blogs',
    element : isAuthenticated ? <BlogPage /> : <Navigate to='/'/>,
  },
  {
    path : '/createProfile',
    element :  isAuthenticated ? <CreateProfile /> : <Navigate to='/'/>
  },
  {
    path : '/update-profile',
    element : <UpdateProfile/>
  },
  {
    path : '/bookmarked',
    element : isAuthenticated ? <SavedBlogs/> : <Navigate to='/'/>,
  },
  {
    path : '/editblog/:blogId',
    element : <EditBlog/>
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
