import React from "react";
import CartItem from "../CartItem";
import renderer from "react-test-renderer";

describe('BurgerButton component:', () => {
    const mockData = {
        namePizza: 'Pizza',
        imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
        type: 0,
        size: 26,
        totalPrice: 300,
        totalCount: 8,
        itemId: 1,
        onRemovePizza: () => console.log('Remove'),
        countIncrease: () => console.log('Increase'),
        countDecrease:  () => console.log('Decrease')
    }
    test('renders', () => {
        const component = renderer.create(
            <CartItem {...mockData} />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})