import React, { memo } from 'react'
import Center from './c-cpns/center'
import Left from './c-cpns/left'
import Right from './c-cpns/right'
import { HeaderBox } from './style'

const Header = memo(() => {
  return (
    <HeaderBox>
      <Left />
      <Center />
      <Right />
    </HeaderBox>
  )
})

export default Header