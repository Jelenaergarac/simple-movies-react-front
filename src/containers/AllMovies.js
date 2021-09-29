import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getMovies, selectMovies} from '../store/movies'
import { Link } from 'react-router-dom'
import MovieRow from '../components/MovieRow'

const AllMovies = () => {
   

    const movies = useSelector(selectMovies)
    const dispatch = useDispatch()

    const[sortCriteria, setSortCriteria] = useState('id')
    const[sortDirection, setSortDirection] = useState(1)
     
    const sortedMovies = [...movies.data].sort((m1,m2)=> {
        if(m1[sortCriteria]< m2[sortCriteria]){
            return -1 * sortDirection
        }
        if(m1[sortCriteria] > m2[sortCriteria]){
            return 1 * sortDirection
        }
        return 0
    })

    useEffect(() => {
        
        dispatch(getMovies())
        
      


    },[])

    function sortBy(criteria){
        setSortCriteria(criteria)

        if(criteria === sortCriteria){
            setSortDirection(-1 * sortDirection)
        }else{
            setSortDirection(1)
        }
    }



    return (
        <div>
            <h2>List of Movies</h2>
            {sortedMovies.length ? (
                <div>
                    <div>
                        <span onClick={()=> sortBy('title')}>Title</span>
                        <span onClick={()=> sortBy('director')}>Director</span>
                    </div>
                    <div className="movies">
                        {sortedMovies.map((movie)=>(
                            <Link key={movie.id} to={`/movies/${movie.id}`}>
                            <MovieRow key={movie.id} movie={movie} />
                            </Link>
                        ))}
                    </div>
                    </div>
            ):(
                <div>Oops! There are no movies with this title!</div>
            )}
        </div>
    )
}

export default AllMovies
