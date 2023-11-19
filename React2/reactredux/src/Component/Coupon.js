import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { login, logout } from '../action/authAction';
import CouponApp from './CouponApp';
import CouponLogin from './CouponLogin';

function Coupon(props) {
    const auth = useSelector(state => state.auth)
    // const authAction = useDispatch()
    return (
        <div>
            <p>Welcome</p>
            {/* {auth ?
                (
                    <div>
                        <p>Coupon code is QWERTY1234</p>  
                        <button onClick={()=>authAction(logout())}>LOGOUT</button>  
                    </div>
                ) : (
                    <button onClick={()=>authAction(login())}>LOGIN</button>
                )
         } */}
            <p><CouponApp/></p>  
            <CouponLogin/>
        </div>
    );
}

export default Coupon;