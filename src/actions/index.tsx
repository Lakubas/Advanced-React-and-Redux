import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types';

export type interfaceAction =
    | { type: string, payload: string }
    | { type: string, payload: string[] }
    | { type: string, payload: boolean };

export function saveComment(comment: string): interfaceAction {
    return{
        type: SAVE_COMMENT,
        payload: comment
    };
}

export async function fetchComments()
    : Promise<{type: string, payload: string[]}> 
{
    const data = await axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then(result => {return result.data});

    return {
        type: FETCH_COMMENTS,
        payload: data
    };
}

export function changeAuth(isLoggedIn: boolean): interfaceAction {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}