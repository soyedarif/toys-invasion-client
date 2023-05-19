import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const PrivateRoute = ({children}) => {
    const {loading,user}= useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div>Loading</div>
    }
    if(user){
        return children
    }
    return <Navigate state={{from:location}} replace to='/login'></Navigate>
};

export default PrivateRoute;