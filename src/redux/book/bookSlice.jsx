import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  book: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook:(state,action)=>{
state.book.push(action.payload)
    }, 
    removeBook: (state , action)=>{
state.book= state.book.filter((item,idx)=> idx !== action.payload)
    }
  },
});


export const  {addBook, removeBook} = bookSlice.actions;
export default bookSlice.reducer;

