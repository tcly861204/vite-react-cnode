import React, { memo, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TopicsList from '@/components/Topics/TopicsList'
import GoBack from '@/components/GoBack/index'
const MyList = memo(() => {
  const [topics, setTopics] = useState([])
  const location = useLocation()
  console.log(location)
  useEffect(() => {
    const state = location.state
    if (state && state.data) {
      sessionStorage.setItem('MYLIST', JSON.stringify(state.data))
      setTopics(state.data)
    } else {
      setTopics(JSON.parse(sessionStorage.getItem('MYLIST')))
    }
  }, [location.state])
  return (
    <>
      <GoBack />
      <TopicsList
        topics={topics}
        style={{
          padding: '45px 0 0',
        }}
      />
    </>
  )
})

export default MyList
