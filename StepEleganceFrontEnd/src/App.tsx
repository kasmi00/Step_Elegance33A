import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Pages/login.tsx";
import Registration from "./Pages/Registration.tsx";

const router = createBrowserRouter(
    [
        {
            path:"/Registration",
            element:<Registration />
        },
        {
            path:"/login",
            element:<Login />
        }]
)
export default App
