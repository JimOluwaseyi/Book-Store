import "../Css/Button.css"
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/book/bookSlice";
import PropTypes from 'prop-types';
const DeleteButton =({id})=>{
  const dispatch = useDispatch()

  const handleDelete =()=>{

    dispatch(deleteBook(id))
  }
  
    return ( <ul className="editRemove">
    <li>
      <button>Comment</button>
    </li>
    <li className="removeBtn"><button onClick={handleDelete}>Remove</button></li>
    <li>
      <button>Edit</button>
    </li>
  </ul>

    )
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteButton;