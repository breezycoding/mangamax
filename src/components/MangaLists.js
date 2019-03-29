import React, {Component} from "react";
import { Figure } from 'react-bootstrap';

class MangaLists extends Component{


    render(){
        //console.log(this.props);
        return(
            <div>
                <Figure>
                    <Figure.Image
                        src={`https://cdn.mangaeden.com/mangasimg/${this.props.im}`}
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