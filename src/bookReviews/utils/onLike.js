import { map } from 'ramda'

export const onLike = (currentBook, reviewId, setCurrentBook) => {
  // service request
  const updatedLikeCount = map(review => {
    if ( review.id === reviewId) {
      return {
        ...review,
        likes: review.likes + 1
      }
    } else return review
  }
  )(currentBook.reviews)

  setCurrentBook({
    ...currentBook,
    reviews: updatedLikeCount
  })
}