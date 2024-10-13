import { useEffect, useState } from "react";
import List from "../components/List";
import "./Summary.css";

function Summary() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bookList")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="summarContent">
      {loading
        ? ""
        : books.map((book) => (
            <List
              key={book.number}
              bookName={book.bookName}
              duration={book.duration}
              bookImg={book.bookImg}
              bookImgLink={book.bookImgLink}
            />
          ))}
    </div>
  );
}

export default Summary;
