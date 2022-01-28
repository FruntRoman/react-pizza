import React, {useState} from 'react'

import { Categories, PizzaBlock, Loaded, BurgerButton } from '../componets'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'
import {useIntercom} from "react-use-intercom";


const categories = [
    { name: 'Meat' },
    { name: 'Vegetarian' },
    { name: 'Grille' },
    { name: 'Spicy' },
    { name: 'Closed' }
]


const Main = () => {

    const { boot } = useIntercom();
    let items = useSelector(({ pizzas }) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const [category, setCategory] = useState(null)
    const addedCartItems = useSelector(({ cart }) => cart.items)
    const [sideBar, setSideBar] = React.useState(false)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [dispatch])

    const handleAddPizzaCart = (item) => {
        dispatch(addPizzaToCart(item))
    }

    const handleClickState = () => {
        setSideBar(!sideBar)
    }
    boot();
    return (
        <main className="content">
            <BurgerButton onClick={handleClickState}/>
            <div id="mySidenav" className={sideBar ? "sidenav active" : "sidenav"}>
                <BurgerButton
                    onClick={handleClickState}
                    className='is-open'
                />
                <Categories
                    activeCategory={category}
                    onClickCategory={setCategory}
                    items={categories}
                />

            </div>
            <div className="container sortcat">
                <Categories
                    activeCategory={category}
                    onClickCategory={setCategory}
                    items={categories}
                />
            </div>
            <div className="container">
                <div className="container__title">
                    <h2>All pizzas</h2>
                </div>
            </div>
            <div className="container">
                <div className="content__items">
                    {isLoaded
                        ? items
                            .filter(item => category ? item.category === category : true)
                            .map((obj) =>
                                (<PizzaBlock
                                    key={obj.id}
                                    onClickAddPizza={(obj) => handleAddPizzaCart(obj)}
                                    addedCount={addedCartItems[obj.id] && addedCartItems[obj.id].items.length}
                                    {...obj}
                                />))
                        : Array(12).fill(0).map((_, index) => <Loaded key={index}/>)}
                </div>
            </div>
        </main>
    )
}


export default Main
