import React from 'react'
import Blogs from "../components/Blogs"
import Pagination from "../components/Pagination"
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header/>
      <div>
          <Blogs/>
          <Pagination/>
      </div>
    </div>
  )
}
