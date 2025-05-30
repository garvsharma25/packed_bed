import pump from "./assets/pump.png";
import image from './assets/image.png'
import { useState } from "react";
import sphere from "./assets/sphere.png";
import tube from "./assets/tube.png";
import pipe from "./assets/pipe.png";
import handle from "./assets/handle.png";
import packedpipe from "./assets/packedpipe.png";
import manometer from "./assets/manometer.png";
import packed from "./assets/packed.png";
import extendpipe from "./assets/extendpipe.png";
import upipe from "./assets/upipe.png";
import linepipe from "./assets/linepipe.png";
import elbow from "./assets/elbow.png";
import * as motion from "motion/react-client";
function App() {
  const [heightt, setHeight] = useState(10);
  const [angle, setAngle] = useState(0);
  const [out, setOut] = useState(0);
  const [iin, setIn] = useState(0);
  const [ball, setBall] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const[discard,setDiscard]=useState(0);
  const [window, setWindow] = useState(true);
 
  const inValue = () => {
    
    if(left<50){
     setIn((prev) => prev + 45);
    setLeft((prev)=>prev+25);
    setRight((prev)=>prev-25);
   
    }
   
    
  };
  const outValue = () => {
    if (discard<150) {
       setOut((prev) => prev + 45);
    setTimeout(() => {
      setDiscard((prev)=>prev+150)
    },2000);
    } else {
      
    }
   
    
  };
  const bypass = () => {
    if (ball > -200) {
      setBall((prev) => prev - 20);
      setHeight((prev) => prev + 100);
      setAngle((prev) => prev + 20);
    } else {
      /////window
    }
  };

  return (
    < div   className='w-full h-full '>
    <div className="mx-auto mt-5 w-[900px]  justify-center pt-12 align-middle relative flex-col h-[900px]">
      <img
        src={packedpipe}
        className="absolute w-100 h-30 top-4 left-36 z-20"
      />
      <img
        src={packedpipe}
        className="absolute w-100 h-30 top-4 left-68   z-30"
      />
      <img
        src={extendpipe}
        className="absolute w-60 h-115 top-14 left-35 z-20"
      />
      <img src={linepipe} className="absolute w-30 h-170 top-5 -left-2 z-20" />
      <img src={elbow} className="absolute w-30 h-30 top-10 left-4 z-20  " />

      <img
        src={linepipe}
        className="absolute w-30 h-40 top-130 z-30   left-22 "
      />
       <motion.div
                animate={{ height: discard }}
                transition={{ duration: 1.5 }}
                className="bg-[#7fadadff] w-10 left-8  absolute top-145    opacity-80"
              ></motion.div>
      <div className="flex h-3/4 absolute w-full">
        {/* Packed Bed */}

        <motion.div
          initial={{ scale: 1.1 }}
          className="relative z-50 top-4 w-1/3"
        >
          <img src={packed} className="h-3/4 z-30  " />
          {/* outlet */}
          <motion.img
            onClick={outValue}
            src={handle}
            className="h-25 absolute top-11 left-2 z-20 cursor-pointer"
            animate={{ rotate: out }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            onClick={inValue}
            src={handle}
            className="h-25 absolute top-120 left-24 z-50 cursor-pointer"
            animate={{ rotate: iin }}
            transition={{ duration: 0.3 }}
          />
          <h1 className="top-60 ml-49 z-50 text-red-600 absolute">
            Packed Bed
          </h1>
          <h1 className="top-130 ml-49 z-50 text-red-600 absolute">
            inlet value
          </h1>
          <h1 className="top-35  ml-5 z-50 text-red-600 absolute">
            outlet value
          </h1>
        </motion.div>

        {/* Manometer */}
        <div className="relative w-1/3 pl-10">
          <div className="absolute flex   top-0  h-90 overflow-hidden z-50   w-45 ml-15">
            {/* left*/ }
            <motion.div
              animate={{ y: left }}
              transition={{ duration: 1.5 }}
              className="bg-[#246158ff]  w-6 h-38 relative top-60 opacity-85 z-50 left-2"
            ></motion.div>
            {/* right*/ }
            <motion.div
              animate={{ y: right }}
              transition={{ duration: 1.5 }}
              className="bg-[#246158ff] w-6 relative top-60 opacity-85 h-38  z-50  left-31"
            ></motion.div>
          </div>

          <img src={manometer} className="top-3 h-3/4 w-full absolute" />
          <h1 className="bottom-40 ml-25 z-50 text-red-600 absolute">
            Manometer
          </h1>
        </div>

        {/* Rotameter */}
        <div className="w-1/3">
          <div className="h-3/4 flex relative justify-center">
            <div className="absolute flex w-15 z-50 h-65  top-23 overflow-clip  ">
              <motion.div
                animate={{ height: heightt }}
                transition={{ duration: 1.5 }}
                className="bg-[#7fadadff] w-full z-20 absolute bottom-0    opacity-80"
              ></motion.div>
              <motion.img
                animate={{ y: ball }}
                transition={{ duration: 1.5 }}
                src={sphere}
                alt="sphere"
                className="h-14 w-14 absolute bottom-0   z-10"
              />
            </div>

            <img src={tube} alt="tube" className="h-120 w-100 absolute" />

            <h1 className="bottom-10 z-50 text-red-600 absolute">Rotameter</h1>
          </div>

          {/* Bypass Valve */}
          <div className="h-1/4 relative flex justify-center -mt-19">
            <img src={pipe} className="absolute w-full h-full" />
            <motion.img
              onClick={bypass}
              src={handle}
              className="h-1/2 absolute top-10 z-20 cursor-pointer"
              animate={{ rotate: angle }}
              transition={{ duration: 0.3 }}
            />
            <h1 className="bottom-0.5 z-50 text-red-600 absolute">
              Bypass Valve
            </h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;
