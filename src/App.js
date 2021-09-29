import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './containers/Register'
import Login from './containers/Login'
import AllMovies from './containers/AllMovies';
import Movie from './containers/Movie'
import { getActiveUser } from './store/auth';
import { useEffect } from 'react';
import store from './store'
import CreateMovie from './containers/CreateMovie';


function App() {
  useEffect(() => {
    if(localStorage.getItem('token')){
      setTimeout(() => {
        store.dispatch(getActiveUser())
      }, 500);
    }
  },[])
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/register">
              <Register />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
             <Route exact path="/movies">
              <AllMovies />
          </Route>
          <Route exact path="/movies/:id">
              <Movie />
          </Route>
            <Route exact path="/add">
              <CreateMovie />
          </Route>
           <Route  path="/">
              <Redirect to="/movies" />
          </Route>
           <Route  path="*">
              <p>Page not found</p>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
