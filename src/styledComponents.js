import styled from 'styled-components'
import { COLORS } from './colors'
import { Card } from '@imanage/react-ice'

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${COLORS.LINK};
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  width: 100%;
`


export const BookWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 12px;
`

export const BookTitle = styled.h2`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  font-size: 20px;
`

export const BookMetadata = styled(Card.Content)`
  display: flex;
  width: 50%;
  justify-content: space-between;
`

export const Author = styled.div``
export const PublishDate = styled.div``
export const ReviewCount = styled.div`
  cursor: pointer;
`