import React from "react";
import BurgerButton from "../BurgerButton";
import renderer from "react-test-renderer";

describe('BurgerButton component:', () => {
    test('renders', () => {
        const component = renderer.create(
            <BurgerButton/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})