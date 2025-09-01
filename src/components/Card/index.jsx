

import styles from './Card.module.scss'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

export default function Card({ name, price, imgURL, id }) {
	const {favorites, cartItms, onAddToFavorite, onAddItmToCart} = useContext(GlobalContext)

	const isAdded = cartItms.some(item => item.name === name)
    const isFavorite = favorites.some(item => item.name === name)

	const makeFavorite = async () => {
		try {
			onAddToFavorite({id, name, price, imgURL})
		} catch (error) {
			alert(error)
		}
	}

	const addToCart = async () => {
		try {
			onAddItmToCart({id, name, price, imgURL})
		} catch (error) {
			alert(error)
		}
	}

    return (
        <div className={styles.card}>
			<div className={styles.container}>

                {
                    isFavorite ? (
                        <div className={styles.favorite}>
					    	<img onClick={makeFavorite} width={26} height={24} src="../img/favor-active.svg" alt="favorActive" />
				        </div>
                    ) : (
                        <div className={styles.favorite}>
					    	<img onClick={makeFavorite} width={26} height={24} src="../../img/favor-unactive.svg" alt="favorUnActive" />
				        </div>
                    )     
                }
								
				<img width={133} height={112} className={styles.image} src={imgURL} alt="sneakerPhoto" />
                <h5 className={styles.name}>{name}</h5>

				<div className='d-flex justify-between align-center'>
					<div className='d-flex flex-column'>
						<span className={styles.price}>Цена:</span>
						<b>{price} руб.</b>
					</div>
					<img 
						className={styles.pointer} 
						onClick={addToCart} 
						src={isAdded ? "../../../img/btn-checked.svg" : "../../../img/btn-unchecked.svg"} 
						alt={isAdded ? "btnChecked" : "btnUnChecked"}
					/>
				</div>
			</div>
		</div>
    )
}