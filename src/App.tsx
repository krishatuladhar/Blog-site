import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePost from "./pages/SinglePost";
import RootLayout from "./pages/RootLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/single-post", element: <SinglePost /> },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
