import { useState, useEffect } from "react";

export default function BooksPage() {
  const [book, setBook] = useState(null);
  useEffect(() => {
    fetch("https://gutendex.com/books/")
      .then((response) => response.json())
      .then((apiData) => {
        setBook(apiData.results);
        console.log(apiData);
      });
  }, []);

  return (
    <div className="bg-gray-400 min-h-screen ">
      <p className="text-xl text-white">
        {book ? JSON.stringify(book) : "Loading Books..."}
      </p>
    </div>
  );
}
