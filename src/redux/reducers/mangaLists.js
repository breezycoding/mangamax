import { MANGA_LIST, MANGA_LIST_ERR } from "src/redux/action/mangaLists";

const defaultState = {};

export default (state = defaultState, action) => {
    switch(action.type){
        case MANGA_LIST:
            return [state, action.payload.data.manga]
        case MANGA_LIST_ERR:
            return {state, errorMessage: action.payload};
        default :
            return state;
    }
}
