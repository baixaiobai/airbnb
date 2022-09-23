import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { LeftBox } from './style'

const Left = memo(() => {
  return (
    <LeftBox>
      <IconLogo />
    </LeftBox>
  )
})

export default Left