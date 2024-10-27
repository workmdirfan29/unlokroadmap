import "./index.css";
import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./components/Home/Home.jsx"));
const Roadmap = lazy(() => import("./components/Pages/Roadmaps/Roadmap.jsx"));
const Guide = lazy(() => import("./components/Pages/Guide/Guide.jsx"));
const Layout = lazy(() => import("./Layout/Layout.jsx"));
const Index = lazy(() =>
  import("./components/Pages/Roadmaps/IntroPage/Index.jsx")
);
const Frontend = lazy(() =>
  import("./components/Pages/Roadmaps/Frontend/Frontend.jsx")
);
const Product = lazy(() => import("./components/Pages/Products/Product.jsx"));
const HtmlPage = lazy(() =>
  import("./components/Pages/Roadmaps/Frontend/Pages/Html/HtmlPage.jsx")
);
const CSSPage = lazy(() =>
  import("./components/Pages/Roadmaps/Frontend/Pages/CSS/CSSPage.jsx")
);
const FrontendGuide = lazy(() =>
  import("./components/Pages/Guide/Content/FrontendGuide.jsx")
);
const HtmlPrev = lazy(() =>
  import("./components/Pages/Guide/Content/HtmlPrev.jsx")
);
const GuideShow = lazy(() =>
  import("./components/Pages/Guide/Intro/GuideShow.jsx")
);
const CssGuide = lazy(() =>
  import("./components/Pages/Guide/Content/CssGuide.jsx")
);
const JsGuide = lazy(() =>
  import("./components/Pages/Guide/Content/JsGuide.jsx")
);
const DevDesign = lazy(() =>
  import("./components/Pages/DevDesign/DevDesign.jsx")
);
const DevIntro = lazy(() =>
  import("./components/Pages/DevDesign/Dev/DevIntro.jsx")
);
const XshShahab = lazy(() =>
  import("./components/Pages/DevDesign/DevPages/XshShahab.jsx")
);
const JsPage = lazy(() =>
  import("./components/Pages/Roadmaps/Frontend/Pages/Js/JsPage.jsx")
);
const GithubPage = lazy(() =>
  import("./components/Pages/Roadmaps/Frontend/Pages/Github/GithubPage.jsx")
);
const GithubGuide = lazy(() =>
  import("./components/Pages/Guide/Content/GithubGuide.jsx")
);
const ReactJsGuide = lazy(() =>
  import("./components/Pages/Guide/Content/ReactJsGuide.jsx")
);
const ReactJsPage = lazy(() =>
  import("./components/Pages/Roadmaps/Frontend/Pages/ReactJs/ReactJsPage.jsx")
);

const TSPage = lazy(() =>
  import("./components/Pages/Roadmaps/Frontend/Pages/TypeScript/TSPage.jsx")
);

const TsGuide = lazy(() => import("./components/Pages/Guide/Content/TsGuide.jsx"))
const Backend = lazy(() => import("./components/Pages/Roadmaps/Backend/Backend.jsx"))
const NodeJsPage = lazy(() => import("./components/Pages/Roadmaps/Backend/Pages/NodeJs/NodeJsPage.jsx"))

const NotFound = lazy(() => import("./components/utils/NotFound.jsx"));
const ErrorBoundary = lazy(() => import("./ErrorBoundary.jsx"));
const Spinner = lazy(() => import("./Spinner.jsx"));

// Route grouping for better organization
const devDesignRoutes = [
  { path: "", element: <DevIntro /> },
  { path: "xsh_shahab", element: <XshShahab /> },
];

const roadmapRoutes = [
  { path: "", element: <Index /> },
  { path: "frontend", element: <Frontend /> },
  { path: "html", element: <HtmlPage /> },
  { path: "css", element: <CSSPage /> },
  { path: "javascript", element: <JsPage /> },
  { path: "github", element: <GithubPage /> },
  { path: "reactjs", element: <ReactJsPage /> },
  { path: "typescript", element: <TSPage /> },
  { path: "backend", element: <Backend /> },
  { path: "nodejs", element: <NodeJsPage /> },
];

const guideRoutes = [
  { path: "", element: <GuideShow /> },
  { path: "frontend", element: <FrontendGuide /> },
  { path: "html", element: <HtmlPrev /> },
  { path: "css", element: <CssGuide /> },
  { path: "javascript", element: <JsGuide /> },
  { path: "github", element: <GithubGuide /> },
  { path: "react-js", element: <ReactJsGuide /> },
  { path: "ts-guide", element: <TsGuide /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "dev-design",
        element: (
          <Suspense fallback={<Spinner />}>
            <DevDesign />
          </Suspense>
        ),
        children: devDesignRoutes,
      },
      {
        path: "roadmap",
        element: (
          <Suspense fallback={<Spinner />}>
            <Roadmap />
          </Suspense>
        ),
        children: roadmapRoutes,
      },
      {
        path: "guide",
        element: (
          <Suspense fallback={<Spinner />}>
            <Guide />
          </Suspense>
        ),
        children: guideRoutes,
      },
      {
        path: "product",
        element: (
          <Suspense fallback={<Spinner />}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Spinner />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Suspense>
  </StrictMode>
);
