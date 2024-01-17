import "../Css/Form.css";
const Form = () => {
  return (
    <>
      <hr />
      <form action="">
        <h2>ADD NEW BOOK</h2>
        <div className="inputDiv">
          <input type="text" placeholder="Book title" />
          <input type="text" placeholder="Author" />
          <button>ADD BOOK</button>
        </div>
      </form>
    </>
  );
};
export default Form;
