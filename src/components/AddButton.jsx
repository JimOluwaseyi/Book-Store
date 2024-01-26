import { useDispatch} from "react-redux";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types"
import { addBookToServer} from "../redux/book/bookSlice";

const AddButton = ({ title, author}) => {
  const item_id = uuidv4();
  const dispatch = useDispatch();
  const handleAddBook = () => {
    if (title && author){
      dispatch(addBookToServer({ title, author, item_id , category: "Fiction"}));

    }
  };
  return <button onClick={handleAddBook}>ADD BOOk</button>;
};


AddButton.propTypes={
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,

}
export default AddButton;
