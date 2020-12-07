import React from 'react'
import './style.css'
import {getBooks} from "../../actions/actions";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import debounce from 'lodash.debounce'
import {Button, FormControl, InputGroup} from "react-bootstrap";

import './style.css'

const InputSearch = ({query, getBooks}) => {
        const handleSubmit = (e) => {
            e.preventDefault()
        }
    const getDebounceBooks = debounce(query => {
        getBooks(query);
    }, 700);

    const onInputChange = e => {
        getDebounceBooks(e.target.value)
    }

    return(
        <div className='search_input'>
            <InputGroup className="mb-3" onSubmit={handleSubmit}>
                <FormControl placeholder="Enter book name" value={query} onChange={onInputChange}/>
                <InputGroup.Append>
                    <Button type="submit" variant="outline-primary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        query: state.books.query
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getBooks
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(InputSearch)