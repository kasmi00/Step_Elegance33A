import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Pages/login.tsx";
import Registration from "./Pages/Registration.tsx";
import Home from './Pages/home.tsx';
import Test from './Pages/test.tsx';
import MenPage from "./Pages/MenPage.tsx";
import WomenPage from "./Pages/WomenPage.tsx";


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
          path:"/mens",
          element:<MenPage />
      },
      {
        path:"/womens",
        element:<WomenPage />
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
