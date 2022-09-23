import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from "@/router"
import Header from './components/Header'

const App = memo(() => {
  return (
    <div>
      <Header></Header>
      {/* 处理跳转时数据还没有下载好的情况 */}
      <Suspense fallback="loading">
        <div>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <div>footer</div>
    </div>
  )
})

export default App