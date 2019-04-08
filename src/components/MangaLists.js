import React, {useState} from "react";
import { Figure, Col} from 'react-bootstrap';

import ImageElement from "src/components/ImageElement";

/* using react hooks */
const MangaLists = (props) => {
    //console.log(props.c);
    return(
        <Col md={3} sm={6} xs={12} className="mangalists_col">
            <div className="manga_lists">
                <ImageElement imageSrc={`https://cdn.mangaeden.com/mangasimg/${props.im}`}/>
                <div className="manga_lists__text_wrapper">
                    <p><strong>{props.t}</strong></p>
                </div>
            </div>
        </Col>
    );
}

export default MangaLists;