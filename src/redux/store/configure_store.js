/*Store creation*/
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";

import mangaListsData from "src/redux/reducers/mangaLists";

export default () => {
	const middleware = applyMiddleware(reduxThunk);
	const store = createStore(
		combineReducers({
			mangaListsData
		}),
		compose(middleware)
	);
	return store;
};