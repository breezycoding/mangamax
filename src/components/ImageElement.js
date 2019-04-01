import React, {Component} from "react";
import VisibilitySensor from 'react-visibility-sensor';

import imageLoader from "src/assets/img/image_loader.gif"
import noAvailableImage from "src/assets/img/noAvailableImage.png"

class ImageElement extends Component {

    state = {
        loadedImage:false
    }

    handleImageErrored = (e) => e.target.src = noAvailableImage;

    handleImageLoaded = () => this.setState({loadedImage:true});

    render() {
        return (
            <div>
                {
                    !this.state.loadedImage && <img src={imageLoader}/>
                }
                <VisibilitySensor>
                    <img
                        src={this.props.imageSrc}
                        onLoad={this.handleImageLoaded}
                        onError={this.handleImageErrored}
                    />
                </VisibilitySensor>
            </div>
        );
    }
}
export default ImageElement;