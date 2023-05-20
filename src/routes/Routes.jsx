import { createBrowserRouter } from "react-router-dom";
import Main from "../Home/Main";
import Home from "../Home/Home";
import Blog from "../components/Blog";
import Login from "../userAuth/Login";
import Register from "../userAuth/Register";
import AddToy from "../components/AddToy";
import MyToys from "../components/MyToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../components/AllToys/AllToys";
import ViewToy from "../components/ViewToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch(`http://localhost:5000/toys?limit=20`),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path:'toys/:id',
        element:<ViewToy></ViewToy>,
        loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
      }
    ],
  },
]);

export default router;
