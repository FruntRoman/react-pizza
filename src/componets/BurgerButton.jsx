import React from 'react';

const BurgerButton = ({ onClick, className }) => {
    return (
        <div className="wrap">
            <p onClick={onClick} className={"burger-button button " + className}>
            </p>
        </div>
    );
}

export default BurgerButton;
