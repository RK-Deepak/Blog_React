import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { useEffect } from 'react';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Blogs from '../components/Blogs';
import Cards from '../components/Cards';

export default function BlogPage() {
          const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
          const [blog,setblog]=useState(null);
          const [relatedblogs,setrelatedblogs]=useState([]);
          const location=useLocation();
          const navigate=useNavigate();
         const {loading,setloading}=useContext(AppContext);


         const blogId= location.pathname.split("/").at(-1);
         console.log("ENTER");

         async function fetchRelatedBlogs()
         {
           setloading(true);
           let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
         
              try 
              {
                 const res=await fetch(url);
                 const data=await res.json();

                 setblog(data.blog);
                 setrelatedblogs(data.relatedBlogs);
                

              }
              catch(error)
              {
                    console.log("Error aagya in blog id wali call");
              setblog(null);
            setrelatedblogs([]);
              }
              setloading(false);
         }
       

         useEffect(()=>
         {
          if(blogId)
          {
                    fetchRelatedBlogs();
          }
           },[location.pathname]);
  return (
    <div>
      <Header/>
      <div>
        <button
        onClick={() => navigate(-1)}
        className='px-2 py-1 border border-slate-900 rounded-md my-2' >
            Back
        </button>
      </div>
       {
          loading?<Spinner/>:
          blog?
          (<div>
                    <Cards post={blog}/>
                   
                    <h2 className='font-bold underline my-2'>Related Blogs</h2>
                    {
                           relatedblogs.map((post)=>
                           (
                              <div key={post.id}>
                              <Cards post={post}/>
                              </div>
                              )
                           )   
                    }
                    </div>):
                    (<div>
                    <p>No blog found</p>
                    </div>)


       }
    </div>
  )
}
