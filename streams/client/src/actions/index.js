import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

// Get action, calls post, hits streams end point 
export const createStream = (formValues) => {
    return async (dispatch) => {
        streams.post('/streams', formValues);
    }
};