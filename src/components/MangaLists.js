import React, {useState} from "react";
import { connect } from "react-redux";
import { Figure, Col} from 'react-bootstrap';

import ImageElement from "src/components/ImageElement";
import BurgerNav from "src/components/BurgerNav";

/* using react hooks */
const MangaLists = (props) => {
    //console.log(props.c);
    console.log("props.showCategoryDescription ", typeof props.showCategoryDescription);
    return(
        <Col md={3} sm={6} xs={12} className="mangalists_col">
            <div className="manga_lists">
                <BurgerNav id={props.i}/>
                <ImageElement imageSrc={`https://cdn.mangaeden.com/mangasimg/${props.im}`}/>
                <div className="manga_lists__text_wrapper">
                    <p><strong>{props.t}</strong></p>
                </div>
                {
                    props.showCategoryDescription && props.showCategoryDescription.map((value, index) => {
                        if(value.showCategoryDesc && value.id === props.i){
                            return(
                                <div className="category_description">
                                    here
                                </div>
                            );
                        }
                    })
                }
            </div>
        </Col>
    );
}

const mapStateToProps = (state, props) => {    
	return {
        showCategoryDescription: state.showCategoryDescription
	};
}; 

export default connect(mapStateToProps, null)(MangaLists);