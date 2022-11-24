const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../components/Home/Home");
const { default: Layout } = require("../layout/Layout");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {path:'/',element:<Home></Home>},
        {path:'/login',element:<p>LOGIN</p>},
    ],
  },
]);
