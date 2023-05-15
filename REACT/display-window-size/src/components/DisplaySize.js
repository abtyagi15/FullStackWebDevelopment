import { useState, useEffect } from "react";

function DisplaySize () {
    const [size,setSize] = useState(window.innerWidth);

    useEffect(()=>{
        const handleWindowSize = () => {
            setSize(window.innerWidth);
        } 
        window.addEventListener("resize",handleWindowSize);
        return () => {
            window.removeEventListener("resize",handleWindowSize);
        }
    },[size])
    
    return (
        <div className="display-size">
            <div>Current Size</div>
            <div className="size-value">{size}</div>
        </div>
    );
}
export default DisplaySize;