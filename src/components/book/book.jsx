import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import './style.css'
import {Link} from "react-router-dom";
const Book = ({book}) => {
    let {
        title,
        imageLinks,
        authors
    } = book.volumeInfo
    return(
        <div className='book_visible'>
            <Link to={`/book/${book.id}`}>
            <Card>
                {imageLinks
                    ?<Card.Img variant='top' src={imageLinks.thumbnail}></Card.Img>
                    : null
                }
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{authors}</Card.Subtitle>
                </Card.Body>
            </Card>
            </Link>
        </div>
    )
}
export default Book