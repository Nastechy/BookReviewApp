'use client'

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { BookType, BooksData } from '@/types/BooksData';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SearchPage() {
  const [, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<BookType[]>([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    }
  }, [searchParams]);

  const performSearch = (query: string) => {
    const filtered = BooksData.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };


  return (
    <div className='p-4'>
      <Link href="/home">
        <div className="inline-flex items-center  p-2 border border-gray-300 rounded-md hover:border-gray-400">
          <ArrowLeft />
        </div>
      </Link>
      <div className="container mx-auto py-6">
        {searchResults.length > 0 ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((book) => (
                <li key={book.id} className="border p-4 rounded-md shadow-md">
                  <div className="aspect-w-3 aspect-h-4 mb-4">
                    <Image
                      src={book.coverImage}
                      alt={`Cover of ${book.title}`}
                      width={300}
                      height={450}
                      layout="responsive"
                      className="rounded-md"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{book.title}</h3>
                  <p className="text-gray-600 font-[500]">Author: {book.author}</p>
                  <p className="mt-2 text-sm line-clamp-3">{book.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div></div>

  );
}