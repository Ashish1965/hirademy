import React from 'react'
import Link from 'next/link';
const BookItem = (props) => {
  const { title, id } = props;
  return (
    <Link href={`/books/${id}`}>
          <div className="p-6 rounded-lg hover:bg-gray-600 active:scale-95 mt-14">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
              
            </div>
          </div>
          </Link>
  )
}

export default BookItem
