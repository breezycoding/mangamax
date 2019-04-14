import { SHOW_OVERLAY, DONT_SHOW_OVERLAY } from "src/redux/action/overlay";

const defaultState = false;

export default (state = defaultState, action) => {
	
    switch(action.type){
        case SHOW_OVERLAY:
            return state = action.payload;
        case DONT_SHOW_OVERLAY:
            return state = action.payload;
        default :
            return state;
    }
}
