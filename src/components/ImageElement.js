import React, { useState } from "react";
import VisibilitySensor from 'react-visibility-sensor';

import imageLoader from "src/assets/img/image_loader.gif"
import noAvailableImage from "src/assets/img/noAvailableImage.png"

/* using react hooks */
const ImageElement = (props) => {
    const [loadedImage, handleImageLoaded] = useState(false);
	
    return(
        <div>
                {
                    !loadedImage && <img src={imageLoader}/>
                }
                <VisibilitySensor>
                    <img
                        src={props.imageSrc}
                        onLoad={() => handleImageLoaded(true)}
                        onError={(e) => e.target.src = noAvailableImage}
                    />
                </VisibilitySensor>
            </div>
    );
}
export default ImageElement;