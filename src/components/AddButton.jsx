import { useDispatch } from "react-redux";
import { addBook } from "../redux/book/bookSlice";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types"

const AddButton = ({ title, author}) => {
  const item_id = uuidv4();
  const dispatch = useDispatch();
  const handleAddBook = () => {
    if (title && author) {
      dispatch(addBook({ title, author, item_id , category: "Fiction"}));
      console.log(addBook, item_id);
    }
  };
  return <button onClick={handleAddBook}>ADD BOOk</button>;
};


AddButton.propTypes={
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,

}
export default AddButton;
