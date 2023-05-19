import { createBrowserRouter } from "react-router-dom";
import Main from "../Home/Main";
import Home from "../Home/Home";
import Blog from "../components/Blog";
import Login from "../userAuth/Login";
import Register from "../userAuth/Register";
import AddToy from "../components/AddToy";
import AllToys from "../components/AllToys";
import MyToys from "../components/MyToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path:'/addToy',
          element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
          path:'/allToys',
          element: <AllToys></AllToys>
        },
        {
          path: '/myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        }
      ]
    },
  ]);

export default router;