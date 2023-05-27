import React , { useState} from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";



function Tag() {
  const [tag,setTag] =useState('car');

  const{gif,loading,fetchData} = useGif(tag);
 
  function changeHandler(event){
    setTag(event.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center w-1/2 bg-blue-500 border border-black rounded-md mx-auto mt-[20px]">
      <h1 className="text-3xl uppercase font-bold underline">Random {tag} Gif</h1>
      { loading ? (<Spinner />) : (<img src={gif} alt="gif" width="450" />) }
      <input
      className="text-lg py-2 rounded-lg w-10/12 my-[4px] text-center"
      value={tag}
      onChange={changeHandler}
      />
      <button
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg"
      onClick={() => fetchData(tag)}
      >Generate</button>
    </div>
  );
}

export default Tag;