import React, {Component} from "react";
import { Figure } from 'react-bootstrap';
import Img from 'react-image'
import imageLoader from "src/assets/img/image_loader.gif"

class MangaLists extends Component{


    render(){
        //console.log(this.props);
        return(
            <div>
                <Figure>

                    <Img
                        src={[imageLoader, `https://cdn.mangaeden.com/mangasimg/${this.props.im}`]}
                    />
                    <Figure.Caption>
                        <p><strong>{this.props.t}</strong></p>
                    </Figure.Caption>
                </Figure>
            </div>
        );
    }
}

export default MangaLists;