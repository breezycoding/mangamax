import React, { useState, useEffect } from "react";
//import React, { Component } from "react";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { Container, Form, Row } from 'react-bootstrap';

import * as mangaLists from "src/redux/action/mangaLists";
import MangaLists from "src/components/MangaLists";

import pageLoader from "src/assets/img/page_loader.gif";
/* 
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            language:"english",
            counterList:0,
            lists:[]
        }
    }

    

    componentDidMount(){
        this.props.mangaLists(this.state.language);
    }

    componentDidUpdate(prevProps){
        if(prevProps.mangaListsData !== this.props.mangaListsData){
            console.log("call once");
            this.setState({
                lists:  this.flattenArray(this.props.mangaListsData).slice(0,4)
            });
        }
    }

    fetchMoreLists = () => {
        this.setState((prevState) => {
            return{
                counterList:prevState.counterList+4
            }
        });
        setTimeout(() => {
            this.setState({
                lists: this.flattenArray(this.props.mangaListsData).slice(0,4 + this.state.counterList)
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
        
        console.log(this.state.lists);
        console.log(this.flattenArray(this.props.mangaListsData)); 
        
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
                        <InfiniteScroll
                            dataLength={this.state.lists.length}
                            next={this.fetchMoreLists}
                            hasMore={true}
                            loader={<img src={pageLoader} />}
                        >
                        {
                            this.state.lists.map((value, index) => (
                                <MangaLists key={index} {...value}/>
                            ))
                        }
                        </InfiniteScroll>
                    </Row>
                </Container>
            </div>
        );
    }
} */
 
//using reacthooks
const Home = (props) => {
    const flattenArray = (arrElem) => [].concat.apply([], arrElem);
    
    const [counterList, useCounterList] = useState(0);
    const [language, useLanguage] = useState("english");
    const [lists, useLists] = useState([]);

    useEffect(() => {
        props.mangaLists(language);
    },[language]);

    useEffect(() => {
        useLists(flattenArray(props.mangaListsData).slice(0,4).map(value => value));
    },[flattenArray(props.mangaListsData).slice(0,4).length !== 0]);

    const fetchMoreLists = () => {
        useCounterList(counterList + 4);
    }

    useEffect(() => {
        setTimeout(() => {
            useLists(flattenArray(props.mangaListsData).slice(0,4 + counterList))
        }, 3000);
    },[lists]);

    return(
        <div>
            <Container>
                <Row>
                    <div>
                        <Form.Group as={Row}>
                            <Form.Check
                                custom
                                inline
                                value={language}
                                onChange={() => useLanguage("english") }
                                name="radio_language"
                                id="custom-radio-english"
                                label="English"
                                type="radio"
                                defaultChecked
                            />
                            <Form.Check
                                custom
                                inline
                                value={language}
                                onChange={() =>  useLanguage("italian") }
                                name="radio_language"
                                id="custom-radio-italian"
                                label="Italian"
                                type="radio"
                            />
                        </Form.Group>
                    </div>
                </Row>
                <Row>
                    <InfiniteScroll
                        dataLength={lists.length}
                        next={() => fetchMoreLists()}
                        hasMore={true}
                        loader={<img src={pageLoader} />}
                    >
                    {
                        lists.map((value, index) => (
                            <MangaLists key={index} {...value}/>
                        ))
                    }
                    </InfiniteScroll>
                </Row>
            </Container>
        </div>
    );

 }

const mapStateToProps = (state, props) => {    
	return {
        mangaListsData: state.mangaListsData
	};
}; 

export default connect(mapStateToProps, mangaLists)(Home);