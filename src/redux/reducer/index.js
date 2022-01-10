import {combineReducers} from "redux";

const galleryImageReducer = (currentState = [], action) => {
    switch (action.type) {
        case "ADD" :
            return currentState;
        default:
            return currentState;
    }
};



export default combineReducers({
    galleryImage: galleryImageReducer
});

