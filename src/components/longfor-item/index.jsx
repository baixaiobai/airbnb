import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongWrapper } from './style'

const LongFor = memo((props) => {
  const { item } = props


  return (
    <LongWrapper>
      <div className='img-box'>
        <img src={item.picture_url} alt="" />
      </div>
      <div className='text'>
        <div className='top'>{item.city}</div>
        <div>均价{item.price}</div>
      </div>
    </LongWrapper>
  )
})

LongFor.propTypes = {
  item: PropTypes.object
}

export default LongFor