import React from 'react';
import Enzyme from 'enzyme';
import Root from 'root';
import Moxios from 'moxios';

import App from 'components/App/App'

beforeEach(() => {
    /*
    Nie wykorzystujac moxios odpytuje o faktyczne dane z API. W przypadku gdy wiadoma jest liczba zwracanych danych mozna nie wykorzystywac moxios, w przeciwnym wypadku trzeba sie nim posluzyc. 
    Przy tworzeniu odpowiedzi nalezy pamietac o prawidlowym utwrzeniu pola 'response' dla odpowiedzi. :)
    */ 
    Moxios.install();
    Moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{body: 'Fetched 1'},{body: 'Fetched 2'}]
    });
});

afterEach(() => {
    Moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    //Wyrenderuja caly komponent app
    const component = Enzyme.mount(
        <Root>
            <App />
        </Root>
    );

    //znajdz przycisk fetchComments i nacisnij go
    component.find('button.fetchButton').simulate('click');
    // nalezy wykonac mala przerwe bo Moxios musi zwrocic dane do reduxa po nacisnieciu przycisku
    //setTimeout(() => { 
    //zamiast setTimeout mozna wykorzystac Moxios.wait()
    Moxios.wait(() => {
        //oczekuj, ze znajdziesz liste komentarzy
        component.update();
        expect(component.find('li').length).toEqual(2);

        //Powiedzienie enzym, ze okej skonczylismy sprawdzac ten test!
        done();
        //odmontuj dom
        component.unmount();
    });
        //}, 500);
})