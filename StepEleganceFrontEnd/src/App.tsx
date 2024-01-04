import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/login.tsx";
import Registration from "./Pages/Registration.tsx";
import Home from "./Pages/home.tsx";
import About from "./Pages/about.tsx";
import ForgotPassword from "./Pages/forgotPassword.tsx";
import ContactUs from "./Pages/contactUs.tsx";
import MenPage from "./Pages/MenPage.tsx";
import WomenPage from "./Pages/WomenPage.tsx";
import KidsPage from "./Pages/KidsPage.tsx";


const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword email={""} otp={""} password={""} />,
  },
  {
    path: "/men",
    element: <MenPage />
  },
  {
    path: "/women",
    element: <WomenPage />
  },
  {
    path:"/login",
    element: <KidsPage />
  },

  {
    path: "/contact",
    element: <ContactUs />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
export default App;
