import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { MoreWrapper } from './style'

const More = memo((props) => {
  const { infoData } = props

  /** 事件处理的逻辑 */
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <MoreWrapper>
      {
        infoData? <span onClick={moreClickHandle} className='item active'>显示更多{infoData}房源<IconMoreArrow/></span>: <span onClick={moreClickHandle} className='more item'>显示全部<IconMoreArrow/></span>
      }
    </MoreWrapper>
  )
})

More.propTypes = {
  infoData: PropTypes.string
}

export default More