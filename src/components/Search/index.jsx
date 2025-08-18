
import styles from './Search.module.scss'

export default function SearchBar() {
    return (
        <div className={styles.search}>
			<img className='mr-5' src="../img/Search.svg" alt="searchicon" />
			<input type="text" placeholder='Поиск...' />
		</div>
    )
}