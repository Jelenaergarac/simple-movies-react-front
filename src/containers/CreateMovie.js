import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { addMovie } from '../store/movies';

const CreateMovie = () => {
    const dispatch = useDispatch()
    const history = useHistory() 
    const {id} = useParams()
    const[movieData, setMovieData] = useState({
        title:'',
        director:'',
        imageUrl:'',
        genre:'',
        releaseDate:'',
        duration:0,
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(
            addMovie({
                movie: movieData,
                onSuccess: (movie) => {
                    history.push(`movies`)
                },
            })
        )
    }

    return (
        <div>
             <div className="row justify-content-center">
                <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
                    <h2>Add New Movie</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                        className="form-control"
                        type="text"
                        placeholder="Title..."
                        value={movieData.title}
                        onChange={({target})=> setMovieData({...movieData, title:target.value})}
                        />
                        <input
                        className="form-control"
                        type="text"
                        placeholder="Director..."
                        value={movieData.director}
                        onChange={({target})=> setMovieData({...movieData, director:target.value})}
                        />
                        <input
                        className="form-control"
                        type="url"
                        placeholder="Image url..."
                        value={movieData.imageUrl}
                        onChange={({target})=> setMovieData({...movieData, imageUrl:target.value})}
                        />
                        <input
                        className="form-control"
                        type="text"
                        placeholder="Genre..."
                        value={movieData.genre}
                        onChange={({target})=> setMovieData({...movieData, genre:target.value})}
                        />
                        <input
                        className="form-control"
                        type="date"
                        placeholder="Release Date..."
                        value={movieData.releaseDate}
                        onChange={({target})=> setMovieData({...movieData, releaseDate:target.value})}
                        />
                        <input
                        className="form-control"
                        type="number"
                        placeholder="Duration..."
                        value={movieData.duration}
                        onChange={({target})=> setMovieData({...movieData, duration:target.value})}
                        />
                        <button>Add</button>

                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default CreateMovie
