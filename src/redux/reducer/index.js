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

const searchReducer = (currentState = [], action) => {
    switch (action.type) {
        case "SEARCH-RESULT-COLLECTION" :
            return action.payload;
        default:
            return currentState;
    }
};

const searchResultReducer = (currentState = [], action) => {
    switch (action.type) {
        case "SEARCH-RESULT-COLLECTION/GET" :
            return action.payload;
        default:
            return currentState;
    }
};

const userCollectionReducer = (currentState = [], action) => {
    switch (action.type) {
        case "USER-COLLECTION/GET" :
            return action.payload;
        default:
            return currentState;
    }
};

const userReducer = (currentState = null, action) => {
    switch (action.type) {
        case "USER-ID/SAVE" :
            return action.payload;
        default:
            return currentState;
    }
};

const userCollectionLastUsedReducer = (currentState = null, action) => {
    switch (action.type) {
        case "USER-LAST-USED-COLLECTION/GET" :
            return action.payload;
        default:
            return currentState;
    }
};



export default combineReducers({
    collection: collectionReducer,
    cursors : cursorsReducer,
    searchResult : searchReducer,
    searchPage : searchResultReducer,
    userCollection : userCollectionReducer,
    userId : userReducer,
    lastUsed : userCollectionLastUsedReducer
});

