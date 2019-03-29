import React, {Component} from "react";
import { connect } from "react-redux";

import { Container, Form, Row } from 'react-bootstrap';

import * as mangaLists from "src/redux/action/mangaLists";
import MangaLists from "src/components/MangaLists";

class Home extends Component{

    state = {
        language:"italian"
    }

    componentDidMount(){
        this.props.mangaLists(this.state.language);
    }

    onChangeFormValues = (option, value) => {
        this.setState({
            [option]:value
        });
        this.props.mangaLists(value);
    }

    flattenArray = (arrElem) => {
        return [].concat.apply([], arrElem);
    }

    render(){
        console.log(this.state.language);
        //console.log(this.flattenArray(this.props.mangaListsData));
        return(
            <div>
                <Container>
                    <Row>
                        <div>
                            <Form.Group as={Row}>
                                <Form.Check
                                    custom
                                    inline
                                    value={this.state.language}
                                    onChange={() => this.onChangeFormValues("language", "english")}
                                    name="radio_language"
                                    id="custom-radio-english"
                                    label="English"
                                    type="radio"
                                    defaultChecked
                                />
                                <Form.Check
                                    custom
                                    inline
                                    value={this.state.language}
                                    onChange={() => this.onChangeFormValues("language", "italian")}
                                    name="radio_language"
                                    id="custom-radio-italian"
                                    label="Italian"
                                    type="radio"
                                />
                            </Form.Group>
                        </div>
                    </Row>
                    <Row>
                        {
                            this.flattenArray(this.props.mangaListsData) && 
                                this.flattenArray(this.props.mangaListsData).map((value) => {
                                    return(
                                        <MangaLists {...value}/>
                                    );
                                })
                        }
                        
                    </Row>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {    
	return {
        mangaListsData: state.mangaListsData
	};
}; 

export default connect(mapStateToProps, mangaLists)(Home);