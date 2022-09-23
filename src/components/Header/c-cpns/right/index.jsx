import IconMenu from '@/assets/svg/icon_menu'
import IconMy from '@/assets/svg/icon_my'
import IconQiu from '@/assets/svg/icon_qiu'
import React, { memo } from 'react'
import { RightBox } from './style'

const Right = memo(() => {
  return (
    <RightBox>
      <div className='left-box'>
        <span className='item'>登录</span>
        <span className='item'>注册</span>
        <span className='item'><IconQiu /></span>
      </div>
      <div className='right-box'>
        <span className='item'><IconMenu /></span>
        <IconMy />
      </div>
    </RightBox>
  )
})

export default Right