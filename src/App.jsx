
//Импорт библиотек (Library imports)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'macro-css'

// Импорт компонентов и файлов(scss например) (Component imports and other files, scss, for example)
import './index.scss'
import Card from './components/card.jsx'
import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import Drawer from './components/Drawer.jsx'

export default function App() {
    return (
        <div className='wrapper clear'>

			<Drawer />

            <Header />

			<div className="content">
				<div className="content__container p-40">

					<div className="d-flex justify-between align-center mb-40">
						<h1>Все кроссовки</h1>
						<SearchBar />
					</div>

					<div className="content__products d-flex">

						<Card name={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'12 999 руб.'} imgURL={'../img/productsIMG/nike.jpg'} isFavorite={true}/>

						<Card name={'Мужские Кроссовки Nike Air Max 270'} price={'8 999 руб.'} imgURL={'../img/productsIMG/4.jpg'} isFavorite={false}/>
						
						<Card name={'Мужские Кроссовки Nike Blazer Mid Suede'} price={'9 999 руб.'} imgURL={'../img/productsIMG/3.jpg'} isFavorite={false}/>

						<Card name={'Кроссовки Puma X Aka Boku Future Rider'} price={'17 999 руб.'} imgURL={'../img/productsIMG/2.jpg'} isFavorite={true}/>
						
					</div>
				</div>
			</div>

        </div>
    )
}