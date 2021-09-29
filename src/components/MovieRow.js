import React from 'react'

const MovieRow = ({movie}) => {
    return (
        <div>
            <img
            src={movie.imageUrl}
            width="300px"
            alt="movie"
            />
            <p>{movie.title}</p>
            <p>{movie.director}</p>
            
        </div>
    )
}

export default MovieRow
