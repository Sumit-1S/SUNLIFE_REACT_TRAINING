import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/LoginLogout';


function CouponLogin(props) {
    const auth = useSelector(state=> state.AuthService.loggedIn)
    const authAction = useDispatch()
    return (
        <div>
            {
                auth?(
                    <button onClick={()=>authAction(logout())}>LOGOUT</button>  
                ):(
                    <button onClick={()=>authAction(login())}>LOGIN</button>
                )
            }
        </div>
    );
}

export default CouponLogin;