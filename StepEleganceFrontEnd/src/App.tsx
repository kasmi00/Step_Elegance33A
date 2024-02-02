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
import AdminPanel from "./Pages/adminpanel.tsx";
import AdminDashboard from "./components/admindashboard.tsx";
import Whishlist from "./components/wishlist.tsx";
import Sizechart from "./Pages/sizechart.tsx";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

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
    element: <MenPage />,
  },
  {
    path: "/women",
    element: <WomenPage />,
  },
  {
    path: "/kids",
    element: <KidsPage />,
  },

  {
    path: "/contact",
    element: <ContactUs />,
  },

  {
    path: "/adminpanel",
    element: <AdminPanel />,
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard />,
  },

  {
    path: "/whishlist",
    element: <Whishlist />,
  },
  {path:"/sizechart",
element:<Sizechart/>,
},
]);

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}
export default App;
