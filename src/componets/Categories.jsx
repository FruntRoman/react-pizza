import React from 'react';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
    return (
        <div className="categories categories--sidebar">
            <ul>

                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => { onClickCategory(null) }}>Все
                </li>
                {items && items.map((item, index) => {

                    return (
                        <li className={activeCategory === index ? 'active' : ''}
                            onClick={() => { onClickCategory(index) }}
                            key={`${item.name}_${index}`}>{item.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
})

export default Categories;