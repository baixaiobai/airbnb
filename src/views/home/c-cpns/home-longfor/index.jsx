import ScrollView from '@/base-ui/scroll-view'
import LongFor from '@/components/longfor-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomevWrapper } from './style'

const HomeLongfor = memo((props) => {
  const { infoData } = props

  return (
    <HomevWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <ScrollView>
        {
          infoData.list.map(item => {
            return <LongFor item={item} key={item.city}/>
          })
        }
      </ScrollView>
    </HomevWrapper>
  )
})

HomeLongfor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongfor