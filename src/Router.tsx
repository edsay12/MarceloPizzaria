import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";


import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      


    </Route>

  )

)
function Routers() {
  return <RouterProvider router={router} />;
}

export default Routers;
