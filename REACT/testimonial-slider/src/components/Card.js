import React from "react";
import {FaQuoteRight, FaQuoteLeft} from "react-icons/fa";

const Card = (props) => {
    let review = props.review;
    // <div className="w-[140px] h-140px] rounded-full top-[-6px] z-[-20] left-[10px] bg-violet-500 absolute"></div>
    return (
        <div className="flex flex-col md:relative ">
            <div className="image-container z-[10]">
                <img 
                    className="aspect-square w-[140px] h-[140px]] z-25 rounded-full image"
                    src={review.image} alt="text"/>
                <div className="w-[140px] h-[140px] rounded-full bg-violet-500 e top-[-5%] right-[-7%] z-[-20] image-shadow"></div>
            </div>
            <div>
                <p className="tracking-wider text-center mt-7 capitalize font-bold text-2xl">{review.name}</p>
                <p className="text-center text-violet-300 uppercase text-sm">{review.job}</p>
            </div>
            <div className="text-violet-400 mt-5 mx-auto">
                <FaQuoteLeft />
            </div>
            <div className="text-center mt-4 text-slate-400">
                <p>{review.text}</p>
            </div>
            <div className="text-violet-400 mt-5 mx-auto">
                <FaQuoteRight  />
            </div>
            
        </div>
    );
    
}

export default Card;