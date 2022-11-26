import CategoryPage from "../components/CategoryPage/CategoryPage";
import AddProduct from "../components/Dashboard/components/AddProduct";
import AdminDashboardBuyer from "../components/Dashboard/components/AdminDashboardBuyer";
import AdminDashboardReportedItems from "../components/Dashboard/components/AdminDashboardReportedItems";
import AdminDashboardSeller from "../components/Dashboard/components/AdminDashboardSeller";
import MyProductDashboard from "../components/Dashboard/components/MyProductDashboard";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login";
import Signup from "../components/Signup";
import DashBoardLayout from "../layout/DashBoardLayout";

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
    errorElement: <>EOOR</>,
    children: [
        {path: '/dashboard',element: <DashBoardLayout></DashBoardLayout>},
        {path: '/dashboard/addproduct',element: <AddProduct></AddProduct>},
        {path: '/dashboard/myproduct',element: <MyProductDashboard></MyProductDashboard>},
        {path: '/dashboard/allbuyer',element: <AdminDashboardBuyer></AdminDashboardBuyer>},
      
        {path: '/dashboard/reported',element: <AdminDashboardReportedItems></AdminDashboardReportedItems>},
        
    ]
}
]);
