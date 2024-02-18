import { createBrowserRouter } from 'react-router-dom'
import { Paths } from './types/path'
import Billings from '../pages/billings/billings'
import Dashboards from '../pages/dashboards/dashboards'
import Login from '../pages/login/login'
import Signin from '../pages/signin/signin'
import Tabless from '../pages/tabless/tabless'
import Prof from '../pages/profil/profil'
import SignUp from '../pages/signup/signup'
const Router = createBrowserRouter([
    {
        children: [
            {
                path: Paths.Billings,        
                element: <Billings/>
            },
            {
                path: Paths.Dashboards,        
                element: <Dashboards/>
            },
            {
                path: Paths.Login,        
                element: <Login/>
            },
            {
                path: Paths.Signin,        
                element: <Signin/>
            },
            {
                path: Paths.Tabless,        
                element: <Tabless/>
            },
            {
                path: Paths.Profil,        
                element: <Prof/>
            },
            {
                path: Paths.SignUp,        
                element: <SignUp/>
            },
        ]
    }
])
export {Router}