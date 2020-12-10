import axios, { AxiosResponse } from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export interface interfaceAction {
    type: string;
    payload: string | Promise<AxiosResponse<any>> | undefined;
}

export function saveComment(comment: interfaceAction["payload"]): interfaceAction {
    return{
        type: SAVE_COMMENT,
        payload: comment
    };
}

export function fetchComments(): interfaceAction {
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response
    }
}