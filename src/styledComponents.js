import styled from 'styled-components'
import { Text } from '@imanage/react-ice'
import { COLORS } from '@imanage/react-ice/constants'

export const AppWrapper = styled.div`
  display: flex;
  background-color: ${COLORS.BRANDING.SKY};
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
  background-color: ${COLORS.BRANDING.AQUA};
`

export const HeaderText = styled(Text.Heading1)`
  margin-left: 12px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  width: 100%;
`