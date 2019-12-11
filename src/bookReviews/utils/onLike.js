import { map } from 'ramda'
import { like } from '../../services'

export const onLike = (currentBook, reviewId, setCurrentBook) => {
  like(reviewId)
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