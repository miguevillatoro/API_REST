import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductFilter from "./components/ProductFilter/ProductFilter";
import AcercaDeNosotros from "./components/Acerca de nosotros/AcercaDeNosotros";
import NuestrasTiendas from "./components/NuestrasTiendas/NuestrasTiendas";
import WomenProducts from "./components/Products/WomenProducts";
import MenProducts from "./components/Products/MenProducts";
import GirlsProducts from "./components/Products/GirlsProducts";
import BoysProducts from "./components/Products/BoysProducts";
import WomenFilter from "./components/ProductFilter/WomenFilter";
import MenFilter from "./components/ProductFilter/MenFilter";
import GirlsFilter from "./components/ProductFilter/GirlsFilter";
import BoysFilter from "./components/ProductFilter/BoysFilter";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import UserDashboard from "./components/Dashboard/UserDashboard";

import "./app.css";

const Layout = () => {
  return (
    <div className="app">
      <Nav/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter ([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
      {
        path:"/productdetails",
        element:<ProductDetails/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/productfilter",
        element:<ProductFilter/>
      },
      {
        path:"/nosotros",
        element:<AcercaDeNosotros/>
      },
      {
        path:"/nuestrastiendas",
        element:<NuestrasTiendas/>
      },
      {
        path:"/womenproducts",
        element:<WomenProducts/>
      },
      {
        path:"/menproducts",
        element:<MenProducts/>
      },
      {
        path:"/girlsproducts",
        element:<GirlsProducts/>
      },
      {
        path:"/boysproducts",
        element:<BoysProducts/>
      },
      {
        path:"/womenfilter",
        element:<WomenFilter/>
      },
      {
        path:"/menfilter",
        element:<MenFilter/>
      },
      {
        path:"/girlsfilter",
        element:<GirlsFilter/>
      },
      {
        path:"/boysfilter",
        element:<BoysFilter/>
      },
      {
        path:"/admindashboard",
        element:<AdminDashboard/>
      },
      {
        path:"/userdashboard",
        element:<UserDashboard/>
      },
    ]
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
