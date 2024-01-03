import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Pages/login.tsx";
import Registration from "./Pages/Registration.tsx";
import Home from './Pages/home.tsx';
import About from "./Pages/about.tsx";
import ForgotPassword from "./Pages/forgotPassword.tsx";


const router = createBrowserRouter(
    [
      {
        path:"/register",
        element : <Registration />
      },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/",
            element:<Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
            path:"/forgot",
            element:<ForgotPassword />
        }
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
