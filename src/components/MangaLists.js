import React, {Component} from "react";
import { Figure } from 'react-bootstrap';

import ImageElement from "src/components/ImageElement";

class MangaLists extends Component{

    state = {
        loadedImage:false
    }


    render(){
        //console.log(this.props);
        return(
            <div>
                <Figure>
                    <ImageElement imageSrc={`https://cdn.mangaeden.com/mangasimg/${this.props.im}`}/>
                    <Figure.Caption>
                        <p><strong>{this.props.t}</strong></p>
                    </Figure.Caption>
                </Figure>
            </div>
        );
    }
}

export default MangaLists;