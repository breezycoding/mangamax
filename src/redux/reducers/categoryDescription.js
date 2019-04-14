import { SHOW_CATEGORY_DESC, DONT_SHOW_CATEGORY_DESC } from "src/redux/action/categoryDescription";

const defaultState = [];

export default (state = defaultState, action) => {
	
    switch(action.type){
        case SHOW_CATEGORY_DESC:
            return [...state, action.payload];
        case DONT_SHOW_CATEGORY_DESC:
            return state.filter(({ id }) => id !== action.payload.id);
        default :
            return state;
    }
}
