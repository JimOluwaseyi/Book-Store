import { useSelector } from "react-redux";
import Books from "./Books";
import Form from "./Form";


const DisplayBooks = () => {
  const books = useSelector((state) => state.books.books);
  console.log(books);

  return (
    <>
      {books.map((book) => (
        <Books key={book.item_id} book={book}/>
      ))}
      <Form />
    </>
  );
};
export default DisplayBooks;
