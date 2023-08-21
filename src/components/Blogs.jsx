import React, { useContext } from 'react'
import Spinner from './Spinner'
import { AppContext } from '../Context/AppContext';
import Cards from './Cards';


export default function Blogs() {



          const {posts,loading}=useContext(AppContext);
  return (
    <div className=' flex flex-col p-3'>
       {
          loading?(<Spinner/>):(
                    
                              posts.length===0?(<div><p>No post Found</p></div>):(
                              posts.map((post)=>
                              (
                                 <Cards key={post.id} post={post}/>)
                              ))
                             
                    
          ) }
    </div>
  );
}
