import pump from "./assets/pump.png";
import sphere from "./assets/sphere.png";
import tube from "./assets/tube.png";
let height =70 ;
 const pumpOn=()=>{
  alert("on");
  height=height + 5;
 };
//bg-[url(./assets/image.png)]
function App() {
  return (
    <div className=" w-full h-screen">
      <div className="flex h-1/2 w-full">
        <div className=" w-1/2"></div>

        

        <div className=" w-1/2 static flex  justify-center  ">
        <img src={tube} alt="pump" className="h-[50vh] w-[50vh] absolute " />

        <img src={sphere} alt="pump"  className={`bottom-[${height}%] h-[5vh] w-[5vh] absolute z-10`}/>
        </div>

      </div>

      <div className="w-full h-1/4 flex  justify-center" onClick={pumpOn}>
        <img src={pump} alt="pump" className="h-[50vh] w-[50vh] " />
      </div>
    </div>
  );
}

export default App;
