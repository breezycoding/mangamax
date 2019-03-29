import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Home from "src/components/Home";

const App_router = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/" component={Home} exact={true}/>
			</Switch>	
		</div>
	</BrowserRouter>
);

export default App_router;