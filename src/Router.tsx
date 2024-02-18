import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className="text-black font-bold bg-red-200">PRimeira rota</h1>,
  },
]);
function Routers() {
  return <RouterProvider router={router} />;
}

export default Routers;
