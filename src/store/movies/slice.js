import { createSlice } from "@reduxjs/toolkit";

const middlewareActions = {
    getMovies(){},
    getMovie(){},
    addMovie(){},
   
}
const moviesSlice = createSlice({
    name:'movies',
    initialState: {
        page:{
            data:[],
            current_page:0,
            last_page:0,
        },
        selectedMovie: null,
    },
    reducers: {
        setMovies(state, action){
            state.page = action.payload
        },
        setMovie(state, action){
            state.selectedMovie = action.payload
        },
        ...middlewareActions,
    },
});

export default moviesSlice.reducer;
export const {
 getMovies, setMovies, getMovie, setMovie, addMovie, deleteMovie

} = moviesSlice.actions
