import React from "react";
import {BrowserRouter, HashRouter,  Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import LoadingOverlay from 'react-loading-overlay';
import PropagateLoader from 'react-spinners/PropagateLoader';

const history = createBrowserHistory()

import Home from "src/components/Home";

const App_router = (props) => {
	const paths = () => (
		<Switch>
			<Route path="/" component={Home} exact={true}/>
		</Switch>
	);

	const productionBuild = () => (
		<HashRouter history={history}>
			{paths()}	
		</HashRouter>
	);

	const developmentBuild = () => (
		<BrowserRouter>
			{paths()}
		</BrowserRouter>
	)
	return(
		<LoadingOverlay
			active={props.showOverlay}
			spinner={
				<PropagateLoader 
					color={'#EE7600'} 
					sizeUnit={"rem"}
					size={1.25}
				/>}
			//text='Loading your content...'
		>
			<div>
				{productionBuild()}
			</div>
		</LoadingOverlay>
	);
} 

const mapStateToProps = (state, props) => {    
	return {
        showOverlay: state.showOverlay
	};
}; 

export default connect(mapStateToProps, null)(App_router);