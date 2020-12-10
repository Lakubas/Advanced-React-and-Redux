import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';
import { interfaceAction } from 'actions/index';

export default function comments(state: string[] = [], action: interfaceAction) {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload];
        case FETCH_COMMENTS:
            const comments = action.payload.data.map((comment: { body: string; }) => comment.body);
            return [...state, ...comments];

        default:
            return state;
    }
};