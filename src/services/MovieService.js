import HttpService from './HttpService'

class MovieService extends HttpService {
    getMovies = async (title ='') => {

        let endpoint = `/movies`
        if(title){
            endpoint+=`?title=${title}`
        }
        const {data} = await this.client.get(endpoint)
        return data;
    }
    getMovie = async(id) => {
        const {data} = await this.client.get(`/movies/${id}`)
        return data;
    }
    addMovie = async (movieData) => {
        const {data} = this.client.post('/movies', movieData)
        return data;
    }
    deleteMovie = async (id) => {
        const {data} = await this.client.delete(`/movies/${id}`)
        return data;
    }
}

export default new MovieService()