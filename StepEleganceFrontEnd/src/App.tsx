import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Pages/login.tsx";
import Registration from "./Pages/Registration.tsx";
import Home from './Pages/home.tsx';

const router = createBrowserRouter(
    [
        {
            path:"/Registration",
            element:<Registration />
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/home",
            element:<Home />
        }
    ]
)

function App(){
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}


export default App
