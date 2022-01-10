import axios from "axios";
import {CollectionCard} from "../../model/CollectionCard";

export const getCollections = (collections) => {
    return {
        type: "COLLECTION/GET",
        payload: collections
    };
}

export const getAllCollection = (collectionAmount) => async (dispatch) => {
    try {
        const collections  = await axios.get("http://localhost:8089/collection", { params:
                {
                    numberOfCollection: collectionAmount
                }
        });
        const mappedCollections = collections.data
            .map(collection => new CollectionCard(collection._id, collection.name, collection.image))
        dispatch(getCollections(mappedCollections))
    } catch (e) {

    }
}