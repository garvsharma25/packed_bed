import pump from "./assets/pump.png";
import image from "./assets/image.png";
import tank from './assets/tank.png';
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
  const [discard, setDiscard] = useState(0);
  const [packedwater,setPackedwater] =useState(0);
  const [tankk, setTankk] = useState(200);
  const [count, setCount] = useState(0);
  const previous = () => {
    count!=0&& setCount((prev)=>prev-1)
  };
  const next = () => {
   count!=8&& setCount((prev)=>prev+1)
  };
  const object = [
    "click on the motor button to switch the motor on",
    "click  the bypass value to better control the flow of water ",
    "the rate of flow in the tower can be controlled by a valve in the inlet pipe",
    "The inlet valve is maintained in such a way that level of water in manometric tubesare equal",
    "The water is allowed to flow through the packing in the tower. All the air pockets in	the tower and in the manometer are removed",
    "The distance between the pressure taps is noted as height of the tower(L).",
    "The outlet valve is opened",
    "Time taken to collect the water is noted.",
    "The flow rate is calculated from the volume of water collected or rotameter connected to setup",
  ];

  const inValue = () => {
    if (left < 50) {
      setIn((prev) => prev + 45);
      setLeft((prev) => prev + 25);
      setRight((prev) => prev - 25);
      setPackedwater((prev)=>prev+150)
    }
  };
  const outValue = () => {
    if (discard < 260) {
      setOut((prev) => prev + 45);
      setTimeout(() => {
        
        setDiscard((prev) => prev + 260);
      }, 2000);
       setTimeout(() => {
        setTankk((prev)=>prev+50);
        
      }, 3000);

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
    <div className="w-full h-full    ">
      <div className="h-20 w-full   pr-4 flex justify-between bg-amber-600">
        {object
          .filter((item, index) => index === count)
          .map((item, index) => (
            <p key={index} className="text-2xl flex  whitespace-pre-line p-3">
              <p className="text-gray-800 whitespace-nowrap">Instruction :</p>{" "}
              {item}
            </p>
          ))}
          <div className="flex">
           <motion.div whileHover={{scale:1.1}} whileTap={{scale:.9}} onClick={previous} className="bg-green-600 my-5 mx-5 px-2   text-2xl rounded-xl ">
          previous
        </motion.div>
        <motion.div whileHover={{scale:1.1}} whileTap={{scale:.9}}  onClick={next} className="bg-green-600 my-5 px-2  text-2xl rounded-xl ">next</motion.div>
      </div>

          </div>
        
      <div className="mx-auto mt-5 w-[900px]    justify-center pt-12 align-middle relative flex-col h-[900px]">
        {/*pipeline*/}
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
        <img
          src={linepipe}
          className="absolute w-30 h-170 top-5 -left-2 z-20"
        />
        <img
          src={linepipe}
          className="absolute w-30 h-200 -top-20  
          left-150 "
        />
         <img
          src={linepipe}
          className="absolute w-30 h-190 top-55    rotate-90 
          left-85 "
        />
        <img src={elbow} className="absolute w-30 h-30 top-10 left-4 z-20  " />
        <img src={elbow} className="absolute w-26 h-26 top-131 opacity-90 left-147  rotate-180 z-20  " />
        <img
          src={packedpipe}
          className="absolute w-50 h-50 -top-9  left-155 "
        />
        <img 
          src={linepipe}
          className="absolute w-30 h-170 top-5 -left-2 z-20"
        />
        <img
          src={linepipe}
          className="absolute w-30 h-40 top-120 z-50   left-22 "
        />
        <motion.div
          animate={{ height: discard }}
          transition={{ duration: 1.5 }}
          className="bg-[#7fadadff] w-10 left-8  absolute top-145    opacity-80"
        ></motion.div>
        <div className="flex h-3/4 absolute w-full">
          {/* Packed Bed */}
    
          <motion.div
            initial={{ scale: 1.2 }}
            className="relative z-50 top-4 w-1/3"
          >
            <img src={packed} className="h-3/4 z-30  " />
            {/* outlet */}
            <motion.img
              onClick={outValue}
              src={handle}
              className="h-25 absolute top-16 left-5 z-20 cursor-pointer"
              animate={{ rotate: out }}
              transition={{ duration: 0.3 }}
            />
            <div className=" w-19 h-74 left-28 opacity-30 absolute overflow-hidden top-22">
          
          <motion.div  animate={{ height: packedwater }}
                  transition={{ duration: 1.5 }} className="w-full absolute bottom-0 bg-blue-700 "
      ></motion.div>
            </div>
            <motion.img
              onClick={inValue}
              src={handle}
              className="h-25 absolute top-115 left-26 z-50 cursor-pointer"
              animate={{ rotate: iin }}
              transition={{ duration: 0.3 }}
            />
            <h1 className="top-60 ml-49 z-50 bg-amber-50 text-red-600 absolute">
              Packed Bed
            </h1>
            <h1 className="top-130 ml-49 z-50 bg-amber-50 text-red-600 absolute">
              inlet value
            </h1>
            <h1 className="top-39  ml-8 z-50 bg-amber-50 text-red-600 absolute">
              outlet value
            </h1>
          </motion.div>

          {/* Manometer */}
          <div className="relative w-1/3 pl-10">
            <div className="absolute flex   top-0  h-90 overflow-hidden z-50   w-45 ml-15">
              {/* left*/}
              <motion.div
                animate={{ y: left }}
                transition={{ duration: 1.5 }}
                className="bg-[#246158ff]  w-6 h-38 relative top-60 opacity-85 z-50 left-2"
              ></motion.div>
              {/* right*/}
              <motion.div
                animate={{ y: right }}
                transition={{ duration: 1.5 }}
                className="bg-[#246158ff] w-6 relative top-60 opacity-85 h-38  z-50  left-31"
              ></motion.div>
            </div>

            <img src={manometer} className="top-3 h-3/4 w-full absolute" />
            <h1 className="bottom-40 ml-25 z-50 text-red-600 bg-amber-50 absolute">
              Manometer
            </h1>
          </div>

          {/* Rotameter */}
          <div className="w-1/3 pl-8">
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

              <h1 className="bottom-10 z-50 text-red-600 bg-amber-50 absolute">
                Rotameter
              </h1>
            </div>

            {/* Bypass Valve */}
            
              <img src={linepipe} className="-top-50 -z-10 ml-13  relative w-40 h-150" />
              <motion.img
                onClick={bypass}
                src={handle}
                className="h-30 absolute top-120 ml-18 z-50 cursor-pointer"
                animate={{ rotate: angle }}
                transition={{ duration: 0.3 }}
              />
              <h1 className=" bottom-10 ml-19 z-50 text-red-600 bg-amber-50 absolute">
                Bypass Valve
              </h1>
            
          </div>
        </div>
        <div className="" > <img className="w-990  h-150 top-130 relative -ml-10 -z-50 " src={tank}  />
         <motion.img  className="w-40 rotate-y-180   top-49  relative ml-160 -z-50 " src={pump}  />
         
            <div className="w-190 h-60 absolute ml-8 top-190  overflow-hidden">
              <motion.div  animate={{ height: tankk  }}
                  transition={{ duration: 1.5 }} className="w-full bg-[#d3e0dbff] opacity-90 bottom-0 absolute " >

              </motion.div>
               <h1 className=" px-2  bottom-15 ml-159 z-50 text-red-600 bg-amber-50 absolute">
                pump 
              </h1>
            </div>
         
         </div>
    
      </div>
    </div>
  );
}
export default App;
