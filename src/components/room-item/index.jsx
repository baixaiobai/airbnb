import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';

import { ItemWrapper } from './style' 
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';



const RoomItem = memo((props) => {
  const { item, width } = props
  const [selectIndex, setSelectIndex] = useState(0)
  const carouselRef = useRef()

  // 事件处理函数
  function controlClickHandle(isNext, event) {
    isNext ? carouselRef.current.next(): carouselRef.current.prev()

    // 最新的索引
    let newIndex = isNext ? selectIndex + 1: selectIndex - 1
    const length = item.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }



  // 子元素
  const pictureElement = (
    <div className='item-img'>
      <img src={item.picture_url} alt="" />
    </div>
  )
  const sliderElement = (
    <div className='slider'>
      {/* 左右控制器 */}
      <div className='mask-box'>
        <div className='left btn' onClick={e => controlClickHandle(false, e)}>
          <IconArrowLeft width="30" height="30"/>
        </div>
        <div className='right btn' onClick={e => controlClickHandle(true, e)}>
          <IconArrowRight width="30" height="30"/>
        </div>
      </div>
      {/* 指示点 */}
      <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            item?.picture_urls?.map((item, index) => {
              return (
                <div className="indicItem" key={item}>
                  <span className={classNames('dot', {active: selectIndex === index})}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      {/* 轮播图 */}
      <Carousel dots={false} ref={carouselRef}>
        {
          item?.picture_urls?.map(item => {
            return (
              <div className='item-img' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
  

  return (
    <ItemWrapper width={width}>
      <div className='item-box'>
        {item.picture_urls? sliderElement: pictureElement}
        <div className='top'>{item.verify_info.messages.join("·")}</div>
        <div className='text'>{item.name}</div>
        <div className='price'>￥{item.price}/晚</div>
        <div className='bottom'>
          {/* 使用Material UI,只需要下载之后，使用的时候引入对应的组件就可以了 */}
          <Rating 
            defaultValue={item.star_rating ?? 5} 
            precision={0.1} 
            readOnly
            sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
          />
          <span className='count'>{item.reviews_count}</span>
          { item.bottom_info && <span className='count'>·{item.bottom_info?.content}</span>}
        </div>
      </div>
    </ItemWrapper>
  )
})



RoomItem.propTypes = {
  item: PropTypes.object
}

export default RoomItem