import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('Handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('Handles action with unknown type', () => {
    let newState = commentsReducer([], { type: 'unknown' });
    expect(newState).toEqual([])

    newState = commentsReducer(['basia','asia'], { type: 'dasdadadaad' });
    expect(newState).toEqual(['basia','asia'])

    newState = commentsReducer(['basia'], {});
    expect(newState).toEqual(['basia'])
})