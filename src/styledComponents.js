import styled from 'styled-components'

const COLORS = {
  BASE: '#FFEAD0', // ALMOND
  TEXT: '#113537', // SLATE
  SHADOW: '#37505C', // LIGHT SLATE
  LINK: '#F76F8E', // PINK
  BACKGROUND: '#96616B', //DARK PINK
}

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.BASE};
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${COLORS.SHADOW};
  padding: 12px;
`

export const HeaderText = styled.h1`
  color: white;
  font-size: 18px;
  margin-left: 12px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  width: 100%;
`


export const BookWrapper = styled.div`
  width: 70%;
  height: 200px;
  border: 1px solid ${COLORS.TEXT};
  box-shadow: 0 0 4px ${COLORS.SHADOW};
  background-color: ${COLORS.BACKGROUND};
  border-radius: 4px;
  margin: 6px;
`