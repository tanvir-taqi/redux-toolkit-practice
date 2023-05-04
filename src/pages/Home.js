import React from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { bookSelector, deletebook } from '../features/books/bookSlice';
import './Home.css';


const Home = () => {
    const {books} = useSelector(bookSelector)
    const dispatch = useDispatch()
   
    return (
        <div>
            <Navbar></Navbar>
            <div className='bookContainer'>
            <h1>Home</h1>

            {
                books.map(book => <div key={book.id} className='singleBook'>
                   <h4>{book.author }</h4>
                   <h4>{book.bookname }</h4>
                   <button onClick={()=>dispatch(deletebook(book.id))}>Delete</button>
                </div>)
            }
            </div>
        </div>
    );
};

export default Home;