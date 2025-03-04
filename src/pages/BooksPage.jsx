import { useState, useEffect } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((response) => response.json())
      .then((apiData) => {
        setBooks(apiData.results);
        console.log(apiData);
      });
  }, []);

  return (
    <div className="bg-gray-400 min-h-screen ">
      {books?.map((book) => (
        <h3 key={book.id}>{book.title}</h3>
      ))}
    </div>
  );
}
