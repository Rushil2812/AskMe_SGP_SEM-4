import React, { useEffect, useState } from 'react'
import Askbox from './Askbox'
import './Css/feed.css'
import axios from 'axios'
import Post from './Post'

function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios.get('/api/questions').then((res) => {
      console.log(res.data.reverse())
      setPosts(res.data)
    }).catch((e) => {
      console.log(e)
    })
  },[])
  return (
    <div className='feed'>
        <Askbox />
        {
          posts.map((post,index) => (<Post key = {index} post = {post} />))
        }
        
    </div>
  )
}

export default Feed
