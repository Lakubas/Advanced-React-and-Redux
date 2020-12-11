import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export interface interfaceAction {
    type: string;
    payload: any;
}

export function saveComment(comment: interfaceAction["payload"]): {type: string, payload: string} {
    return{
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments(): {type: string, payload: any} {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}

export function changeAuth(isLoggedIn: boolean): {type: string, payload: boolean} {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}