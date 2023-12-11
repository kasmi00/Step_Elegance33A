import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Pages/login.tsx";
import Registration from "./Pages/Registration.tsx";
import Home from './Pages/home.tsx';
import Test from './Pages/test.tsx';

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
        },
        {
            path:"/t",
            element:<Test />
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
