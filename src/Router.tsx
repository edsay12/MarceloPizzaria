import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense, useContext } from "react";
import PaymentFinish from "./pages/PaymentFinish";
import Loading from "./components/molecules/loading";
import User from "./pages/User";
import {
  AuthModalContext,
  AuthModalContextType,
} from "./contexts/authModalContext";

const Home = lazy(() => import("./pages/Home"));
const RootLayout = lazy(() => import("./pages/RootLayout"));
const Menu = lazy(() => import("./pages/Menu"));
const Cart = lazy(() => import("./pages/Cart"));

function PrivateRoute({
  component,
  redirectTo,
}: {
  component: JSX.Element;
  redirectTo: string;
}) {
  const { oppenModal } = useContext(AuthModalContext) as AuthModalContextType;

  const user = false

  if (!user) {
    oppenModal();
    return <Navigate to={redirectTo} />;
  } 

  return component
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<PaymentFinish />} />
      <Route
        path="/user"
        element={<PrivateRoute redirectTo="/" component={<User />} />}
      />
    </Route>
  )
);
function Routers() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Routers;
