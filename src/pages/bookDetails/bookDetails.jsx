import React, {useEffect, useState} from 'react'
import axios from 'axios'

const BookDetails = ({match: {params}}) => {
    const [bookDetails, setBookDetails] = useState({})
    const [isFetch, setIsFetch] = useState(false)


    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${params.ID}`)
            .then(response => {
                console.log('res data',response.data)
                setBookDetails(response.data)
            })
            .catch(() => {
                setBookDetails({})
            }).finally(() => {
                setIsFetch(false)
        })
    },[params.ID])
    return(
        <div>

        </div>
    )
}

export default BookDetails