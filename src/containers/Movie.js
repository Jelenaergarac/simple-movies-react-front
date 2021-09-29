import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { selectMovie, getMovie } from '../store/movies'

const Movie = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const movie = useSelector(selectMovie)
 
    useEffect(() => {
        dispatch(getMovie(id))
    },[id])
    if(!movie){
        return null;
    }


    return (
        <div>
            <h1>{movie.title}</h1>
            <h3>{movie.director}</h3>
            <div>
                <img
                width="350px"
                src={movie.imageUrl}
                alt={movie.title}
                />
            </div>
            <p>Genre: {movie.genre}</p>
            <p>Release Date: {movie.releaseDate}</p>
            <p>{movie.duration}min</p>
            
        </div>
    )
}

export default Movie
