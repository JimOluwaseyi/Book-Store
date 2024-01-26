import { useDispatch, useSelector } from "react-redux";
import { getBookFromServer }  from "../redux/book/bookSlice";
import Books from "./Books";
import Form from "./Form";
import { useEffect } from "react";


const DisplayBooks = () => {
  const {books, status} = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if(status === "idle"){
      dispatch(getBookFromServer());

    }
  },[status, dispatch]);

  return (
    <>
      {books.map((book) => (
        <Books key={book.item_id} book= {book}/>
      ))}
      <Form />
    </>
  );
};
export default DisplayBooks;
