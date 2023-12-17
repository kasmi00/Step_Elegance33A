import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Pages/login.tsx";
import Registration from "./Pages/Registration.tsx";
import Home from './Pages/home.tsx';
import Test from './Pages/test.tsx';

const router = createBrowserRouter(
    [
      {
        path:"/registration",
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
            path:"/t",
            element:<Test />
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
