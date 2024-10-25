import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Roadmap from "./components/Pages/Roadmaps/Roadmap.jsx";
import Guide from "./components/Pages/Guide/Guide.jsx";
import Layout from "./Layout/Layout.jsx";
import Index from "./components/Pages/Roadmaps/IntroPage/Index.jsx";
import Frontend from "./components/Pages/Roadmaps/Frontend/Frontend.jsx";
import Product from "./components/Pages/Products/Product.jsx";
import "./index.css";
import HtmlPage from "./components/Pages/Roadmaps/Frontend/Pages/Html/HtmlPage.jsx";
import CSSPage from "./components/Pages/Roadmaps/Frontend/Pages/CSS/CSSPage.jsx";
import FrontendGuide from "./components/Pages/Guide/Content/FrontendGuide.jsx";
import HtmlPrev from "./components/Pages/Guide/Content/HtmlPrev.jsx";
import GuideShow from "./components/Pages/Guide/Intro/GuideShow.jsx";
import CssGuide from "./components/Pages/Guide/Content/CssGuide.jsx";
import JsGuide from "./components/Pages/Guide/Content/JsGuide.jsx";
import DevDesign from "./components/Pages/DevDesign/DevDesign.jsx";
import DevIntro from "./components/Pages/DevDesign/DevPages/DevIntro.jsx";
import XshShahab from "./components/Pages/DevDesign/DevPages/XshShahab.jsx";
import JsPage from "./components/Pages/Roadmaps/Frontend/Pages/Js/JsPage.jsx";
import GithubPage from "./components/Pages/Roadmaps/Frontend/Pages/Github/GithubPage.jsx";
import GithubGuide from "./components/Pages/Guide/Content/GithubGuide.jsx";
import ReactJsGuide from "./components/Pages/Guide/Content/ReactJsGuide.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import ReactJsPage from "./components/Pages/Roadmaps/Frontend/Pages/ReactJs/ReactJsPage.jsx";

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
        path: "dev-design",
        element: <DevDesign />,
        children: [
          {
            path: "",
            element: <DevIntro />,
          },
          {
            path: "xsh_shahab",
            element: <XshShahab />,
          },
        ],
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
          {
            path: "html",
            element: <HtmlPage />,
          },
          {
            path: "css",
            element: <CSSPage />,
          },
          {
            path: "javascript",
            element: <JsPage />,
          },
          {
            path: "github",
            element: <GithubPage />,
          },
          {
            path: "reactjs",
            element: <ReactJsPage />,
          },
        ],
      },
      {
        path: "guide",
        element: <Guide />,
        children: [
          {
            path: "",
            element: <GuideShow />,
          },
          {
            path: "frontend",
            element: <FrontendGuide />,
          },
          {
            path: "html",
            element: <HtmlPrev />,
          },
          {
            path: "css",
            element: <CssGuide />,
          },
          {
            path: "javascript",
            element: <JsGuide />,
          },
          {
            path: "github",
            element: <GithubGuide />,
          },
          {
            path: "react-js",
            element: <ReactJsGuide />,
          },
        ],
      },
      {
        path: "product",
        element: <Product />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
