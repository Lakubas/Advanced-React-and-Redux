import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';

//Components
import App from 'components/App/App';
import CommentBox from 'components/Comment/CommentBox'
import CommentList from 'components/Comment/CommentList'

//Initialize global component variable.
let component;

//Set code to run before each statemnt 'it'
beforeEach(() => {
    component = Enzyme.shallow(<App />);
});

it('Shows a App title inside at App component', () => {
    //Sprawdzenie czy element 'h1' zawiera tekst: "I'm the Comment App!"
    expect(component.find('h1').text()).toEqual("I'm the Comment App!");
})

it('Shows a CommentBox inside at App component', () => {
    // let component = Enzyme.shallow(<App />);
    //Sprawdzenie czy komponent występuje w App dokladnie 1 raz
    expect(component.find(CommentBox).length).toEqual(1);
});
it('Shows a CommentList inside at App component', () => {
    // let component = Enzyme.shallow(<App />);
    //Sprawdzenie czy komponent występuje w App dokladnie 1 raz
    expect(component.find(CommentList).length).toEqual(1);
});