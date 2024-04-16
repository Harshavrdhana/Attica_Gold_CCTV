import React, { useState, useEffect } from "react";

const ImagePlayer = ({ rtspUrl }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(rtspUrl);
        const blob = await response.blob();
        const imgUrl = URL.createObjectURL(blob);
        setImageSrc(imgUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    // Fetch image when the component mounts
    fetchImage();

    // Cleanup function to revoke object URL when the component unmounts
    return () => {
      if (imageSrc) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [rtspUrl]);

  return <div>{imageSrc && <img src={imageSrc} alt="RTSP Image" />}</div>;
};

export default ImagePlayer;
