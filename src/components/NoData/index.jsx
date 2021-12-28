import React, { memo } from 'react'
import './index.scss'
import nodataImg from '@/assets/nodata.jpg'
const NoData = memo(() => {
  return (
    <section className="cn-nodata">
      <div className="cn-nodata__img">
        <img src={nodataImg} />
      </div>
      <p className="cn-nodata__text">暂无数据</p>
    </section>
  )
})
export default NoData
