import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useCallback, useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { ScrollWrapper } from './style'

const ScrollView = memo((props) => {
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [itemCount, setItem] = useState(0)
  const scrollListRef = useRef()

  // 优化点：对于保存值不变的变量，可以使用useRef，这样不需要每次重新执行都加载一遍
  const scrollContentRef = useRef()
  let controlClickHandle
  useEffect(() => {
    const scrollWidth = scrollListRef.current.scrollWidth
    const clientWidth = scrollListRef.current.clientWidth
    const totalDistance = scrollWidth - clientWidth
    setShowRight(totalDistance > 0)
    scrollContentRef.current = totalDistance

    /**此处有bug
     * bug现象：如果不加下面这一句，会造成点击切换城市之后相当于props.children改变
     * 了，这样就会造成页面重置，导致下一个按钮继续显示，通过下面该方式默认执行一边就可以解决该问题了
     */
    controlClickHandle(null, true)
  }, [props.children, controlClickHandle])

  // 事件处理函数
  controlClickHandle = useCallback((isRight, useHistoryIndex) => {
    let newIndex = itemCount
    if(!useHistoryIndex){
      newIndex = isRight? itemCount + 1: itemCount - 1
    }
    const newEl = scrollListRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollListRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setShowRight(scrollContentRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
    setItem(newIndex)
  }, [itemCount])


  return (
    <ScrollWrapper>
      {showLeft && <div className='arrow left' onClick={e => controlClickHandle(false)}><IconArrowLeft /></div>}
      {showRight && <div className='arrow right' onClick={e => controlClickHandle(true)}><IconArrowRight /></div>}


      {/* 该处包裹一层是为了设置样式overflow：hidden（很巧妙） */}
      <div className='item-box'>
        <div className='item-list' ref={scrollListRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

export default ScrollView