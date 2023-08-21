import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'
import { useLocation, useNavigate } from 'react-router-dom'

export default function TagPage() {

    const navigation=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div>
        <button onClick={()=>navigation(-1) } className='px-2 py-1 border border-slate-900 rounded-md my-2'>Back</button>
        <h2>
        Blogs Tagged<span>#{tag}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}
