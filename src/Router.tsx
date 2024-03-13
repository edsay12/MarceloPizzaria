import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Banner from "./components/layout/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Banner/>,
  },
]);
function Routers() {
  return <RouterProvider router={router} />;
}

export default Routers;
