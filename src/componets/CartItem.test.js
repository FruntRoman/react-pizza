import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CartItem from "./CartItem";

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
        render(<CartItem
            namePizza={'Pepperoni'}
            imageUrl={'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg'}
            type={'type'}
            size={'size'}
            totalPrice={200}
            totalCount={5}
        />, container);
    });
    expect(container.querySelector('h3').textContent).toBe("Pepperoni");
    expect(container.querySelector('img').src).toBe("https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg");
    expect(container.querySelector('p').textContent).toBe('type, size sm.');
    expect(container.querySelector('i').textContent).toBe('5');
    expect(container.querySelector('.pizza-cart__item-price').textContent).toBe('200 $');
});