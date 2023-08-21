import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Cards(props) {

          let post=props.post;
          console.log(post);
  return (
    <div>
        <div className='flex flex-col gap-3'>
          
                
                              <div key={post.id} className='flex flex-col gap-1'>
                              <NavLink to={`/blog/${post.id}`}> <p className='font-semibold text-lg text-blue-500'>{post.title}</p>
                              </NavLink>
                               <p className=' text-black text-xs'>
                                        By <span className='text-red-500'>{post.author}</span> on 
                                        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>{post.category}</NavLink>
                               </p>
                               <p className='text-red-500'>Posted on {post.date}</p>
                               <p className='font-bold text-sm'>{post.content}</p>
                               <div className='flex gap-2'>
                                
                                       { post.tags.map((tag,index)=>
                                       (
                                       <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`} > <span className='text-xs text-blue-800'>{`#${tag}`}</span>
                                        
                                        </NavLink>
                                       )
                     )}

                               </div>
                              </div>
                              
                    
          
        </div>
    </div>
  )
}
