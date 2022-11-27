import Blog from "../common/Blog";
import Error404 from "../common/Error404";
import CategoryPage from "../components/CategoryPage/CategoryPage";
import AddProduct from "../components/Dashboard/components/AddProduct";
import AdminDashboardBuyer from "../components/Dashboard/components/AdminDashboardBuyer";
import AdminDashboardReportedItems from "../components/Dashboard/components/AdminDashboardReportedItems";
import MyProductDashboard from "../components/Dashboard/components/MyProductDashboard";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login";
import Payment from "../components/Payment/Payment";
import Signup from "../components/Signup";
import DashBoardLayout from "../layout/DashBoardLayout";
import PrivateRoute from "./PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Layout } = require("../layout/Layout");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error404></Error404>,
    children: [
        {path:'/',element:<Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/blogs',element:<Blog></Blog>},
        {path:'/signup',element:<Signup></Signup>},
        {path:'/category/:id',element:<PrivateRoute><CategoryPage></CategoryPage></PrivateRoute>},
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <>EOOR</>,
    children: [
        {path: '/dashboard',element: <DashBoardLayout></DashBoardLayout>},
        {path: '/dashboard/addproduct',element: <AddProduct></AddProduct>},
        {path: '/dashboard/myproduct',element: <MyProductDashboard></MyProductDashboard>},
        {path: '/dashboard/allbuyer',element: <AdminDashboardBuyer></AdminDashboardBuyer>},
        {path: '/dashboard/reported',element: <AdminDashboardReportedItems></AdminDashboardReportedItems>},
        {path: '/dashboard/payment/:id',element: <Payment></Payment>},
        
    ]
}
]);
