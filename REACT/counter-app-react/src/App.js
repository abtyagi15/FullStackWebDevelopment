import { useState } from "react";
import "./App.css";

function App() {
  const [count,setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#344151] gap-10">
    <h2 className="text-[#0398D4] text-medium font-2xl">Increment & Decrement</h2>
    <div className="flex my-3  border justify-between bg-white gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
    <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
    <div className="font-bold gap-12 text-5xl">{count}</div>
    <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
    </div>
    <button className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg" onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
