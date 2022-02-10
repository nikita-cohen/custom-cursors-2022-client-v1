import axios from "axios";
import {CollectionCard} from "../../model/CollectionCard";
import {Cursor} from "../../model/Cursor";
import { trackPromise } from 'react-promise-tracker';

export const getCollections = (collections) => {
    return {
        type: "COLLECTION/GET",
        payload: collections
    };
}

export const getCollectionCursors = (collection) => {
    return {
        type: "COLLECTION-CURSOR/GET",
        payload: collection
    };
}

export const searchCollection = (collections) => {
    return {
        type : "SEARCH-RESULT-COLLECTION",
        payload : collections
    }
}

export const searchResultCollection = (collections) => {
    return {
        type : "SEARCH-RESULT-COLLECTION/GET",
        payload : collections
    }
}

export const getUserCollection = (userCollection) => {
    return {
        type : "USER-COLLECTION/GET",
        payload : userCollection
    }
}

export const getUserLastUsedCollection = (userCollection) => {
    return {
        type : "USER-LAST-USED-COLLECTION/GET",
        payload : userCollection
    }
}

export const saveUserId = (userId) => {
    return {
        type : "USER-ID/SAVE",
        payload : userId
    }
}

const getOneCollection = async (collectionId) => {
    try {
        const userCollection = await trackPromise(axios.get("https://mycustomcursors.online/node/collection/" + collectionId))
        return userCollection.data;
    } catch (e) {
        console.log(e)
    }
}

export const getUserLastUsedCollectionAxios = (userId) => async (dispatch) => {
    try {
        const userCollection = await trackPromise(axios.get("https://mycustomcursors.online/node/user/last-used/" + userId))
        const mappedCollections = await trackPromise(Promise.all(userCollection.data
            .map(async collectionId => {
                const collection = await getOneCollection(collectionId)
                return new CollectionCard(collection._id, collection.name, collection.newImage)
            })))
        console.log(mappedCollections)
        dispatch(getUserLastUsedCollection(mappedCollections))
    } catch (e) {
        console.log(e)
    }
}

export const getUserCollectionAxios = (userId) => async (dispatch) => {
    try {
        const userCollection = await trackPromise(axios.get("https://mycustomcursors.online/node/user/collection/" + userId))
        dispatch(getUserCollection(userCollection.data))
    } catch (e) {
        console.log(e)
    }
}

export const searchResultCollectionAxios = (collectionName) => async (dispatch) => {
    try {
        const collections = await trackPromise(axios.get("https://mycustomcursors.online/node/collection/search/" + collectionName))
        if (collections.data?.length > 0){
            const mappedCollections = collections.data
                .map(collection => new CollectionCard(collection._id, collection.name, collection.newImage))
            dispatch(searchResultCollection(mappedCollections))
        }
    } catch (e) {
        console.log(e)
    }
}

export const searchCollectionAxios = (collectionName) => async (dispatch) => {
    try {
        const collections = await axios.get("https://mycustomcursors.online/node/collection/search/" + collectionName)
        const mappedCollections = collections.data
            .map(collection => new CollectionCard(collection._id, collection.name, collection.newImage))
        dispatch(searchCollection(mappedCollections))
    } catch (e) {
        console.log(e)
    }
}

export const getCollectionCursorsAxios = (id) => async (dispatch) => {
    try {
        const collection = await trackPromise(axios.get("https://mycustomcursors.online/node/collection/" + id));
        const cursors = collection.data.items.map(item => new Cursor(item.id, item.name,item.mediumSrc,
            item.cursor.newPath, item.pointer.newPath, collection.data.name, collection.data._id, item.cursor.width, item.cursor.height))
        dispatch(getCollectionCursors(cursors))
    } catch (e) {
        console.log(e)
    }
}

export const getAllCollection = (collectionAmount) => async (dispatch) => {
    try {
        const collections  = await trackPromise(axios.get("https://mycustomcursors.online/node/collection", { params:
                {
                    numberOfCollection: collectionAmount
                }
        }));
        const mappedCollections = collections.data
            .map(collection => new CollectionCard(collection._id, collection.name, collection.newImage))
        dispatch(getCollections(mappedCollections))
    } catch (e) {
        console.log(e)
    }
}
