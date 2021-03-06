//import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import InfiniteScroll from "react-infinite-scroll-component";

import { Container, Form, Row } from 'react-bootstrap';

import { mangaLists } from "src/redux/action/mangaLists";
import { overlay } from "src/redux/action/overlay";

import MangaLists from "src/components/MangaLists";

import pageLoader from "src/assets/img/page_loader.gif";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            language:"english",
            counterList:0,
            lists:[],
            listCopy: []
        }
    }

    componentDidMount(){
        this.props.mangaLists(this.state.language);
    }

    componentDidUpdate(prevProps){
        if(prevProps.mangaListsData !== this.props.mangaListsData){
            console.log("call once");
            this.props.overlay(false);
            this.setState({
                lists: this.validListsObject()
            });
        }
    }

    validListsObject = (adddedLists = 0) => {
        return this.flattenArray(this.props.mangaListsData).filter(
            (value) => {
                return Object.keys(value).length !== 0 && 
                    (
                        value.a || value.im || value.t || value.i || value.s || value.c || value.ld || value.h
                    ) 
            }
        ).slice(0,8 + adddedLists);
    }

    fetchMoreLists = () => {
        this.setState((prevState) => {
            return{
                counterList:prevState.counterList+4
            }
        });
        setTimeout(() => {
            this.setState({
                lists: this.validListsObject(this.state.counterList)
            });
        }, 1500);
    }

    onChangeFormValues = (option, value) => {
        this.setState({
            [option]:value
        });
        this.props.mangaLists(value);
        this.props.overlay(true);
    }

    flattenArray = (arrElem) => {
        return [].concat.apply([], arrElem);
    }

    render(){
        
        //console.log(this.state.lists);
        //console.log(this.flattenArray(this.props.mangaListsData));
        
        return(
            <section id="homepage">
                <Row className="homepage__header_row">
                    <div className="homepage__header">
                        <Container className="clearfix">
                            <h1 className="float-left">MangaMax</h1>
                            <div  className="float-right">
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
                        </Container>
                    </div>
                </Row>
                <Container>
                    <Row className="homepage__infinite_scroll_wrapper">
                        <InfiniteScroll
                            dataLength={this.state.lists.length}
                            next={this.fetchMoreLists}
                            hasMore={true}
                            loader={<img className="homepage__loader" src={pageLoader} />}
                        >
                            <Row>
                                {
                                    this.state.lists.map((value, index) => (
                                        <MangaLists key={index} {...value}/>
                                    ))
                                }
                            </Row>
                        </InfiniteScroll>
                    </Row>
                </Container>
            </section>
        );
    }
}
 
//using reacthooks
/* const Home = (props) => {
    const flattenArray = (arrElem) => [].concat.apply([], arrElem);
    
    const [counterList, setCounterList] = useState(0);
    const [language, setLanguage] = useState("english");
    const [lists, setLists] = useState([]);

    useEffect(() => {
        props.mangaLists(language);
    },[language]);

    const fetchMoreLists = () => {
        setCounterList(counterList + 4);
    }

    useEffect(() => {
        if(counterList === 0 ){
            setLists(flattenArray(props.mangaListsData).slice(0,4).map(value => value));
        }else{
            setTimeout(() => {
                setLists(flattenArray(props.mangaListsData).slice(0,4 + counterList))
            }, 3000);
        } 
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
                                onChange={() => setLanguage("english") }
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
                                onChange={() =>  setLanguage("italian") }
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
                        next={fetchMoreLists}
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
 } */

const mapStateToProps = (state, props) => {    
	return {
        mangaListsData: state.mangaListsData
	};
}; 

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        overlay,
        mangaLists
    },dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);