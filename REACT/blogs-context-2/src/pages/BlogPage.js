import React from 'react'
import { useState } from 'react';
import { useNavigation } from 'react-router-dom';
const BlogPage = () => {
      const [blog, setBlog] = useState(null);
      const [relatedblogs, setRelatedBlogs] = useState([]);
      const  navigation = useNavigation();

      
  return (
    <div>
       
    </div>
  )
}

export default BlogPage;