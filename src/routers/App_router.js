import React from "react";
import {BrowserRouter, HashRouter,  Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory()

import Home from "src/components/Home";

const App_router = () => {
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
		<div>
			{productionBuild()}
		</div>
	);
} 

export default App_router;