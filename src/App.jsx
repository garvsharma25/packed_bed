import pump from "./assets/pump.png";
import sphere from "./assets/sphere.png";
import tube from "./assets/tube.png";
import pipe from './assets/pipe.png';
import handle from './assets/handle.png';
import manometer from './assets/manometer.png'
import packed from './assets/packed.png'
import * as motion from "motion/react-client"
// const [height, setHeight] = useState(70);
// const pumpOn = () => {
//   alert("on");
//   setHeight((prev) => {
//     prev + 5;
//   });
// };

//bg-[url(./assets/image.png)]
function App() {
  return (
    <div className=" w-[900px] justify-center pl-34 align-middle flex-col h-[900px]"> 
      
      <div className="flex h-3/4 w-full">
      <motion.div  whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}  className=" relative w-1/3">
      <img src={packed} className="h-full w-1/2 mx-auto "/>
      
      </motion.div>
       <div className="relative w-1/3">
       <img src={manometer} className="top-3 h-3/4 w-full  absolute"/>
       </div>
 <div className=" w-1/3">
 <div className="h-3/4 flex relative  justify-center ">
 
  <img src={tube} alt="pump" className="h-120 w-100 absolute " />

        <img src={sphere} alt="pump"  className={` h-10 w-10 absolute top-4 z-10`}/>
 
 </div>
 
 <div className="h-1/4 relative flex justify-center  ">
 <img src={pipe} className="absolute w-full h-full "/>
 <img src={handle }  className="h-1/2  absolute top-10 z-20  "/>
 <h1 className="bottom-0.5 z-50 text-red-600 absolute">by pass value </h1>
 </div>
 </div>
      </div>

      <div className="w-full h-1/4 flex    " >
        <img src={pump} alt="pump" className="h-80 w-80 " />
      </div>
    </div>
  );
}

export default App;
