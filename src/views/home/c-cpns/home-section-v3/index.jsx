import ScrollView from '@/base-ui/scroll-view'
import More from '@/components/More'
import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomevWrapper } from './style'

const HomeV3 = memo((props) => {
  const { infoData } = props

  return (
    <HomevWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className="list-box">
        <ScrollView>
          {
            infoData.list.map((item, index) => {
              return <RoomItem item={item} key={index} width="20%"/>
            })
          }
        </ScrollView>
      </div>
      <More infoData={"plus"}/>
    </HomevWrapper>
  )
})

HomeV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeV3