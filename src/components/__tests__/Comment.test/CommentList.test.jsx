import React from 'react';
import Enzyme from 'enzyme';
import Root from 'root';

//Components
import CommentList from 'components/Comment/CommentList'

//Initialize global variables.
let component, initialState;

//Create comments in redux State
const createState = () => {
    initialState = {
        comments: []
    };

    for (let count = 0; count < 100; count++) {
        initialState.comments.push('Comment ' + count);
    }
}

//Set code to run before each statemnt 'it'
beforeEach(() => {
    createState();
    //FullDom rendering with redux
    component = Enzyme.mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>)
    //Rendering without chlitdrens (only components)
    // component = Enzyme.shallow(<CommentBox />);
});

//Set code to run after each statemnt 'it'
afterEach(() => {
    //Unmout FullDOM
    component.unmount();
});

it('Creates one "li" element per comment', () => {
    //Sprawdzenie czy utworzony element 'li' zawiera jeden komentarz
    expect(component.find('li').length).toEqual(initialState.comments.length)
});

it('Text from each comment is visible', () => {
    //Sprawdzenie czy tekst każdego z komentarzy jest widoczny
    let x = 0; //Initialize first comment number ('Comment x')
    component.find('li').forEach((comment) => {
        expect(comment.render().text()).toContain('Comment ' + x++);
    })
});