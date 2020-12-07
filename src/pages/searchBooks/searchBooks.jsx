import React from 'react'
import InputSearch from "../../components/inputSearch.jsx/inputSearch";
import BooksList from "../../components/booksList/booksList";
import './style.css'

const SearchBooks = ( ) => {
    return(
        <div className='books_list'>
            <h1>Search Books</h1>
            <InputSearch />
            <BooksList />
        </div>
    )
}

export default SearchBooks