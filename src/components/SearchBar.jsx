

export default function SearchBar() {
    return (
        <div className='search d-flex flex-row align-center'>
			<img className='mr-5' src="../img/Search.svg" alt="searchicon" />
			<input type="text" placeholder='Поиск...' />
		</div>
    )
}