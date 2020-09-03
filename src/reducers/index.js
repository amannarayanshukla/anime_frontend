import {FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST} from '../actions'

const initialState = {
    data: [],
    loading: false,
    error: ``,
    page: 1,
    limit: 16,
    animeName : ``,
    lastPage: 1
};

const fetchAnime = (state = initialState, action) => {
    switch (action.type){
        case FETCH_DATA_REQUEST:
            console.log("---fetchDataRequest reducer--")
            return {
                ...state,
                data: [],
                loading: true,
                page: 1,
                error: ``,
                animeName: action.payload
            }
        case FETCH_DATA_SUCCESS:
            console.log("---fetchDataSuccess reducer--")
            const appendData = state.data.concat(action.payload.results)
            console.log(appendData, " -- APPEND DATA --")
            return {
                ...state,
                data: appendData,
                loading: false,
                page: state.page + 1,
                error: '',
                lastPage: action.payload.last_page
            }
        case FETCH_DATA_ERROR:
            console.log("---fetchDataError reducer--")
            return {
                data: [],
                loading: false,
                page: 1,
                error: action.payload,
                animeName: '',
                lastPage: 0
            }
        default:
            return state;
    }
};

export default fetchAnime;
