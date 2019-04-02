import React, {useState} from "react";
import { Figure } from 'react-bootstrap';

import ImageElement from "src/components/ImageElement";

/* using react hooks */
const MangaLists = (props) => {
    //console.log(props.c);
    return(
        <div>
            <Figure>
                <ImageElement imageSrc={`https://cdn.mangaeden.com/mangasimg/${props.im}`}/>
                <Figure.Caption>
                    <p><strong>{props.t}</strong></p>
                </Figure.Caption>
            </Figure>
        </div>
    );
}

export default MangaLists;