import React from 'react'
import * as Sc from './styledComponents'
import { Card, Button } from '@imanage/react-ice'


const BookList = ({ setCurrentBook, books}) => {
  return (
    books.map((d, i) => {
      return (
        <Sc.BookWrapper key={i}>
          <Card.Heading>{d.title}</Card.Heading>
          <Sc.BookMetadata>
            <Sc.Author>Author: {d.author}</Sc.Author>
            <Sc.PublishDate>Published: {d.publishDate}</Sc.PublishDate>
            <Sc.ReviewCount>Reviews: {d.reviews.length}</Sc.ReviewCount>

            <Sc.StyledLink to={`/review/${d.isbn}`}>
              <Button variant='tertiary'>Read all Reviews</Button>
            </Sc.StyledLink>
          </Sc.BookMetadata>
        </Sc.BookWrapper>
      )
    })
  )
}

export default BookList