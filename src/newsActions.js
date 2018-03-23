import axios from 'axios';

export const getNews = params => dispatch => {
    try {
        fetch(params)
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'GET_NEWS',
                    payload: json
                });
            });
    } catch(e) {
        throw new Error(e);
    }
};