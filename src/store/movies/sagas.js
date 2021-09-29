import {takeLatest, call, put} from '@redux-saga/core/effects'
import {
    getMovies,
    setMovies,
    getMovie, 
    setMovie,
    
} from './slice'
import MovieService from '../../services/MovieService'
import { addMovie } from '.'

function* handleGetMovies(action){
    try{
        const movies = yield call(MovieService.getMovies, action.payload)
        yield put(setMovies(movies))

    }catch(error){
        console.error(error)
    }
}
function* handleGetMovie(action){
    try{
        const movie= yield call(MovieService.getMovie, action.payload)
        yield put(setMovie(movie))

    }catch(error){
        console.error(error)
    }
}

function* handleAddMovie(action){
    try{
        const movie = yield call(MovieService.addMovie, action.payload.movie)
        if(action.payload.onSuccess){
            yield call(action.payload.onSuccess, movie)
        }
    }catch(error){
        console.error(error)
    }
}

//watchers

export function* watchGetMovies(){
    yield takeLatest(getMovies.type, handleGetMovies)
}
export function* watchGetMovie(){
    yield takeLatest(getMovie.type, handleGetMovie)
}
export function* watchAddMovie(){
    yield takeLatest(addMovie.type, handleAddMovie)
}