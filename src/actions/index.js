import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const getActivity = () => {
    return (dispatch) => {
        dispatch(fetchStart())
            axios.get('https://www.boredapi.com/api/activity')
                .then(resp => {
                    dispatch(fetchSuccess(resp.data.activity))
                })
                .catch(err => {
                    dispatch(fetchFail(err))
                })
    }
}

export const fetchStart = () => {
    return({type: FETCH_START})
};

export const fetchFail = (errorMessage) => {
    return({type: FETCH_FAIL, payload: errorMessage})
};

export const fetchSuccess = (activity) => {
    return({type: FETCH_SUCCESS, payload: activity})
};