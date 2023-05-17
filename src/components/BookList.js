
import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/book-context-hook";
const BookList = () => {
  // const handleEdit = (id, title) => {
  //    onEdit(id,title)
  // }
  const { books } = useBooksContext();
  const listItems = books.map((book) => {
    return (
      // <BookShow  key={book.id} book={book} />
      <BookShow  key={book.id} book={book} />
    );
  });
  return (
    <div className="list-books">
      <h3>Reading List Book</h3>
      {listItems}
    </div>
  );
};

export default BookList;