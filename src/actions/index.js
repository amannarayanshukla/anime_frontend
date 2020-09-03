import store from "../app/store";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const fetchDataRequest = (anime) => {
    console.log("---fetchDataRequest action--")
    return {
        type: FETCH_DATA_REQUEST,
        payload: anime
    }
}

export const fetchDataSuccess = data => {
    console.log("---fetchDataSuccess action--")
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataError = error => {
    console.log("---fetchDataError action--")
    return {
        type: FETCH_DATA_ERROR,
        payload: error
    }
}

export const fetchPosts = (anime, limit, page) => {
    store.dispatch(fetchDataRequest(anime));
    return function (dispatch, getState) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/search/anime?q=${anime}&limit=${limit}&page=${page}`)
            .then(data => data.json())
            .then(data => {
                dispatch(fetchDataSuccess(data))
            })
            .catch(error => {
                dispatch(fetchDataError(error.message))
            })
    };
}


export const fetchMorePosts = (anime, limit, page) => {
    return function (dispatch, getState) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/search/anime?q=${anime}&limit=${limit}&page=${page}`)
            .then(data => data.json())
            .then(data => {
                console.log(data, " ---- FETCH MORE POSTS data ----")
                dispatch(fetchDataSuccess(data))
            })
            .catch(error => {

                console.log(error, " : ERROR")
            })
    };
}
