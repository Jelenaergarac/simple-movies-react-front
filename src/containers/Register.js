import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {register} from '../store/auth'
import { useHistory } from 'react-router';

const Register = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const[userData, setUserData] = useState({
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register(userData))
        history.push('/movies')
    }

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
                    <h2>Register Here</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        placeholder="Name"
                        required
                        className="form-control"
                        value={userData.name}
                        onChange={({target})=>setUserData({...userData, name:target.value})}
                        />
                           <input
                        type="email"
                        placeholder="Email"
                        required
                        className="form-control"
                        value={userData.email}
                        onChange={({target})=>setUserData({...userData, email:target.value})}
                        />
                           <input
                        type="password"
                        placeholder="Password"
                        required
                        className="form-control"
                        value={userData.password}
                        onChange={({target})=>setUserData({...userData, password:target.value})}
                        />
                           <input
                        type="password"
                        placeholder="Confirm password here"
                        required
                        className="form-control"
                        value={userData.password_confirmation}
                        onChange={({target})=>setUserData({...userData, password_confirmation:target.value})}
                        />
                        <button >Submit</button>

                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Register
