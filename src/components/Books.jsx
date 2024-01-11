import { useState } from "react";
import DeleteButton from "./DeleteButton";
import Form from "./Form";
import "../Css/Books.css";
const Books = () => {
  const [books, setBooks] = useState([
    {
      bookName: "The Hunger Games",
      author: "Jim Oluwaseyi",
    },
  ]);
  return (
    <>
      <section className="bookBg">
        <div className="bookContainer">
          <p>Action</p>
          {books.map((book) => (
            <div>
              <h1>{book.bookName}</h1>
              <small>{book.author}</small>
            </div>
          ))}
          <DeleteButton />
        </div>
        <div className="progressChapter">
          <div className="bookMonitor">
            <button id="radius"></button>
            <div>
              <h2>64%</h2>
              <small>Completed</small>
            </div>
          </div>
          <div className="border"></div>

          <div className="chapters">
            <h3>CURRENT CHAPTER</h3>
            <p>Chapter 17</p>
            <button>UPDATE PROGRESS</button>
          </div>
        </div>
      </section>
      <Form />
    </>
  );
};

export default Books;
