import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-rooms'
import { HomevWrapper } from './style'
import More from '@/components/More'

const HomeV1 = memo((props) => {
  const { infoData } = props


  return (
    <HomevWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRoom roomList={infoData.list} width="25%"/>
      <More />
    </HomevWrapper>
  )
})

HomeV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeV1