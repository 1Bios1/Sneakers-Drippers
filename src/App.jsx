
//Импорт библиотек (Library imports)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'macro-css'
import { useEffect, useState } from 'react'
import axios from 'axios'

// Импорт компонентов и файлов(scss например) (Component imports and other files, scss, for example)
import './index.scss'
import Header from './components/Header.jsx'
import Drawer from './components/Drawer'
import Content from './components/Content/index.jsx'
import Favorite from './components/Favorite'

export default function App() {

	const [products, setProducts] = useState([])
	const [favorites, setFavorites] = useState([])
	const [cartItms, setCartItms] = useState([])
	const [cartActive, setCartActive] = useState(false)

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find(itm => itm.name === obj.name)) {
				axios.delete(`https://68b0596e3b8db1ae9c03adbd.mockapi.io/favorite/${obj.id}`)
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
        axios.get('https://68aaa9f9909a5835049cb81d.mockapi.io/products')
            .then(res => setProducts(res.data))
        
        axios.get('https://68aaa9f9909a5835049cb81d.mockapi.io/productsInCart')
            .then(res => setCartItms(res.data))

		axios.get('https://68b0596e3b8db1ae9c03adbd.mockapi.io/favorite')
			.then(res => setFavorites(res.data))
    }, [])

    return (
		<Router>
			<div className='wrapper clear'>
				{cartActive && <Drawer onCloseCart={() => setCartActive(false)} cartItms={cartItms} setCartItms={setCartItms}/>}

                <Header onOpenCart={() => setCartActive(true)} />

				<Routes>
					<Route 
						index 
						element={
							<Content 
								onAddItmToCart={onAddItmToCart} 
								onAddToFavorite={onAddToFavorite} 
								products={products} 
								cartItms={cartItms}
								favorites={favorites} 
								setFavorites={setFavorites}
							/>
						}
					/>
					<Route 
						path='/favorite-page'
						element={
							<Favorite favorites={favorites } 
								onAddItmToCart={onAddItmToCart} 
								onAddToFavorite={onAddToFavorite} 
								cartItms={cartItms}
							/>
						}
					/>
				</Routes>
			</div>
		</Router>
    )
}