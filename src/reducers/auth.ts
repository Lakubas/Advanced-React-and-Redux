import { CHANGE_AUTH } from 'actions/types';

export default function authReducer(state: boolean = false, action: {payload: boolean, type: string}) {
    switch (action.type) {
        case CHANGE_AUTH:
            return action.payload;
        default:
            return state;
    }
};