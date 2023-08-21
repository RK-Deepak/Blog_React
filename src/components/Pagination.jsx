import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

export default function Pagination() {
          const {page,totalPages,handlePageChange}=useContext(AppContext);
  return (
    <div className='flex justify-between items-center w-full px-5' >
          <div className='flex gap-2'>
        {page<totalPages &&
            <button onClick={()=>handlePageChange(page+1)} className='px-2 py-1 border border-slate-900 rounded-md'>Next</button>
        }
        {page>1 &&
          <button onClick={()=>handlePageChange(page-1)} className='px-2 py-1 border border-slate-900 rounded-md'>Previous</button>
        }
        </div>
        <p>{page} of {totalPages}</p>
    </div>
  )
}
