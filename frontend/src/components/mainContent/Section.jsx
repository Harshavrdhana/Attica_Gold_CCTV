import React from "react";
import ReactPlayer from "react-player";
import "./section.css";
import { cameraURL } from "../../assets/cameraURL";
import { useSearchParams } from "react-router-dom";
import ImagePlayer from "./VideoPlayer";

const Section = () => {
  const rtspUrl = "http://127.0.0.1:5000/video_feed";
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

  return (
    <div>
      <img
        src="http://127.0.0.1:5000/video_feed"
        width="350"
        height="300"
        alt="video"
      />
      {/* <ReactPlayer
        url="http://127.0.0.1:5000/video_feed"
        playing={true}
        controls={true} // Add controls to display video controls
        width="70%" // Set width to fill the container
        height="auto" // Set height to maintain aspect ratio
      /> */}
      {/* <ImagePlayer rtspUrl={rtspUrl} /> */}
    </div>
    // <div
    //     className={`section-${!renderSelectedCamera ? custom : 1}`}
    // >
    //     {renderCamera()}
    // </div>
  );
};

export default Section;
