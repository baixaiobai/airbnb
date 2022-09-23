import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'

import { HomevWrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionTabs from '@/components/section-tabs'
import SectionRoom from '@/components/section-rooms'
import More from '@/components/More'




const HomeV2 = memo((props) => {
  const { infoData } = props
  // 获取进来的第一个城市，前提需要在父组件给该组件传参的时候需要在父组件中
  // 就做判断，因为useState值在渲染的时候只渲染一次，如果刚进来没有值的话，
  // 那么item的值就确定了，即便有数据之后重新加载那么useState中的数据也是
  // 不会重新修改，除非使用setItem方式
  const firstItem = infoData.dest_address[0].name
  const [item, setItem] = useState(firstItem)
  const tabList = infoData.dest_address?.map(item => item.name)
  // 优化点
  const getItem = useCallback(function(item, index) {
    setItem(item)
  }, [])

  return (
    <HomevWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabList={tabList} tabClick={getItem}/>
      <SectionRoom width="33.333%" roomList={infoData.dest_list?.[item]}/>
      <More infoData={item}/>
    </HomevWrapper>
  )
})

HomeV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeV2