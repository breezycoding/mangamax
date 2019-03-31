import React, {Component} from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { Container, Form, Row } from 'react-bootstrap';

import * as mangaLists from "src/redux/action/mangaLists";
import MangaLists from "src/components/MangaLists";

class Home extends Component{

    state = {
        language:"italian",
        lists:[]
    }

    componentDidMount(){
        this.props.mangaLists(this.state.language);
        
    }

    componentDidUpdate(){
        console.log(this.flattenArray(this.props.mangaListsData))
    }

    fetchMoreLists = () => {
        
        setTimeout(() => {
            this.setState((prevState) => {
                lists: this.flattenArray(this.props.mangaListsData)
            });
          }, 3000);
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
        console.log(this.state.lists);
        //console.log(typeof this.flattenArray(this.props.mangaListsData));
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
                            /* this.flattenArray(this.props.mangaListsData).length !== 0 && 
                                this.flattenArray(this.props.mangaListsData).map((value) => {
                                    return(
                                        <MangaLists {...value}/>
                                    );
                                }) */
                        }
                        <InfiniteScroll
                            dataLength={this.flattenArray(this.props.mangaListsData).length}
                            next={this.fetchMoreLists}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                        >
                        {
                            this.state.lists.map((value) => (
                                <MangaLists {...value}/>
                            ))
                        }
                        </InfiniteScroll>
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