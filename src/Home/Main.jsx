import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className='font-Poppins '>
            <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
            <Footer></Footer>
            <ToastContainer />

        </div>
    );
};

export default Main;