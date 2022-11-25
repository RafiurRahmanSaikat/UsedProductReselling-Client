import CategoryPage from "../components/CategoryPage/CategoryPage";
import AddProduct from "../components/Dashboard/components/AddProduct";
import UserDashboard from "../components/Dashboard/components/UserDashboard";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login";
import Signup from "../components/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Layout } = require("../layout/Layout");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {path:'/',element:<Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/signup',element:<Signup></Signup>},
        {path:'/category/:id',element:<CategoryPage></CategoryPage>},
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <>NAI</>,
    children: [
        {path: '/dashboard',element: <>nai</>},
        {path: '/dashboard/myorders',element: <UserDashboard></UserDashboard>},
        {path: '/dashboard/addproduct',element: <AddProduct></AddProduct>},
        
    ]
}
]);
