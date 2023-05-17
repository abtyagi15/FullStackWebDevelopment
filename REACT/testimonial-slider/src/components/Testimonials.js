import React , {useState} from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";


const Testimonials = (props) => {
  const reviews = props.reviews;
  const[index,setIndex] = useState(0);

  function leftShiftHandler(){
    if(index-1<0){
      setIndex(reviews.length-1)
    }
    else{
      setIndex(index-1);
    }
  }
  function rightShiftHandler(){
    if(index>=reviews.length-1){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  }
  function supriseHandler(){
    setIndex(Math.floor(Math.random()*reviews.length));
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all 
                    duration-700 hover:shadow-xl">
      <Card review={reviews[index]} />

      <div className="flex text-3xl mt-5 gap-3 text-violet-400 bold justify-center">
        <button
        onClick={leftShiftHandler}
        className="cursor-pointer hover:text-violet-500">
          <FiChevronLeft />
        </button>
        <button
        onClick={rightShiftHandler}
        className="cursor-pointer hover:text-violet-500">
          <FiChevronRight />
        </button>
      </div>
      <div className="text-center mt-5">
        <button
        onClick={supriseHandler}
        className="bg-violet-400 hover-bg-violet-500 text-white rounded-md
                     transition-all duration-200 px-10 py-2 font-bold text-lg"
        >
          Suprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
