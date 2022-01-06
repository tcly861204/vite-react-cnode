/*
  @Author: tcly861204
  @Email:  356671808@qq.com
  @Date:   2021/12/27 下午5:39:34
  @Last Modified by:   tcly861204
  @Last Modified time: 2022/1/6 上午12:12:03
  @Github: https://tcly861204.github.io
*/
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
