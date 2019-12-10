
import styled from 'styled-components'
import { Card, Flex } from '@imanage/react-ice'
import { Link } from 'react-router-dom'


export const BookWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 12px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`

export const BookTitle = styled.h2`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  font-size: 20px;
`

export const BookMetadata = styled(Card.Content)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Author = styled.div`
  margin: 0px 24px 0px 0px;
`

export const PublishDate = styled.div`
  margin: 0px 24px;
`

export const ReviewCount = styled(Flex)`
  flex: 1 1 auto;
  margin: 0px 24px;
  cursor: pointer;
`
