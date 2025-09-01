
import Card from '../Card'
import Search from '../Search'
import { useState } from 'react'


export default function Content({ onAddToFavorite, onAddItmToCart, products, favorites, cartItms }) {

    const [searchValue, setSearchValue] = useState('')

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    return (
        <div className="content">
            <div className="content__container p-40">
                <div className="d-flex justify-between align-center mb-40">
                    <h1>{searchValue ? searchValue : 'Все кроссовки'}</h1>
                    <Search onChangeSearchInput={onChangeSearchInput} searchValue={searchValue} setSearchValue={setSearchValue}/>
                </div>
        
                <div className="content__products d-flex flex-wrap">
                    {
                        products
                            .filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((product) => {
                                return (
                                    <Card 
                                        key={product.id}
                                        onAddItmToCart={(obj) => onAddItmToCart(obj)}
                                        onAddToFavorite={(obj) => onAddToFavorite(obj)}
                                        favorited={favorites.some(itm => Number(itm.id) === Number(product.id))}
                                        added={cartItms.some(itm => Number(itm.id) === Number(product.id))}
                                        {...product}
                                    />
                                ) 
                            })
                    }
                </div>
            </div>
        </div>
    )
}