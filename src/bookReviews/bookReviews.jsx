import React from 'react'
import * as Sc from './styledComponents'

const BookReviews = ({ books, setCurrentBook, currentBookISBN }) => {
  const currentBook = books.filter(book => book.isbn === currentBookISBN)[0]
  const reviews = currentBook.reviews
  return (
    reviews.map(review => {
      return (
        <Sc.ReviewContainer>
          {review.text}
        </Sc.ReviewContainer>
      )
    })
  )
}

export default BookReviews
