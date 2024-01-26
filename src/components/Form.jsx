import { useState } from "react";
import "../Css/Form.css";
import AddButton from "./AddButton";
const Form = () => {
  const [title, setTitleValue] = useState("");
  const [author, setAuthorValue] = useState("");

  const handleAuthor = ({ target }) => {
    setAuthorValue(target.value);
  };

  
  const handleTitle = ({ target }) => {
    setTitleValue(target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  setTitleValue("");
  setAuthorValue("");


  };

  return (
    <>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <h2>ADD NEW BOOK</h2>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={handleTitle}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={handleAuthor}
          />
          <AddButton title={title} author={author} /> 
        </div>
      </form>
    </>
  );
};
export default Form;
