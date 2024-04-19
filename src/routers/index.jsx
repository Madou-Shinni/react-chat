import React, {lazy} from "react";
import {Navigate, useRoutes} from "react-router-dom";


const Login = lazy(()=>import('@/pages/login/Login.jsx'));
const Home = lazy(()=>import('@/pages/home/Home.jsx'));

const Router = React.memo(()=>{
    const element = useRoutes(
        [
            {
                path:'/',
                element: <Home/>,
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'*',
                element: <Navigate to={'/login'}/>
            },
        ]
    )
    return <React.Suspense>{element}</React.Suspense>
})

export default Router