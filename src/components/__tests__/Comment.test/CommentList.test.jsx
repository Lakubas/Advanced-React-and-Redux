import React from 'react';
import Enzyme from 'enzyme';
import Root from 'root';

//Components
import CommentList from 'components/Comment/CommentList'

//Initialize global component variable.
let component;

//Set code to run before each statemnt 'it'
beforeEach(() => {
    //FullDom rendering
    component = Enzyme.mount(
        <Root>
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

it('Shows one "li" element per comment', () => {
    //Sprawdzenie czy element 'li' zawiera jeden komentarz
    // expect(component.find('textarea').at(0).prop('placeholder'))
    //     .toEqual("Enter a comment...");
    //Sprawdzenie czy element 'button' wystepuje w componencie dokladnie 1 raz
    // expect(component.find('button').length).toEqual(1);
});

it('Text from each comment is visible', () => {
    //Sprawdzenie czy tekst każdego z komentarzy jest widoczny
});