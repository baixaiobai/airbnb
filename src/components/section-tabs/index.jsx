
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'

const SectionTabs = memo((props) => {
  const [index1, setIndex] = useState(0)
  const { tabList, tabClick } = props
  function itemClickHandle(item, index) {
    tabClick(item, index)
    setIndex(index)
  }

  return (
    <SectionWrapper>
      <ScrollView>
        {
          tabList.map((item, index) => {
            return (
              <div 
                className={classNames('item', { active: index1 === index ? "active": ""})}
                key={item}
                onClick={e => itemClickHandle(item, index)}
              >{item}</div>
            )
          })
        }
      </ScrollView>
    </SectionWrapper>
  )
})

SectionTabs.propTypes = {
  tabList: PropTypes.array,
  // 函数的类型验证要写成func
  tabClick: PropTypes.func
}

export default SectionTabs