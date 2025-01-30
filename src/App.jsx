import { useEffect, useState } from "react";
import './App.css'
import { Images } from "./constants";

const App = () => {
    const [activeImage, setImage] = useState(0);

    const handlePreviousButton = () =>{
        setImage(!activeImage ? Images.length -1 : activeImage - 1);
    }

    const handleNextButton = () =>{
        setImage((activeImage + 1) % Images.length);
    }

    useEffect(() => {
        const timer = setTimeout( () => {
            handleNextButton();
        }, 6000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeImage]);

    return(
    <>
      <h1 className="text-gray-700 text-6xl text-center mt-20 font-normal font-serif">IMAGE SLIDER</h1>
      <div className="flex justify-center items-center mt-10 ">
      <button type="button" 
      className="shadow-2xl text-2xl text-white mr-10 bg-blue-700 rounded-sm py-5 w-40" 
          onClick={handlePreviousButton}
          >Previous</button>
      {Images.map((url, i) =>(
          <img 
          key={i}
          src={url}
          className={
            " shadow-2xl rounded-lg  w-[900px] h-[500px] " 
            + (activeImage === i ? "block" : "hidden")
          } 
          alt="WallPaper"/>
      ))}
      
      <button className="shadow-2xl text-2xl text-white bg-blue-700 rounded-sm py-5 w-40 ml-10" 
      onClick={handleNextButton} 
      >next</button>
      </div>
    </>
    );
};

export default App;