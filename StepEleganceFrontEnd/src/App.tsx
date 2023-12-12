import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Pages/login.tsx";
import Home from "./Pages/home.tsx";
import Registration from './Pages/Registration.tsx';

const router = createBrowserRouter(
    [
      {
        path:"/",
        element : <Registration />
      },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/home",
            element:<Home/>
        },

    ]
)
function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
export default App
