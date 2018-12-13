export const GET_USER = 'GET_USER';
export const NEW_SURVEY = 'NEW_SURVEY';
export const SUBMIT = 'SUBMIT';

import axios from "axios";

const url = "";

export const getUser = () => dispatch => {
    axios.get(url)
        .then(res => res.data)
        .then(user =>
            dispatch({
                type: GET_USER,
                payload: user
            })
        );
};

