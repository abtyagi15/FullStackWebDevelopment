import React from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigation();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header />
        <div>
            <button
            onClick={() => navigation(-1)}
            >back</button>
            <h2>Blogs Tagged</h2>
            <span>#{tag}</span>
        </div>
        <Blogs/> 
        <Pagination />
    </div>
  )
}

export default TagPage