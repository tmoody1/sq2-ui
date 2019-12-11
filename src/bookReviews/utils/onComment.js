import { map } from 'ramda'
import useAxios from 'axios-hooks'

export const appendComment = (currentBook, name, comment, reviewId) => {
  const reviewsPlusComment = map(review => {
    if (review.id === reviewId) {
      return {
        ...review,
        comments: [
          ...review.comments,
          {
            author: name,
            text: comment
          }
        ]
      }
    } else return review
  })(currentBook.reviews)

  return {
    ...currentBook,
    reviews: reviewsPlusComment
  }
}