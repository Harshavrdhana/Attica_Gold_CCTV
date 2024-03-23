import React from "react";
import "./section.css";
import ReactPlayer from "react-player";
// import { cameraURL } from "../../assets/cameraURL";
// import { useSearchParams } from "react-router-dom";

const Section = () => {
  // const [selectedCamera, setSelectedCamera] = React.useState(0)
  // const [renderSelectedCamera, setRenderSelectedCamera] = React.useState(false)

  // const [searchParams]=useSearchParams()
  // const custom=searchParams.get('custom')|| 25;

  // const handleClick = (i) => {
  //     setSelectedCamera(i)
  //     setRenderSelectedCamera(true);
  // }

  // const renderCamera = () => {

  //     if (!renderSelectedCamera) {
  //         return cameraURL.slice(0, custom).map((cam, index) => (
  //             <div
  //                 key={index}
  //                 className={`cam cam-${index}`}
  //                 onClick={() => handleClick(index)}
  //             >
  //                 <iframe
  //                     title={`Video ${index + 1}`}
  //                     src={`${cam}`}
  //                     muted
  //                     allow="autoplay; encrypted-media"
  //                     allowFullScreen
  //                 ></iframe>
  //             </div>
  //         ))
  //     }

  //     else {
  //         return <div
  //             className={`cam cam-${selectedCamera}`}
  //             onClick={() => setRenderSelectedCamera(!renderSelectedCamera)}
  //         >
  //             <iframe
  //                 title={`Video ${selectedCamera + 1}`}
  //                 src={`${cameraURL[selectedCamera]}`}
  //                 muted
  //                 allow="autoplay; encrypted-media"
  //                 allowFullScreen
  //             ></iframe>
  //         </div>
  //     }
  // }

  // return (
  //     <div
  //         className={`section-${!renderSelectedCamera ? custom : 1}`}
  //     >
  //         {renderCamera()}
  //     </div>
  // )

  <div className="App">
    <h1>Camera Streaming</h1>
    {/* <p>URL: http://localhost:4000/index.m3u8</p> */}
    <ReactPlayer
      url="http://localhost:4000/index.m3u8"
      playing={true}
      controls={true} // Add controls to display video controls
      width="70%" // Set width to fill the container
      height="auto" // Set height to maintain aspect ratio
    />
  </div>;
};

export default Section;
