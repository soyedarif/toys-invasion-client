import { Link, useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../shared/NavigationBar";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";


const Register = () => {
    const {googleLogin,registerUser,updateUserProfile}=useContext(AuthContext)
    const navigate = useNavigate();
    const location= useLocation();
    const from=location?.state?.from?.pathname || '/'

    const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
    const handleRegister=(e)=>{
        e.preventDefault();
        setSuccess("");
        setError("");
        const form = e.target;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const rePassword = form.rePassword.value;
    
        if (!/(?=.*[A-Z])/.test(password)) {
          setError("Please add at least one uppercase");
          return;
        }else if(password!==rePassword){
            setError("Passwords from both field has to similar")
            return
        } else if (!/(?=.*[0-9])/.test(password)) {
          setError("Please add at least two numbers");
          return;
        } else if (password.length < 6) {
          setError("Please add at least 6 characters");
          return;
        }
        registerUser(email,password)
        .then(result=>{
         const newUser=result.user
         console.log(newUser);
         updateUserProfile(displayName,photoURL)
         e.target.reset();
         setSuccess("User has been created succesfully");
         
        }).catch(error=>{
          console.log(error);
        })
        
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
            <h1 className="text-5xl font-bold">Register and Invade!</h1>
            <p className="py-6">Immerse Yourself in a World of Wonder and Play! Explore a captivating assortment of toys, <br /> each one a gateway to thrilling adventures and limitless possibilities.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" required name='displayName' placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" required name='photoURL' placeholder="photo" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" required placeholder="password" className="input input-bordered" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Re-Type Password</span>
                </label>
                <input name='rePassword' type="password" required placeholder="password" className="input input-bordered" />
                
              </div>
              <p className='mb-4 text-sm'>Already an invador? <Link className='text-blue-500' to="/login">Login</Link></p>
              <div>
              <p className="text-error">{error}</p>
          <p className="text-successtext-center">{success}</p>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Register" />
              </div>
            </form>
            <div className="text-center pb-4">
            <button onClick={handleGoogleLogin} className="btn btn-success"><FaGoogle/> <span className="ml-4">Google Login</span></button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default Register;