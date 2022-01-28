import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "./Button";

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
        render(<Button>Button, Jenny!</Button>, container);
    });
    expect(container.textContent).toBe("Button, Jenny!");
});

it("works with different props", () => {
    act(() => {
        render(<Button disabled>Button, Jenny!</Button>, container);
    });
    expect(container.querySelector('button').disabled).toBeTruthy();
    act(() => {
        render(<Button>Button, Jenny!</Button>, container);
    });
    expect(container.querySelector('button').disabled).not.toBeTruthy();

    act(() => {
        render(<Button className={'btn'}>Button, Jenny!</Button>, container);
    });
    expect(container.querySelector('button').className).toBe('button btn');
});