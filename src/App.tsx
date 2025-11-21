import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import RootLayout from "./pages/RootLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/single-post/:id", element: <SinglePost /> },
      { path:'/register', element: <Register />},
     { path:'/login' , element: <Login />},
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
