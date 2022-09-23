import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import { HomeBox } from './style'
import { isEmpty } from '@/utils'
import Banner from './c-cpns/banner'
import HomeV1 from './c-cpns/home-section-v1'
import HomeV2 from './c-cpns/home-section-v2'
import HomeV3 from './c-cpns/home-section-v3'
import HomeLongfor from './c-cpns/home-longfor'



const Home = memo(() => {
  /** 从redux中获取数据 */
  const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longforInfo, plusInfo }  = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])


  return (
    <HomeBox>
      <Banner />
      <div className='home-box'>
        { isEmpty(discountInfo) && <HomeV2 infoData={discountInfo}/> }
        { isEmpty(recommendInfo) && <HomeV2 infoData={recommendInfo}/> }
        { isEmpty(goodPriceInfo) && <HomeV1 infoData={goodPriceInfo}/>}
        { isEmpty(highScoreInfo) && <HomeV1 infoData={highScoreInfo}/>}
        { isEmpty(longforInfo) && <HomeLongfor infoData={longforInfo}/>}
        { isEmpty(plusInfo) && <HomeV3 infoData={plusInfo}/>}
      </div>
    </HomeBox>
  )
})

export default Home