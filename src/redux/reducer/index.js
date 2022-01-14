import {combineReducers} from "redux";

const collectionReducer = (currentState = [], action) => {
    switch (action.type) {
        case "COLLECTION/GET" :
            return action.payload;
        default:
            return currentState;
    }
};

const cursorsReducer = (currentState = [], action) => {
    switch (action.type) {
        case "COLLECTION-CURSOR/GET" :
            return action.payload;
        default:
            return currentState;
    }
};


export default combineReducers({
    collection: collectionReducer,
    cursors : cursorsReducer
});

