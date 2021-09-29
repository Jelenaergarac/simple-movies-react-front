import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout, selectActiveUser, selectIsAuthenticated } from '../store/auth'
import Search from './Search'

const Navbar = () => {

    const isAuthenticated = useSelector(selectIsAuthenticated)
    const activeUser = useSelector(selectActiveUser)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <ul> 
 <li><Link to="/movies" >Movies</Link></li> 
 <li style={{ "marginTop":"15px" }}>
     <Search/>
 </li>

 {isAuthenticated ? (
     <>
 <li><Link to="/add">Add New Movie</Link></li>
 <li style={{ "float":"right", "marginRight":"20px" }}><button onClick={handleLogout}>Logout</button></li>
 <li style={{ "marginLeft":"70px", "marginTop":"20px" }}>{activeUser && <h3>Hello, {activeUser.name}</h3>}</li>
 </>
 ): (
     <>
     <li style={{ "float":"right" }}><Link to="/register">Register</Link></li>
  <li style={{ "float":"right" }}><Link to="/login">Login</Link></li>
  </>
 )}
 
  
</ul>
            
        </div>
    )
}

export default Navbar
