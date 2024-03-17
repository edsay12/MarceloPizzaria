import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";


import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}></Route>


    </Route>

  )

)
function Routers() {
  return <RouterProvider router={router} />;
}

export default Routers;
