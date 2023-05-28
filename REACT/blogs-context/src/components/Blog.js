import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blog = () => {

  const {loading,posts} = useContext(AppContext);
  

  return (
    <div>
      { loading ? (<Spinner />) : (
        posts.length === 0 ? 
        (<div>
            <p>No post found</p>
          </div>) : 
          (posts.map((posts) => (
            <div key={posts.id}>
              <p className='font-bold text-[#a52a2a]'>{posts.title}</p>
              <p>By <span>{posts.author}</span> on <span>{posts.category}</span></p>
              <p>Posted on <span>{posts.date}</span></p>
              <p>{posts.content}</p>
              <div>
                {posts.tags.map((tag, index) => (
                  <span key={index}>{`#${tag}`}</span>
                ))}
              </div>
            </div>
          )))
      )}
    </div>
  )
}

export default Blog