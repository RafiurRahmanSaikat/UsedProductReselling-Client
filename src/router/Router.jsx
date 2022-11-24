import CategoryPage from "../components/CategoryPage/CategoryPage";
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
]);
