import styled from 'styled-components'
import { COLORS } from '../colors'

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100px;
  border: 1px solid ${COLORS.TEXT};
  box-shadow: 0 0 4px ${COLORS.SHADOW};
  background-color: ${COLORS.BACKGROUND};
  border-radius: 4px;
  margin: 6px;
  padding: 12px;
  box-sizing: border-box;
`