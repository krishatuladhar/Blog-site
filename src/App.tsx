import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import RootLayout from "./pages/RootLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddPost from "./pages/AddPost";
import Profile from "./pages/Profile";
import MyBlogs from "./pages/MyBlogs";
import EditPost from "./pages/EditPost";
import "./assets/css/blog.css";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/single-post/:slug",
        element: (
          <ProtectedRoute>
            <BlogPost />
          </ProtectedRoute>
        ),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      {
        path: "/add-post",
        element: (
          <ProtectedRoute>
            {" "}
            <AddPost />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-blogs",
        element: (
          <ProtectedRoute>
            <MyBlogs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/blogs/edit/:slug",
        element: (
          <ProtectedRoute>
            {" "}
            <EditPost />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
