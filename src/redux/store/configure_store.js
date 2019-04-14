/*Store creation*/
import { createStore, combineReducers, applyMiddleware, compose} from "redux";
import reduxThunk from "redux-thunk";

import mangaListsData from "src/redux/reducers/mangaLists";
import showOverlay from "src/redux/reducers/overlay";
import showCategoryDescription from "src/redux/reducers/categoryDescription";

export default () => {
	const middleware = applyMiddleware(reduxThunk);
	const store = createStore(
		combineReducers({
			mangaListsData,
			showOverlay,
			showCategoryDescription
		}),
		compose(middleware)
	);
	return store;
};