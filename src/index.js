import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import {Provider} from "react-redux";

import App_router from "./routers/App_router";
import configureStore from  "./redux/store/configure_store";

import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.scss";
const store = configureStore();

const Jsx = () => {
	return(
		<Provider store={store}>
			<App_router />
		</Provider>
	);
}

ReactDOM.render(<Jsx />, document.getElementById("app"));