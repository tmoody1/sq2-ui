import { map } from 'ramda'
import useAxios from 'axios-hooks'

export const onLike = (currentBook, reviewId, setCurrentBook) => {
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