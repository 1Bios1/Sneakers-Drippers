
//Импорт библиотек (Library imports)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'macro-css'
import { GlobalContext } from './contexts/GlobalContext.jsx'
import { useContext } from 'react'

// Импорт компонентов и файлов(scss например) (Component imports and other files, scss, for example)
import './index.scss'
import Header from './components/Header.jsx'
import Drawer from './components/Drawer'
import Content from './components/Content/index.jsx'
import Favorite from './components/Favorite'

export default function App() {	

	const { cartActive } = useContext(GlobalContext)

    return (
			<Router>
				<div className='wrapper clear'>

					{cartActive && <Drawer />}

					<Header />

					<Routes>
						<Route 
							index 
							element={
								<Content />
							}
						/>
						<Route 
							path='/favorite-page'
							element={
								<Favorite />
							}
						/>
					</Routes>
				</div>
			</Router>
    )
}