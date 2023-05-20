import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div className='font-Poppins '>
            <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;