import styled from 'styled-components'
import { Text } from '@imanage/react-ice'
import { COLORS } from '@imanage/react-ice/constants'

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: ${COLORS.BRANDING.ROYAL};
  border-bottom: 1px solid grey;
`

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 30px;
  margin-left: 12px;
`

export const HeaderText = styled(Text.Heading1)`
  margin-left: 12px;
`