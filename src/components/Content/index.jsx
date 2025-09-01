
import Card from '../Card'
import Search from '../Search'
import { useState, useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'



export default function Content() {

    const { products, onAddToFavorite, onAddItmToCart } = useContext(GlobalContext)

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