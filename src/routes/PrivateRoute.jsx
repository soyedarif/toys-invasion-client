import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {loading,user}= useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <Loading/>
    }
    if(!user){
        toast.error('Please login to View', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }else{
        return children;
    }
    return (
    <Navigate state={{from:location}} replace to='/login'></Navigate>
    )
};

export default PrivateRoute;