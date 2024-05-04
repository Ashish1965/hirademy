import BookItem from "@/components/BookItem";
import Link from "next/link";
import React from "react";

const books = (props) => {
  const booksList = props.Books;
  // console.log(booksList);
  return (
    <section className="text-gray-600 body-font mt-10 ">
        <div className="px-5 mx-auto">
          <div className="grid grid-cols-1 gap-9 md:grid-cols-3 xl:grid-cols-4">
      {booksList.map((Book) => (
        <BookItem
          key={Book.id}
          id={Book.id}
          title={Book.title}
        />
      ))}
    </div>
        </div>
      </section>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://softwium.com/api/books");
  const data = await res.json();
  return {
    props: {
      Books: data,
    },
  };
}

export default books;
