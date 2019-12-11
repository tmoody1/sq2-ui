import React from 'react'
import { IconMono, Button } from '@imanage/react-ice'
import * as Sc from './styledComponents'

import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  return (
    <Sc.Header>
      <Sc.BackButton>
        <Button onClick={() => history.push('/')} iconOnly icon={IconMono.ChevronLeft} />
      </Sc.BackButton>
      <Sc.HeaderText>SQ2 Book Club</Sc.HeaderText>
    </Sc.Header>
  )
}

export default Header
