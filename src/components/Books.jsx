import DeleteButton from "./DeleteButton";
import "../Css/Books.css";
import PropTypes from "prop-types";

const Books = ({ book }) => {
  console.log(book);
  return (
    <>
      <section className="bookBg">
        <div className="bookContainer">
          <p>{book.category}</p>
          <h1>{book.title}</h1>
          <small>{book.author}</small>
          <DeleteButton id = { book.item_id} />
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
    </>
  );
};
Books.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Books;