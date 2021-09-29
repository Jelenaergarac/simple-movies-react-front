import {takeLatest, call, put} from '@redux-saga/core/effects'
import {
    register,
    login,
    logout,
    setToken,
    setActiveUser,
    getActiveUser,
} from './slice'
import UserService from '../../services/UserService'


function* handleRegister(action){
    try{
        const {user, token} = yield call(UserService.register, action.payload)
        yield put(setActiveUser(user))
        yield put(setToken(token))

    }catch(error){
        console.log(error)
    }
}
function* handleLogin(action){
    try{
        const{user, token} = yield call(UserService.login, action.payload)
        yield put(setActiveUser(user))
        yield put(setToken(token))

    }catch(error){
        console.error(error)
    }
}

function* handleLogout(){
    try{
        yield call(UserService.logout)
        yield put(setActiveUser(null))
        yield put(setToken(null))

    }catch(error){
        console.error(error)
    }
}

function* handleActiveUser(){
    try{
        const activeUser = yield call(UserService.getActiveUser)
        yield put(setActiveUser(activeUser))

    }catch(error){
        console.log(error)
    }
}

//watchers

export function* watchRegister(){
    yield takeLatest(register.type, handleRegister)
}
export function* watchLogin(){
    yield takeLatest(login.type, handleLogin)
}
export function* watchLogout(){
    yield takeLatest(logout.type, handleLogout)
}
export function* watchGetActiveUser(){
    yield takeLatest(getActiveUser.type, handleActiveUser)
}