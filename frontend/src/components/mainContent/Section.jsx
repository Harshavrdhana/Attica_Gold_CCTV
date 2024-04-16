import React, { useEffect } from 'react'
import './section.css'
import { cameraURL } from '../../assets/cameraURL'
import { useSearchParams } from 'react-router-dom'


const Section = () => {
    const [selectedCamera, setSelectedCamera] = React.useState(0)
    const [renderSelectedCamera, setRenderSelectedCamera] = React.useState(false)
    
    const [searchParams]=useSearchParams()
    const custom=searchParams.get('custom')|| 25;
    useEffect(()=>{
      setRenderSelectedCamera(false);
      setSelectedCamera(0)
    },[custom])

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
                    <iframe
                        title={`Video ${index + 1}`}
                        src={`${cam}`}
                        muted
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            ))
        }

        else {
            return <div
                className={`cam cam-${selectedCamera}`}
                onClick={() => setRenderSelectedCamera(!renderSelectedCamera)}
            >
                <iframe
                    title={`Video ${selectedCamera + 1}`}
                    src={`${cameraURL[selectedCamera]}?autoplay=1`}
                    muted
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
        }
    }

    return (
        <div
            className={`section-${!renderSelectedCamera ? custom : 1}`}
        >
            {renderCamera()}
        </div>
    )
}

export default Section;