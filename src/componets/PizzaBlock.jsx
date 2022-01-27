import React from 'react';
import classNames from 'classnames';
import Button from './Button';

const PizzaBlock = ({ id, imageUrl, name, price, types, sizes, onClickAddPizza, addedCount }) => {
    const typeNames = ['thin', 'traditional']
    const typeSizes = [26, 30, 40]
    const [activeType, setActiveType] = React.useState(types[0]);
    const [activeSize, setActiveSize] = React.useState(sizes[0] === typeSizes[0] ? 0 : 1);

    const changeType = (index) => {
        setActiveType(index)
    }
    const changeSize = (index) => {
        setActiveSize(index)
    }
    const addPizzaCart = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: typeSizes[activeSize],
            type: typeNames[activeType]
        };
        onClickAddPizza(obj);
    }
    return (
        <div className="pizza-block">
            <img className="pizza-img" src={imageUrl} alt={name} />
            <div className="pizza-block__title">{name}</div>
            <div className="pizza-block__settings">
                <ul>
                    {typeNames.map((item, index) => <li
                        key={`${item}_${index}`}
                        onClick={() => changeType(index)}
                        className={classNames({
                            'active': activeType === index,
                            'disable': !types.includes(index)
                        })}>{item}</li>)}
                </ul>
                <ul>
                    {typeSizes.map((item, index) => <li
                        key={`${item}_${index}`}
                        onClick={() => changeSize(index)}
                        className={classNames({
                            'active': activeSize === index,
                            'disable': !sizes.includes(item)
                        })} >{item} sm.</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{price ? price : 0} $</div>
                <Button onClick={addPizzaCart} className="button button--added" outline>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                            fill="#EB5A1E" />
                        <path
                            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                            fill="#EB5A1E" />
                    </svg>
                    <span>Add to cart</span>{addedCount ? <i>{addedCount}</i> : ''}

                </Button>
            </div>
        </div>
    );
}

export default PizzaBlock;
