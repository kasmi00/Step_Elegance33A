import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/login.tsx";
import Registration from "./Pages/Registration.tsx";
import Home from "./Pages/home.tsx";
import About from "./Pages/about.tsx";
import ForgotPassword from "./Pages/forgotPassword.tsx";
import ContactUs from "./Pages/contactUs.tsx";

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
