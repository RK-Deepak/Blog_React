import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import Blogs from '../components/Blogs'
import { useNavigate,useLocation } from 'react-router-dom'
export default function CategoryPage() {

          const navigation=useNavigate();
          const location=useLocation();
          const category=location.pathname.split("/").at(-1)
  return (
    <div>
          <Header/>
          <div>
                    <button onClick={()=>navigation(-1)} className='px-2 py-1 border border-slate-900 rounded-md my-2'>Back</button>
                    <h2>
                              By Category <span>{category}</span>
                    </h2>
          </div>
          <Blogs/>
          <Pagination/>
      
    </div>
  )
}
