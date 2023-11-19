import React from 'react';
import BrowserRoutes from './BrowserRoutes';



function LandingPage(props) {
    return (
        <div>
            LandingPage
            <BrowserRoutes/>
        </div>
    );
}


// const Header=()=>{
//     return(
//         <div>
//             <NavLink to="/" exact={true}>
//                 Login
//             </NavLink>
//             <NavLink to="/register" exact={true}>
//                 Register
//             </NavLink>
//             <NavLink to="/userDetails" exact={true}>
//                 User Details
//             </NavLink>
//             <NavLink to="/portfolio" exact={true}>
//                 Portfolio
//             </NavLink>
//         </div>
//     )
// }



// const routes = (
//     <BrowserRouter>
//     <div>
//         <HeaderComp/>
//         <Switch>
//             <Route path='/' component={Login} exact={true}/>
//             <Route path='/register' component={Register}/>
//             <Route path='/portfolio' component={Portfolio}/>
//             <Route path='/userDetails' component={UserDetails}/>
//             <Route component={PageNotFound}/>
//         </Switch>
//         </div>
//     </BrowserRouter>
// )

export default LandingPage;