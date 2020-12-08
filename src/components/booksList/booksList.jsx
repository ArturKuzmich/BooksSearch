import React from 'react'
import {connect} from 'react-redux'
import Book from "../book/book";
import isEmpty from 'lodash.isempty'
import './style.css'
import {Spinner} from "react-bootstrap";

const renderBooks = (data) => {
    if (isEmpty(data)) {
        return null;
    }
    let {items: books} = data

    return (
        <div className='render_list'>
            {books.map(book => (
                <Book book={book} key={book.id} />
            ))}
        </div>
    )
}
const BooksList = ({data, isFetch, query, error}) => {
    let render = '';
    if (isFetch) {
        render = <Spinner animation='border' variant='primary' ><span className='sr-only'>...Loading</span></Spinner>
    } else if (error) {
        render = 'Something went wrong ? Please reload page or write Name Books in Input'
    } else {

        render = renderBooks(data, query);
    }

    return (
        <div className='books_list'>
            {render}
        </div>
    )
}
const mapStateToProps = (state) => {
    let {data, isFetch, query, error} = state.books
    return {
        data,
        isFetch, query, error
    }
}
export default connect(mapStateToProps, null)(BooksList)