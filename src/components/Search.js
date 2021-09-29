import React,{useState, useEffect, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import { getMovies } from '../store/movies'
import _ from 'lodash'
const Search = () => {
    const[searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()
    const handleChangeSearch = (e) => {
        setSearchTerm(e.target.value)
    }
    const search = (searchTerm) => {
        if(!searchTerm || searchTerm.length > 2) {
            dispatch(getMovies(searchTerm))
        }
    }
    const debouncedSearch = useCallback(_.debounce(search,500),[])
    useEffect(() => {
        debouncedSearch(searchTerm)
    },[searchTerm])
    return (
        <div>
            <input
            type="text"
            onChange={handleChangeSearch}
            placeholder="Search movies..."
            />
            
        </div>
    )
}

export default Search
