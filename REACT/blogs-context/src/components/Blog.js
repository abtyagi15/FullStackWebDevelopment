import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

const Blog = () => {

  const {loading,posts} = useContext(AppContext);

  return (
    <div>
      { loading ? (<Spinner />) : (
        posts.length === 0 ? 
        (<div>
            <p>No post found</p>
          </div>) : 
          (posts.map(() => (<Card />)))
      )}
    </div>
  )
}

export default Blog