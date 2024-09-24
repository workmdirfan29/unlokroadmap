import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Roadmap from "./components/Pages/Roadmaps/Roadmap.jsx";
import Guide from "./components/Pages/Guide/Guide.jsx";
import Layout from "./Layout/Layout.jsx";
import Login from "./auth/Login.jsx";
import SignUp from "./auth/SignUp.jsx";
import Index from "./components/Pages/Roadmaps/Categories/Index.jsx";
import Frontend from "./components/Pages/Roadmaps/Categories/Frontend.jsx";
import Product from "./components/Pages/Products/Product.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "roadmap",
        element: <Roadmap />,
        children: [
          {
            path: "",
            element: <Index />,
          },
          {
            path: "frontend",
            element: <Frontend />,
          },
        ],
      },
      {
        path: "guide",
        element: <Guide />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "auth/signup",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
