import styled from 'styled-components'
import { Flex, Card, Button, Input } from '@imanage/react-ice'

export const ReviewContainer = styled.div`
  margin-bottom: 50px;
  width: 70%;
`

export const ReviewCard = styled(Card)`
  width: 100%;
`

export const CardHeading = styled(Card.Heading)`
  display: flex;
  align-items: center;
`

export const ReviewCardHeaderText = styled.div`
  display: flex;
`

export const ReviewText = styled.div`
  margin: 12px 0px;
`

export const LikeButton = styled(Flex)`
  width: 100%;
  justify-content: flex-end;
`

export const CommentCard = styled(Card)`
  margin-left: 50px;
  width: calc(100% - 50px);
  margin-top: 10px;
`

export const AddComment = styled.div`
  display: flex;
  justify-content: flex-end;
  width: calc(100% - 50px);
  margin-left: 50px;
  margin-top: 20px;
`

export const BookTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`

export const CommentInputContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
  padding: 12px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #FAFAFA;
`

export const NameInput = styled(Input)`
`

export const CommentTextarea = styled(Input.Textarea)`
  margin-top: 12px;
`

export const SaveButton = styled(Button)`
`

export const Likes = styled(Flex)`
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: center;
`