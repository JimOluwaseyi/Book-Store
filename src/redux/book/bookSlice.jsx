import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  status: "idle",
};

//   Function for adding the book to the server

const appId = "Q6jTtNnXCj37PkCXFZZe";
const apiBase =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi";

export const addBookToServer = createAsyncThunk(
  "book/addBookToServer",
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(`${apiBase}/apps/${appId}/books`, book);
      console.log(response, "response");
      const data = response.data;
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Endpoint is invalid");
    }
  }
);
//   Function for getting the book from the server

export const getBookFromServer = createAsyncThunk(
  "books/getBookFromServer",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${apiBase}/apps/${appId}/books`);

      console.log(response, "response get");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Endpoint is invalid");
    }
  }
);

//  Function for deleting the book by id from the server

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (itemId) => {
    await axios.delete(
      `${apiBase}/apps/${appId}/books/${itemId}`
    );
    return itemId;
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBookToServer.fulfilled, (state, action) => {
        state.status = "successful";
        console.log(action, "Action");
        state.books = state.books.concat(action.meta.arg);
      })
      .addCase(addBookToServer.rejected, (state) => {
        state.status = "Failed";
      })
      .addCase(addBookToServer.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(getBookFromServer.fulfilled, (state, action) => {
        state.status = "successful";
        const arrBooks = Object.keys(action.payload).map((key) => {
          const books = action.payload[key][0];
          return { ...books, item_id: key };
        });
        console.log(arrBooks, "Book from payload");

        state.books = arrBooks;
      })
      .addCase(getBookFromServer.rejected, (state) => {
        state.status = "Failed";
      })
      .addCase(getBookFromServer.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = "successful";
        const removeBook = (state.books = state.books.filter(
          (book) => book.item_id !== action.payload
        ));
        console.log(removeBook, "Remove the books");
      });
  },
});

export default bookSlice.reducer;
