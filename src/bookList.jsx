import React from 'react'
import * as Sc from './styledComponents'
import { Card } from '@imanage/react-ice'

import { Link } from 'react-router-dom'


const BookList = ({ setCurrentBook, books}) => {
  return (
    books.map((d, i) => {
      return (
        <Sc.BookWrapper key={i}>
          <Card.Heading>{d.title}</Card.Heading>
          <Sc.BookMetadata>
            <Sc.Author>Author: {d.author}</Sc.Author>
            <Sc.PublishDate>Published: {d.publishDate}</Sc.PublishDate>
            <Link to={`/review/${d.isbn}`}>
              <Sc.ReviewCount>Reviews: {d.reviews.length}</Sc.ReviewCount>
            </Link>
          </Sc.BookMetadata>
        </Sc.BookWrapper>
      )
    })
  )
}

export default BookList