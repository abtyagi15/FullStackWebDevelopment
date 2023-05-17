import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
const App = () => {
  return (
    <div className="flex flex-col w-[100vw] items-center justify-center h-[100vh] bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/2 mt-1 mx-auto"></div>
      </div> 
      <div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
};

export default App;
