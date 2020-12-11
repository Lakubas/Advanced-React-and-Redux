import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

it('Handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});

it('Handles action with unknown type', () => {
    let newState = commentsReducer([], { type: 'unknown', payload: [] });
    expect(newState).toEqual([])

    newState = commentsReducer(['basia','asia']
        , { type: 'dasdadadaad', payload:[] });
    expect(newState).toEqual(['basia','asia'])

    newState = commentsReducer(['basia'], {type: "", payload: []});
    expect(newState).toEqual(['basia'])
})

it('Handles actions of type FETCH_COMMENTS', () => {
    const action = {
        type: FETCH_COMMENTS,
        payload: [{body: 'New Comment'}, {body: 'Next new'}]
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment', 'Next new']);
});