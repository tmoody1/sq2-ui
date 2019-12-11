import { map } from 'ramda'
import { doComment } from '../../services'

export const appendComment = (currentBook, name, comment, reviewId) => {
  doComment(reviewId, {name: name, comment: comment})
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