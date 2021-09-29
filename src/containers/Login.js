import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import {login} from '../store/auth'

const Login = () => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(credentials))
        history.push('/movies')
    }
    
    
    return (
        

        <div>
         <div className="row justify-content-center">
                <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
                    <h2>Login Here</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                        className="form-control"
                        required
                        type="email"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={({target})=> setCredentials({...credentials, email:target.value}) }
                        />
                        <input
                        className="form-control"
                        required
                        type="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={({target})=> setCredentials({...credentials, password:target.value}) }
                        />
                        <button >Submit</button>


                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login
