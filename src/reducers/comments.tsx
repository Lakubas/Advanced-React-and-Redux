import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default function commentsReducer(state: string[] = [], action: {type: string, payload: any}) {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload];
        case FETCH_COMMENTS:
            debugger;
            const comments = action.payload.map((comment: { body: string; }) => comment.body);
            return [...state, ...comments];
        default:
            return state;
    }
};