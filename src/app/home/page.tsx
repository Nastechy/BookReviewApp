import HomePage from '@/FilePages/homePage'
import { BooksData } from '@/types/BooksData'
import React from 'react'

const Page = () => {
  return (
    <div >
      <HomePage books={BooksData} />
    </div>
  )
}

export default Page



