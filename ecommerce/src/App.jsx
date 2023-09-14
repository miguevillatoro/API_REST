import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
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
        path:"/product/:id",
        element:<Product/>
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
