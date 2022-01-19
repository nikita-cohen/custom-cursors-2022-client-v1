import axios from "axios";
import {CollectionCard} from "../../model/CollectionCard";
import {Cursor} from "../../model/Cursor";

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

export const searchResultCollectionAxios = (collectionName) => async (dispatch) => {
    try {
        const collections = await axios.get("https://mycustomcursors.online/node/collection/search/" + collectionName)
        const mappedCollections = collections.data
            .map(collection => new CollectionCard(collection._id, collection.name, collection.newImage))
        dispatch(searchResultCollection(mappedCollections))
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
        const collection = await axios.get("https://mycustomcursors.online/node/collection/" + id);
        const cursors = collection.data.items.map(item => new Cursor(item.id, item.name,item.mediumSrc,
            item.cursor.newPath, item.pointer.newPath, collection.data.name, collection.data._id, item.cursor.width, item.cursor.height))
        dispatch(getCollectionCursors(cursors))
    } catch (e) {
        console.log(e)
    }
}

export const getAllCollection = (collectionAmount) => async (dispatch) => {
    try {
        const collections  = await axios.get("https://mycustomcursors.online/node/collection", { params:
                {
                    numberOfCollection: collectionAmount
                }
        });
        const mappedCollections = collections.data
            .map(collection => new CollectionCard(collection._id, collection.name, collection.newImage))
        dispatch(getCollections(mappedCollections))
    } catch (e) {
        console.log(e)
    }
}