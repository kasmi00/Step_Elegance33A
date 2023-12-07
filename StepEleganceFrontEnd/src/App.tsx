import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/login.tsx";
import Home from "./pages/home.tsx";

const router = createBrowserRouter(
    [
      {
        path:"/",
        element : <Home />
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
