import { map } from 'ramda'

export const appendComment = (currentBook, name, comment, reviewId) => {
  // service request
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