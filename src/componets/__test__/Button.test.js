import React from "react";
import Button from "../Button";
import renderer from "react-test-renderer";

describe('Button component:', () => {
    test('renders', () => {
        const component = renderer.create(
            <Button/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})