const SearchBar = ({search, setSearch, maxLength, setMaxLength ,click , setClick}) => {
    
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }
    
    const filterHandler = () => {
        setClick(++click)
        console.log(click)
    }

    return <>
        <label htmlFor="search">Search Query</label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length">Max Length</label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button onClick={filterHandler} value={click}>Sort Movies</button>
    </>
}

export default SearchBar;