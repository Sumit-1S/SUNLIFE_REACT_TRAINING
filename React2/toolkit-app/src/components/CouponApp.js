import React from 'react';
import { useSelector } from 'react-redux';

function CouponApp(props) {
    const auth = useSelector(state=> state.AuthService.loggedIn)
    return (
        <div>
            {
                auth
                ?
                <div>
                    Your Coupon code is QWERTY1234
                </div>
                :
                <div>
                
                </div>
            }
        </div>
    );
}

export default CouponApp;