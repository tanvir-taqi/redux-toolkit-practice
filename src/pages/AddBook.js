import React from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addbook, bookSelector } from '../features/books/bookSlice';

const AddBook = () => {
    const {books} = useSelector(bookSelector)
    const dispatch = useDispatch()
    const handleSubmit = event =>{
        event.preventDefault();
        const bookName = event.target.book.value
        const author = event.target.author.value
        const newBook ={ id: books.length + 1, bookname:bookName, author }
        dispatch(addbook(newBook))
        event.target.reset()
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1> Add book </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="book">book</label>
                    <input type="text" name='book' />
                </div>
                <div className="form-group">
                    <label htmlFor="author">author</label>
                    <input type="text" name='author' />
                </div>
                <div className="form-group">
                    
                    <input type="submit" value='Add Book' />
                </div>
            </form>
        </div>
    );
};

export default AddBook;