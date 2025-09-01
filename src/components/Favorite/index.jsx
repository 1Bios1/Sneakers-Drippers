
import styles from './Favorite.module.scss'
import Card from '../Card'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalContext'
import { useContext } from 'react'

export default function Favorite() {

    const { favorites, onAddToFavorite, onAddItmToCart } = useContext(GlobalContext)

    return (
        <div className='p-40'>
            <div className="d-flex justify-between align-center mb-40">
                <h1>Мои закладки</h1>
            </div>
            {
                favorites.length > 0 ? (
                    <div className={styles.container}>
                        {
                            favorites.map((itm)=> {
                                return  (
                                    <Card 
                                        key={itm.id}
                                        onAddItmToCart={(obj) => onAddItmToCart(obj)}
                                        onAddToFavorite={(obj) => onAddToFavorite(obj)}
                                        {...itm}
                                    />
                                ) 
                            })
                        }
                    </div>
                ) : (
                    <div className="d-flex flex align-center justify-center">
                        <div className={styles.text}>
                            <img src="../../../img/emoji-sad.svg" alt="sademoji" />

                            <div className="mb-50">
                                <h1>Закладок нет</h1>
                                <span className='opacity-5'>вы ничего не добавили в закладки</span>
                            </div>

                            <Link to='/'>
                                <button className='greenbtn d-flex flex-row justify-center align-center'>
                                    Вернуться
                                    <div className="arrowLeft">
                                        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.7144 7L1.00007 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M7 13L1 7L7 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}