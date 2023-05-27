import React  from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


export default function Random() {

  const {gif,loading,fetchData} = useGif();


  return (
    <div className="flex flex-col items-center justify-center w-1/2 bg-green-500 border border-black rounded-md mx-auto mt-[20px]">
      <h1 className="text-3xl uppercase font-bold underline">A Random Gif</h1>
      { loading ? (<Spinner />) : (<img src={gif} alt="gif" width="450" />) }
      
      <button
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg "
      onClick={() => fetchData()}
      >Generate</button>
    </div>
  );
}
