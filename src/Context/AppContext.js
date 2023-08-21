import React, { createContext, useState } from 'react'
import {baseUrl} from "../baseUrl"
import { useNavigate } from 'react-router-dom';

//1 step create context
export const AppContext=createContext();

export  default function AppContextProvider({children}) {

          const [loading,setloading]=useState(false);
          const [page,setPage]=useState(1);
          const[totalPages,settotalPages]=useState(null);
          const[posts,setposts]=useState([]);
          const navigate=useNavigate();
       
        
          
          async  function fetchdata(page=1,tag=null,category)
          {
            setloading(true);
                    let url=`${baseUrl}?page=${page}`;

                    if(tag)
                    {
                       
                        url+=`&tag=${tag}`;
                    }
                    if(category)
                    {
                        url+=`&category=${category}`;
                    }


                   

                    try 
                    {
                              let data=await fetch(url);
                              let output=await data.json();
                              console.log(output);
                              setPage(output.page);
                              setposts(output.posts);
                              settotalPages(output.totalPages);
                    }
                    catch(error)
                    {
                        console.log("kuch toh gadbad hai daya");
                        setPage(1);
                        setposts([]);
                        settotalPages(null);
                    }

                    setloading(false);
             
          }
        //   navigate: This is likely a function that is being called. It's not a standard JavaScript function, so it's likely part of a library or framework you're using in your web application.

        //   { search: ?page=${page} }: This is an object being passed as an argument to the navigate function. In JavaScript, objects are collections of key-value pairs. In this case, you have a single key-value pair where the key is search and the value is a template string containing ?page=${page}.
          
        //   ?page=${page}: This is a template string that is using string interpolation to insert the value of the page variable into the string. The ${page} part is a placeholder that will be replaced with the actual value of the page variable at runtime. The result of this template string will be something like ?page=1 if page is 1.

        // The syntax you've provided, navigation({ search: ?page=${page} }), is likely a call to a function named navigation with an object parameter. The object has a search property with a string value that contains a URL query parameter in the form of ?page=${page}. The purpose of this code is likely to modify the URL's query parameters and trigger a navigation event.
          function handlePageChange(page)
          {
            //search for page thna navigate to the page
            navigate({search:`?page=${page}`});
                    setPage(page);
                  
          }


          const value={
                    loading,
                    setloading,
                    page,
                    setPage,
                    totalPages,
                    settotalPages,
                    posts,
                    setposts,
                    handlePageChange,
                    fetchdata
          }
        

      


          //2 step providing context jo bhi child hai iss approvider context ke unke andar value chali jayegi

    return <AppContext.Provider value={value}>
          {children}
    </AppContext.Provider>
  
}
