import React , {useState} from "react";

export default function Random() {

  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY};`
  const [gif,setGif] = useState('');
  function clickHandler() {

  }

  return (
    <div className="flex flex-col items-center justify-center w-1/2 h-[450px] bg-green-500 border border-black rounded-md mx-auto mt-[20px]">
      <h1 className="text-3xl uppercase font-bold underline">A Random Gif</h1>
      <img src={gif} alt="gif" />
      <button
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg "
      onClick={clickHandler}
      >Generate</button>
    </div>
  );
}
