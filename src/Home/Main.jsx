import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='font-Poppins '>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;