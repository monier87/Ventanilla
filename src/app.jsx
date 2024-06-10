import { useEffect, useReducer } from 'react';
import { AuthContext } from '../src/components/auth/authContext';
import { authReducer } from '../src/components/auth/authReducer';
import MyRoutes from './routes/Routes';

const init = () => {
    return JSON.parse( localStorage.getItem('usuario') ) || { logged: false };
}
const App = () => {

    const [ usuario , dispatch ] = useReducer( authReducer, {}, init );

    useEffect(() => {
        if ( !usuario ) return;

        localStorage.setItem('usuario ', JSON.stringify(usuario) );
    }, [ usuario ])


    return (
        <AuthContext.Provider value={{
            usuario,
            dispatch
        }}>
            <MyRoutes/>
        </AuthContext.Provider>
    )
}

export default App;