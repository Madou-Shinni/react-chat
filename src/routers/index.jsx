import React, {lazy} from "react";
import {Navigate, Routes,Route} from "react-router-dom";
import AuthRoute from "./auth.jsx";


const Login = lazy(()=>import('@/pages/login/Login.jsx'));
const Home = lazy(()=>import('@/pages/home/Home.jsx'));

const Router = React.memo(()=>{
    const routers = [
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/home',
                element: <Home/>,
                auth: true
            },
            {
                path:'*',
                element: <Navigate to={'/login'}/>
            },
    ]

    // 处理我们的routers
    const RouteAuthFun = (routeList) => {
            return routeList.map(({path,auth,element,children}) => {
            return (
                <Route
                    path={path}
                    element={
                        <AuthRoute auth={auth} key={path} routers={routers}>
                            {element}
                        </AuthRoute>
                    }
                    key={path}
                >
                    {/* 递归调用，因为可能存在多级的路由 */}
                    {children && RouteAuthFun(children)}
                </Route>
            );
        })
    }

    return <React.Suspense><Routes>{RouteAuthFun(routers)}</Routes></React.Suspense>
})

export default Router