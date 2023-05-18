import { Link, NavLink } from "react-router-dom";
import logo from "../../public/logo.png";

const NavigationBar = () => {
  const navList = (
    <>
      <li>
        <NavLink>Item 1</NavLink>
      </li>
      <li>
      <NavLink>Item 2</NavLink>
      </li>
      <li>
      <NavLink>Item 3</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base container mb-10 text-[#f8f9fa] mx-auto">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navList}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="w-12 flex">
            <img src={logo} alt="" />
            <p className="text-base">Toys Invasion</p>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default NavigationBar;
