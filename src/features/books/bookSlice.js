import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    books: [
        { id: 1, bookname: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { id: 2, bookname: '1984', author: 'George Orwell' },
        { id: 3, bookname: 'Brave New World', author: 'Aldous Huxley' },
        { id: 4, bookname: 'The Catcher in the Rye', author: 'J.D. Salinger' },
        { id: 5, bookname: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 6, bookname: 'Animal Farm', author: 'George Orwell' }
    ]
}

export const bookSlice = createSlice({
    name: 'bookslice',
    initialState,

    reducers:{
        addbook:(state,action) =>{
            state.books.push(action.payload)
        },
        deletebook:(state,action) =>{
            state.books = state.books.filter(book => book.id !== action.payload)
        }
    }
})

export const {addbook,deletebook} = bookSlice.actions

export const bookSelector = state => state.books

export default bookSlice.reducer