import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionHeaderBox } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props

  return (
    <SectionHeaderBox>
      <h2>{title}</h2>
      {/* 动态判断是否有subtitle需要展示的 */}
      { subtitle && <div className='bottom'>{subtitle}</div> }
    </SectionHeaderBox>
  )
})

// 为了进行类型验证
SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader