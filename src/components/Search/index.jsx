
import styles from './Search.module.scss'

export default function SearchBar({ onChangeSearchInput, searchValue, setSearchValue }) {

    return (
        <div className={styles.search}>
			<img className='mr-5' src="../img/Search.svg" alt="searchicon" />
			<input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder='Поиск...' />
            { searchValue && <img onClick={() => setSearchValue('')} className='clear cu-p' src="../img/Remove.svg" alt="clearInputBtn" /> }
		</div>
    )
}