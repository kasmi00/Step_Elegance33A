import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Registration from './Pages/Registration.tsx' ;



const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Registration />
        }
    ]
)
function App() {

    return (
        <>
            <RouterProvider router={router} />

        </>
    )
}
export default App