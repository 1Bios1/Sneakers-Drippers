
//Импорт библиотек (Library imports)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'macro-css'

// Импорт компонентов и файлов(scss например) (Component imports and other files, scss, for example)
import './index.scss'
import Card from './components/Card'
import Header from './components/Header.jsx'
import Search from './components/Search'
import Drawer from './components/Drawer'

const productsArr = [
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede', 
		price: 12999, 
		imgURL:'../img/productsIMG/nike.jpg', 
		isFavorite: true,
		id: 1,
	},
	{
		name: 'Мужские Кроссовки Nike Air Max 270', 
		price: 10399, 
		imgURL:'../img/productsIMG/2.jpg', 
		isFavorite: false,
		id: 2,
	},
	{
		name: 'Мужские Кроссовки Nike Blazer Mid Suede', 
		price: 8499, 
		imgURL:'../img/productsIMG/3.jpg', 
		isFavorite: false,
		id: 3,
	},
]

export default function App() {
    return (
        <div className='wrapper clear'>

			<Drawer />

            <Header />

			<div className="content">
				<div className="content__container p-40">
					<div className="d-flex justify-between align-center mb-40">
						<h1>Все кроссовки</h1>
						<Search />
					</div>

					<div className="content__products d-flex">
						{
							productsArr.map((product) => {
								return <Card 
										name={product.name} 
										price={product.price} 
										imgURL={product.imgURL} 
										isFavorite={product.isFavorite}
										id={product.id}
									/>
							})
						}
					</div>
				</div>
			</div>

        </div>
    )
}