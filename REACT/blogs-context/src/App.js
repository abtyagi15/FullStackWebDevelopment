import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blog from "./components/Blog";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";
import "./App.css"


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  },[])
  
  return (
    <div>
      <Header />
      <Blog />
      <Pagination />
    </div>
  );
}
