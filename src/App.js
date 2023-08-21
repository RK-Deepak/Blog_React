import React, { useContext, useEffect } from "react";
import "./App.css"

import { AppContext } from "./Context/AppContext";
import { Routes, useLocation, useSearchParams } from "react-router-dom";
import { Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import Home from "./pages/Home";
import TagPage from "./pages/TagPage";
import BlogPage from "./pages/BlogPage";


export default function App() {

  const {fetchdata}=useContext(AppContext);

 

  const [searchparams,setsearchparams]=useSearchParams();
  const location=useLocation();


  useEffect(()=>
  {
    const page=searchparams.get("page") ?? 1;
   
 

    if(location.pathname.includes("tag"))
    {
      const tag=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchdata(Number(page),tag);
    }
    else if(location.pathname.includes("categories"))
    {
      const category=location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchdata(Number(page),null,category);
    }
    else 
    {
      fetchdata(Number(page));
    }
     

  },[location.pathname,location.search]);
 
  return <div className="flex flex-col gap-2 items-center min-h-screen w-[90%] max-w[600px] p-2 mx-auto" >
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog/:blogId" element={<BlogPage/>}/>
    <Route path="/tags/:tag" element={<TagPage/>}/>
    <Route path="/categories/:category" element={<CategoryPage/>}/>

   </Routes>
  </div>;
}
