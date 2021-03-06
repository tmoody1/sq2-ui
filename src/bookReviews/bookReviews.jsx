import React, { useState, Fragment } from 'react'
import * as Sc from './styledComponents'
import { Card, Button, IconMono, Flex, Text } from '@imanage/react-ice'
import { useParams } from 'react-router-dom'
import { path } from 'ramda'

import { onLike } from './utils/onLike'
import { appendComment } from './utils/onComment'

const BookReviews = ({ books, likeReview }) => {
  const { isbn } = useParams()
  const [currentBook, setCurrentBook] = useState(books.filter(book => book.isbn === isbn)[0])
  const [addComment, setAddComment] = useState(false)

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const onComment = (reviewId) => {
    const updatedBook = appendComment(currentBook, name, comment, reviewId)
    setCurrentBook(updatedBook)
    setName('')
    setComment('')
    setAddComment(false)
  }

  const cancelComment = () => {
    setName('')
    setComment('')
    setAddComment(false)
  }

  return (
    <Fragment>
      <Sc.BookTitle>
        <Text.Heading1>{currentBook.title}</Text.Heading1>
      </Sc.BookTitle>
      {currentBook.reviews.map((review, i) => {
      const comments = path(['comments'])(review) || null
      return (
        <Sc.ReviewContainer key={i}>
          <Sc.ReviewCard>
            <Sc.CardHeading>
              <Sc.ReviewCardHeaderText>{review.author}</Sc.ReviewCardHeaderText>
              <Sc.Likes>
                <Button onClick={() => onLike(currentBook, review.id, setCurrentBook)} icon={IconMono.StarFilled}>{review.likes || 0}</Button>
              </Sc.Likes>
            </Sc.CardHeading>
            <Card.Content>
              <Sc.ReviewText>{review.text}</Sc.ReviewText>
            </Card.Content>
          </Sc.ReviewCard>
          {comments && comments.map((comment, i) => {
            return (
              <Sc.CommentCard key={i}>
                <Card.Heading>{comment.author}</Card.Heading>
                <Card.Content>{comment.text}</Card.Content>
              </Sc.CommentCard>
            )
          })}
          {addComment === review.id
            ? (
              <Sc.CommentInputContainer>
                <Sc.NameInput onChange={e => setName(e.target.value)} value={name} label='Name' required />
                <Sc.CommentTextarea onChange={e => setComment(e.target.value)} value={comment} label='Comment' />
                <Flex w='100%' mt='20px' align='center' justify='flex-end'>
                  <Button variant='tertiary' onClick={cancelComment}>Cancel</Button>
                  <Sc.SaveButton onClick={() => onComment(review.id)}>
                    Save
                  </Sc.SaveButton>
                </Flex>
              </Sc.CommentInputContainer>
            )
            : (
              <Sc.AddComment>
                <Button onClick={() => setAddComment(review.id)} icon={IconMono.Plus}>Add Comment</Button>
              </Sc.AddComment>
            )
          } 

        </Sc.ReviewContainer>
      )
    })}
    </Fragment>
  )
}

export default BookReviews
