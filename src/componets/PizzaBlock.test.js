import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import PizzaBlock from "./PizzaBlock";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or with proper text", () => {
    act(() => {
        render(<PizzaBlock
            namePizza={'Pepperoni'}
            imageUrl={'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg'}
            types={[0, 1]}
            sizes={[26, 30, 40]}
            name={'Pizza'}
            price={10}
        />, container);
    });
    expect(container.querySelector('img').src).toBe("https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg");
    // expect(container.querySelector('p').textContent).toBe('type, size sm.');
    expect(container.querySelector('.pizza-block__price').textContent).toBe('10 $');
    expect(container.querySelector('.pizza-block__title').textContent).toBe('Pizza');

    act(() => {
        render(<PizzaBlock
            namePizza={'Pepperoni'}
            imageUrl={'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg'}
            types={[0, 1]}
            sizes={[26, 30, 40]}
            name={'Pizza'}
        />, container);
    });
    expect(container.querySelector('.pizza-block__price').textContent).toBe('0 $');
});