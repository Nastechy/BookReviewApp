'use client'

import React from 'react';
import { useParams } from 'next/navigation'; 
import BookDetailsPage from '@/FilePages/bookDetailsPage';

const BookPage = () => {
  const params = useParams(); 
  const id = params?.id;

  if (!id || Array.isArray(id)) {
    return <div>Loading...</div>;
  }

  console.log(id, 'oooooo');

  return (
    <div>
      <BookDetailsPage params={{ id }} /> 
    </div>
  );
};

export default BookPage;
