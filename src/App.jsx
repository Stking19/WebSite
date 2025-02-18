import './App.css'
import Checkout from './pages/checkout/Checkout'
import Home from './pages/home/Home'
import Login from '../src/pages/login/Login'
import Shop from '../src/pages/shop/Shop'
import ShoppingCart from './pages/shoppingCart/ShoppingCart'
import Signup from './pages/signup/Signup'
import Homeroute from './routes/Homeroute'
import { RouterProvider, createBrowserRouter } from 'react-router'

function App() {

const router = createBrowserRouter([
  {
    path: "",
    element: <Homeroute />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/shop",
        element: <Shop />
      },

      {
        path: "/cart",
        element: <ShoppingCart />
      },

      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  },

  {
    path: "/sign-up",
    element: <Signup />
  },

  {
    path: "/login",
    element: <Login />
  }
])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
