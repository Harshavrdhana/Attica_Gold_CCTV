import React from "react";
import "./section.css";
import { cameraURL } from "../../assets/cameraURL";
import { useSearchParams } from "react-router-dom";

const Section = () => {
  const [selectedCamera, setSelectedCamera] = React.useState(0)
  const [renderSelectedCamera, setRenderSelectedCamera] = React.useState(false)

  const [searchParams]=useSearchParams()
  const custom=searchParams.get('custom')|| 25;

  const handleClick = (i) => {
      setSelectedCamera(i)
      setRenderSelectedCamera(true);
  }

  const renderCamera = () => {

      if (!renderSelectedCamera) {
          return cameraURL.slice(0, custom).map((cam, index) => (
              <div
                  key={index}
                  className={`cam cam-${index}`}
                  onClick={() => handleClick(index)}
              >
                <img src="http://127.0.0.1:5000/video_feed" alt="alternate"/>
              </div>
          ))
      }
      else {
          return <div
              className={`cam cam-${selectedCamera}`}
              onClick={() => setRenderSelectedCamera(!renderSelectedCamera)}
          >
             <img src="http://127.0.0.1:5000/video_feed" alt="alternate"/>
          </div>
      }
  }

  return (
    <div
        className={`section-${!renderSelectedCamera ? custom : 1}`}
    >
        {renderCamera()}
    </div>
  );
};

export default Section;
