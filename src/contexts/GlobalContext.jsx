import { createContext } from "react";
import { useEffect, useState } from 'react'
import axios from 'axios'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {

    const [products, setProducts] = useState([])
	const [favorites, setFavorites] = useState([])
	const [cartItms, setCartItms] = useState([])
	const [cartActive, setCartActive] = useState(false)

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find(itm => itm.name === obj.name)) {
				await axios.delete(`https://68b0596e3b8db1ae9c03adbd.mockapi.io/favorite/${obj.id}`)
				setFavorites(prev => prev.filter(itm => itm.name !== obj.name))
			} else {
				const { data } = await axios.post('https://68b0596e3b8db1ae9c03adbd.mockapi.io/favorite', obj)
				setFavorites(prev => [...prev, data])
			}
		} catch (error) {
			alert(error)
		}
	}
	
	async function onAddItmToCart(obj) {
		try {
			if (cartItms.find(itm => itm.name === obj.name)) {
				axios.delete(`https://68aaa9f9909a5835049cb81d.mockapi.io/productsInCart/${obj.id}`)
				setCartItms(prev => prev.filter(item => item.name !== obj.name))
			} else {
				const { data } = await axios.post('https://68aaa9f9909a5835049cb81d.mockapi.io/productsInCart', obj)
				setCartItms(prev => [...prev, data])
			}
		} catch (error) {
			alert(error)
		}
	}

	useEffect(() => {

		async function fetchData() {
			const productsResonse = await axios.get('https://68aaa9f9909a5835049cb81d.mockapi.io/products');
			const cartResonse = await axios.get('https://68aaa9f9909a5835049cb81d.mockapi.io/productsInCart');
			const favoriteResonse = await axios.get('https://68b0596e3b8db1ae9c03adbd.mockapi.io/favorite');

			setProducts(productsResonse.data);
			setCartItms(cartResonse.data);
			setFavorites(favoriteResonse.data);
		}

		fetchData();
    }, [])

    return (
        <GlobalContext.Provider 
            value={{    
                products,
                favorites,
                setFavorites,
                cartItms,
                setCartItms,
                cartActive,
                setCartActive,
                onAddToFavorite,
                onAddItmToCart
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}