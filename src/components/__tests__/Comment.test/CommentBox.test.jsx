import React from 'react';
import Enzyme from 'enzyme';
import Root from 'root';

//Components
import CommentBox from 'components/Comment/CommentBox'

//Initialize global component variable.
let component;

//Set code to run before each statemnt 'it'
beforeEach(() => {
    //FullDom rendering
    component = Enzyme.mount(
        <Root>
            <CommentBox />
        </Root>)
    //Rendering without chlitdrens (only components)
    // component = Enzyme.shallow(<CommentBox />);
});

//Set code to run after each statemnt 'it'
afterEach(() => {
    //Unmout FullDOM
    component.unmount();
});

it('Shows a text area and two buttos inside at CommentBox component', () => {
    //Sprawdzenie czy element 'textarea' z wlasnoscia 'placeholder' zawiera tekst: "Enter a comment..."
    expect(component.find('textarea').at(0).prop('placeholder'))
        .toEqual("Enter a comment...");
    //Sprawdzenie czy element 'button' wystepuje w componencie dokladnie 1 raz
    expect(component.find('button').length).toEqual(2);
})

describe('The textarea test block', () => {
    beforeEach(() => {
        //Wprowadzenie tekstu do elementu 'textarea'
        component.find('textarea').at(0).simulate('change', {
            target: {
                value:"Test chandged!"
            }
        });
        component.update();
    });

    it('Users can enter input into the text area at CommentBox component', () => {
        //Sprawdzenie czy uzytkownik moze wprowadzic tekst do elementu 'textarea'. 
        expect(component.find('textarea').at(0).prop('value'))
            .toEqual("Test chandged!");
    });

    it('When the input is submitted, textarea value should get empty', () => {
        // Sprawdzenie czy po nacisnieciu przez uzytkownika elementy 'button', wartosc elementu 'textarea' zostaje wyczyszczona.
        expect(component.find('textarea').at(0).prop('value'))
            .toEqual("Test chandged!");
        component.find('button.submiteButton').simulate('submit');
        component.update();
        expect(component.find('textarea').at(0).prop('value')).toEqual("");
    });
});