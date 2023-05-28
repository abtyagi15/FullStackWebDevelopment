import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading] =useState(false);
    const [page,setPage] = useState(1);
    const [posts,setPosts] = useState([]);
    const [totalPages,setTotalPages] = useState(null);

    async function fetchBlogPosts(page=1){
        setLoading(true);
        try{
            const result = await fetch(`${baseUrl}&page=${page}`);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("Error in fetching the data");
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value ={
        posts,
        setPosts,
        page,
        setPage,
        loading,
        setLoading,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }

    return <AppContext.Provider value={value}>
            {children}
    </AppContext.Provider>
}