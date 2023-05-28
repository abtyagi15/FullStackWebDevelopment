import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blog = () => {

  const {loading,posts} = useContext(AppContext);
  

  return (
    <div className='flex flex-col w-11/12 max-w-[670px] py-8 gap-y-10 mt-[66px] mb-[70px] h-screen items-center justify-center'>
      { loading ? (<Spinner />) : (
        posts.length === 0 ? 
        (<div>
            <p>No post found</p>
          </div>) : 
          (posts.map((posts) => (
            <div key={posts.id}>
              <p className='font-bold text-l'>{posts.title}</p>
              <p className='text-sm mt-1'>By <span className='italic'>{posts.author}</span> on <span className='underline font-bold '>{posts.category}</span></p>
              <p className='text-sm'>Posted on <span>{posts.date}</span></p>
              <p className='text-md mt-[10px]'>{posts.content}</p>
              <div className='flex gap-4'>
                {posts.tags.map((tag, index) => (
                  <span key={index} className="text-blue-500 font-bold text-xs underline gap-3 ">{`#${tag}`}</span>
                ))}
              </div>
            </div>
          )))
      )}
    </div>
  )
}

export default Blog