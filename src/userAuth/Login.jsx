import { Link, useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../shared/NavigationBar";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";


const Login = () => {
    const {signinUser,googleLogin}=useContext(AuthContext)
    const navigate = useNavigate();
    const location= useLocation();
    const from=location?.state?.from?.pathname || '/'
    const [error,setError]=useState('')

    const handleLogin=e=>{
        e.preventDefault()
        setError('')
        const form=e.target;
        const email=form.email.value
        const password=form.password.value
        signinUser(email,password)
        .then(result=>{
          const loggedUser=result.user;
          navigate(from, {replace:true})
        }).catch(error=>setError(error.message))
      }
      const handleGoogleLogin=()=>{
        googleLogin()
        .then(result=>{
            const loggedUser=result.user;
            navigate(from, {replace:true})
          }).catch(error=>{
            setError(error)
          })
    }
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  gap-7 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login and Invade!</h1>
            <p className="py-6">Immerse Yourself in a World of Wonder and Play! Explore a captivating assortment of toys, <br /> each one a gateway to thrilling adventures and limitless possibilities.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input required name="email" type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input required name="password" type="password"  placeholder="password" className="input input-bordered" />
                
              </div>
              <p className='mb-2 text-sm'>New to invasion? <Link className='text-blue-500' to="/register">Register</Link></p>
              <div>
              <p className="text-error">{error}</p>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <div className="text-center pb-4">
            <button onClick={handleGoogleLogin}className="btn btn-success"><FaGoogle/> <span className="ml-4">Google Login</span></button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default Login;