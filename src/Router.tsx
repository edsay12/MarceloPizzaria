import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import PaymentFinish from "./pages/PaymentFinish";
import Loading from "./components/molecules/loading";

const Home = lazy(() => import("./pages/Home"));
const RootLayout = lazy(() => import("./pages/RootLayout"));
const Menu = lazy(() => import("./pages/Menu"));
const Cart = lazy(() => import("./pages/Cart"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<PaymentFinish   />} />
    </Route>
  )
);
function Routers() {
  return (
    <Suspense fallback={<Loading/>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Routers;
