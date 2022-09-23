import IconSearch from '@/assets/svg/icon_search'
import React, { memo } from 'react'
import { CenterBox } from './style'

const Center = memo(() => {
  return (
    <CenterBox>
      <div className='text'>搜索房源和体验</div>
      <div className='search'><IconSearch /></div>
    </CenterBox>
  )
})

export default Center