import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import Login  from '../components/modules/Login/Login'
import MyRoutes  from './Routes';




export const AppRouter = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } 
                />
                

                <Route path="/*" element={ 
                        <PrivateRoute>
                            <MyRoutes  />
                        </PrivateRoute>
                    } 
                />


            </Routes>
        </BrowserRouter>
    )
}